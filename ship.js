const star = (input) => {
  let result = "";
  let row = input * 2;
  for (let i = 0; i < row; i++) {
    // Print bagian atas
    if (i < input) {
      // Print space
      for (let x = 0; x < row - i - 1; x++) {
        result += " ";
      }
      // Print * bagian atas
      for (let j = 0; j < row - (row - input * i - 1); j++) {
        result += "*";
      }
    }
    // Print bagian bawah belum kelar
    else {
      for (let y = 0; y < i; y++) {}
    }
    if (i != row - 1) {
      result += "\n";
    }
  }
  return result;
};
console.log(star(2));
