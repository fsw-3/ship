function ship(star) {
  let string = "";
  //   looping bagian ats ship
  for (let i = 0; i < star; i++) {
    // printing spaces
    for (let j = 0; j <= star - i; j++) {
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
console.log(ship(3));
console.log(ship(4));
