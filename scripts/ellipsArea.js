function calculateEllipseArea() {
  const aValue = getInputValuesFromHere("ellipse-a-value");
  const bValue = getInputValuesFromHere("ellipse-b-value");
  //   console.log(aValue);
  //   console.log(bValue);
  const area = Math.PI * aValue * bValue;
  //   console.log(area);
  setResultById("ellipse-span", area);
}

function getInputValuesFromHere(inputFieldById) {
  const inputField = document.getElementById(inputFieldById).value;
  const inputValue = parseFloat(inputField);
  return inputValue;
}

function setResultById(elementById, area) {
  const element = document.getElementById(elementById);
  element.innerText = area.toFixed(2);
}
