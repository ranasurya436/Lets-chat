import auth from "../config/firebase-config.js";

export const VerifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authorization token is missing or invalid",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const decodeValue = await auth.verifyIdToken(token);

    if (decodeValue) {
      req.user = decodeValue;
      return next();
    }

    return res.status(401).json({
      message: "Invalid authentication token",
    });
  } catch (e) {
    console.error("Token verification error:", e);

    return res.status(401).json({
      message: "Invalid or expired authentication token",
    });
  }
};

export const VerifySocketToken = async (socket, next) => {
  const token = socket.handshake.auth.token;

  try {
    const decodeValue = await auth.verifyIdToken(token);

    if (decodeValue) {
      socket.user = decodeValue;

      return next();
    }
  } catch (e) {
    return next(new Error("Internal Error"));
  }
};
