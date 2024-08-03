function rectangleAreaCalculation() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  //   console.log(width);

  //   length calculation
  const rectangleLengthInput =
    document.getElementById("rectangle-length").value;
  const length = parseFloat(rectangleLengthInput);
  //   console.log(length);

  //   area calculation
  const rectangleArea = width * length;
  console.log(rectangleArea);

  //   display area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = rectangleArea;
}
