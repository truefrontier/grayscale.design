export default lumToGrayscaleRGB = (lum) => {
  let val = Math.round((255 * (100 - lum)) / 100);
  return [val, val, val];
};
