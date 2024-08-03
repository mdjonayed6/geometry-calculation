function triangleAreaCalculation() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  // get triangle height
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  //   area calculation
  const triangleArea = 0.5 * base * height;
  console.log("Your are is: ", triangleArea);

  //   display area result
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = triangleArea;
}
