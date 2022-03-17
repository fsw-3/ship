function ship(star) {
  let string = "";
  //   looping bagian ats ship
  for (let i = 1; i <= star; i++) {
    // printing spaces
    for (let j = 1; j <= star - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  //   looping bagian bawah ship
  for (let i = 0; i < star; i++) {
    // printing spaces
    for (let j = 0; j < 2 * i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 6 * star - 3 - 4 * i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

console.log(ship(1));
console.log(ship(2));
console.log(ship(3));
console.log(ship(4));
