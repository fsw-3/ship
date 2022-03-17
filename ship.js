function ship(number) {
  // variable penampung *
  let result = "";
  // looping bagian atas ship
  for (let i = 0; i <= number; i++) {
    for (let j = 1; j <= 3 * number - i; j++) {
      result += " ";
    }

    for (let k = 0; k < i * 2 - 1; k++) {
      result += "*";
    }
    result += "\n";
  }
  // looping bagian bawah ship
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * (3 * number - i) - 1; k++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}
console.log(ship(1));
console.log(ship(2));
console.log(ship(3));
console.log(ship(4));
