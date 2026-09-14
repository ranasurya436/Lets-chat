import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "fs";

const secretFilePath = "/etc/secrets/serviceAccountKey.json";

const localFilePath = new URL(
  "./serviceAccountKey.json",
  import.meta.url
);

const serviceAccountKey = JSON.parse(
  fs.readFileSync(
    fs.existsSync(secretFilePath) ? secretFilePath : localFilePath,
    "utf-8"
  )
);

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);

export default auth;
