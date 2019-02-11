export const setDataInFooter = () => {
  const dataInit = new Date("2007").getFullYear();
  let dataNow = new Date().getFullYear();

  return `${dataInit} - ${dataNow}`;
};

/**
 *
 * @param {String} id
 * @param {String} date string with date
 */
export const getDataElement = (id, date) => {
  document.querySelector(`#${id}`).textContent = date;
};
