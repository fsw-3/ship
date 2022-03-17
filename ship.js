function ship(number) {
    let result = '';

    // external loop for ship's upper part (pyramid-like pattern)
    for (let row = 1; row <= number; row++) {
        // internal loop
        // add spaces on the left side to result string for positioning the asterisks
        for (let col = 1; col <= number * 3 - row; col++) {
            result += ' ';
        }
        // add asterisks to result string
        for (let i = 0; i < row * 2 - 1; i++) {
            result += '*';
        }
        result += '\n'
    }

    // external loop for ship's lower part (reversed pyramid-like pattern)
    for (let row = 1; row <= number; row++) {
        // internal loop
        // add spaces on the left side to result string for positioning the asterisks
        for (let col = 1; col <= row; col++) {
            result += ' ';
        }
        // add asterisks to result string based on a specific condition (arrange the width)
        for (let i = 0; i < 2 * (number * 3 - row) - 1; i++) {
            result += '*';
        }
        result += '\n'
    }
    console.log(result);
}

ship(2);