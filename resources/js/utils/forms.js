/**
 * Conver JSON data into FormData
 * @param  {Any} data
 * @return {FormData}
 * @see: https://stackoverflow.com/a/49388446/622287
 */
export const jsonToFormData = (data) => {
  const formData = new FormData();

  function buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach((key) => {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  }

  buildFormData(formData, data);

  return formData;
};
