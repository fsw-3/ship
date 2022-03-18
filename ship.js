function ship(star) {
  let string = "";
  // membuat looping  bagian atas
  for (let i = 0; i < star; i++) {
    // menambahkan spasi ke string
    for (let j = 0; j < star * 3 - 2 - i; j++) {
      string += " ";
    }
    // Add '*' tostring
    for (let x = 0; x < 1 + 2 * i; x++) {
      string += "*";
    }
    string += "\n";
  }
  // membuat looping bagian bawah
  for (let i = 0; i <= star - 1; i++) {
    //menambahkan spasi ke string
    for (let j = 1; j <= 2 * i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < (star * 2 - i) * 3 - 3; k++) {
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
