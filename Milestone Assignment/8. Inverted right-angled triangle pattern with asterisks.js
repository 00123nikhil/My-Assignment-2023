function printInvertedRightAngleTriangle(i) {
  for (let row = i; row >= 1; row--) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

printInvertedRightAngleTriangle(5);
