function calculatePentagonArea() {
  const pValue = getInputValues("pentagon-p-value");
  const bValue = getInputValues("pentagon-b-value");
  //   console.log(pValue, bValue);

  const area = 0.5 * pValue * bValue;
  //   console.log(area);
  setResultById("pentagon-span", area);
}

function getInputValues(inputFieldById) {
  const inputField = document.getElementById(inputFieldById).value;
  const inputValue = parseFloat(inputField);
  //   console.log(inputValue);
  return inputValue;
}

function setResultById(elementById, area) {
  const element = document.getElementById(elementById);
  element.innerText = area;
}
