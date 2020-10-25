export const isObject = (val: unknown): val is object =>
  typeof val === 'object';
export const isArray = (val: unknown) => val instanceof Array;
export const isNumber = (val: unknown): val is number =>
  typeof val === 'number' || val instanceof Number;
export const isString = (val: unknown): val is string =>
  typeof val === 'string' || val instanceof String;

export const setToObject = <Val>(obj: object, key: string, defaultValue: Val) => {
  if (defaultValue === undefined) {
    defaultValue = null;
  }
  const parts = `${key}`.split('.');
  if (obj && (isObject(obj) || isArray(obj))) {
    let root = obj;
    let part;
    for (const i in parts) {
      part = parts[i];
      if ((isObject(root) || isArray(root)) && root[part] !== undefined) {
        root = root[part];
      } else {
        return defaultValue;
      }
    }
    return root;
  }

  return defaultValue;
};
