function ship(number) {
  let string = "";
  // External loop
  for (let i = 1; i <= number; i++) {
    // printing spaces
    for (let j = 1; j <= number - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
console.log(ship(1));
console.log(ship(2));
// console.log(ship(3));
// console.log(ship(4));
