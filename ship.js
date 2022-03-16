const ship = (input) => {
  let result = "";

  // Print Top
  for (let i = 0; i < input; i++) {
    // Add space to result
    for (let j = 0; j < 3 * input - 2 - i; j++) {
      result += " ";
    }
    // Add '*' to result
    for (let x = 0; x < 1 + 2 * i; x++) {
      result += "*";
    }
    result += "\n";
  }

  // Print Bottom
  for (let i = 0; i < input; i++) {
    // Add space to result
    for (let x = 0; x < 2 * i; x++) {
      result += " ";
    }
    // Add '*' to result
    for (let j = 0; j < 6 * input - 3 - 4 * i; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
};
ship(1);
ship(2);
ship(3);
ship(4);
