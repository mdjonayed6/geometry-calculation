function calculateRhombusArea() {
  const d1Value = getInputValueById("rhombus-d1-value");
  const d2Value = getInputValueById("rhombus-d2-value");
  //   console.log(d1Value, d2Value);

  const areaResult = 0.5 * d1Value * d2Value;
  //   console.log(rhombusArea);

  setResultById("rhombus-span", areaResult);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId).value;
  const inputValue = parseFloat(inputField);
  return inputValue;
}

function setResultById(elementId, areaResult) {
  const element = document.getElementById(elementId);
  element.innerText = areaResult;
}
