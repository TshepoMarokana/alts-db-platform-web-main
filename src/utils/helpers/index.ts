export const uuid = (): number => {
  return Math.round((Math.random() * 10) * (Math.random() * 10) * (Math.random() * 10));
};
