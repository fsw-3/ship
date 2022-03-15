const star = (input) => {
  let result = "";
  //   let row = input * 2;

  // Print Atas
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < 3 * input - 2 - i; j++) {
      result += " ";
    }
    for (let x = 0; x < 2 * input - (2 * input - 2 * i - 1); x++) {
      result += "*";
    }
    result += "\n";
  }

  // Print Bawah
  for (let i = 0; i < input; i++) {
    for (let x = 0; x < 2 * i; x++) {
      result += " ";
    }
    for (let j = 0; j < 6 * input - 3 - 4 * i; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
};
console.log(star(1));
console.log(star(2));
console.log(star(3));
console.log(star(4));
