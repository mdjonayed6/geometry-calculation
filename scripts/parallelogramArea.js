function parallelogramAreaCalculation() {
  const parallelogramBaseInput =
    document.getElementById("parallelogram-base").value;
  const base = parseFloat(parallelogramBaseInput);
  //   console.log(base);

  //   height calculation
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  ).value;
  const height = parseFloat(parallelogramHeightInput);
  //   console.log(height);

  //   area calculation
  const parallelogramArea = base * height;
  console.log(parallelogramArea);

  //   display result
  const ParallelogramAreaSpan = document.getElementById("parallelogram-area");
  ParallelogramAreaSpan.innerText = parallelogramArea;
}
