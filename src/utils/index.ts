export const isEmptyObject = (obj: Record<string, any>) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const removeNullKey = <T>(obj: T) => {
  const json = { ...obj };
  for (let i in json) {
    if (Object.prototype.hasOwnProperty.call(json, i)) {
      const element = json[i];
      if (!element && typeof element !== "boolean") {
        delete json[i];
      }
    }
  }
  return json;
};

export const setUpQuery = (json: Record<string, any>) => {
  let query = "?";
  if (isEmptyObject(json)) {
    return "";
  }
  for (const i in removeNullKey(json)) {
    query += encodeURIComponent(i) + "=" + encodeURIComponent(json[i]) + "&";
  }
  return query.replace(/&$/g, "");
};
