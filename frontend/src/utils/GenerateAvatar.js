const generateDiceBearAvataaars = (seed) =>
  `https://api.dicebear.com/10.x/avataaars/svg?seed=${seed}`;

const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/10.x/bottts/svg?seed=${seed}`;

const generateDiceBearGridy = (seed) =>
  `https://api.dicebear.com/10.x/gridy/svg?seed=${seed}`;

const generateDiceBearDylan = (seed) =>
  `https://api.dicebear.com/10.x/dylan/svg?seed=Felix=${seed}`;

const generateDiceBearBotts = (seed) =>
  `https://api.dicebear.com/10.x/bottts/svg?seed=Aneka=${seed}`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(Math.random());
    data.push(res);
  }

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(Math.random());
    data.push(res);
  }

  // for (let i = 0; i < 2; i++) {
  //   const res = generateDiceBearGridy(Math.random());
  //   data.push(res);
  // }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearDylan(Math.random());
    data.push(res);
  }
  return data;
};
