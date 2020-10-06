export function makeQuery(params = {}) {
  let query = Object.keys(params).reduce((arr, key) => {
    let val = params[key];
    arr.push(`${key}=${val}`);
    return arr;
  }, []);
  return query.length ? `?${query.join('&')}` : '';
}

export function getQuery() {
  let [path, query] = window.location.href.split('?');
  return query.split('&').reduce((obj, keyVal) => {
    let [key, val] = keyVal.split('=');
    obj[key] = val;
    return obj;
  }, {});
}
