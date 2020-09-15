export const clone = (obj, backup = {}) => JSON.parse(JSON.stringify(obj || backup));
