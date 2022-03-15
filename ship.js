// Ciee Lagi Liat Kodingan Ini

function ship(key) {
    let result = '';

    for (let i = 1; i <= key; i++) {
        for (let j = 1; j <= (key - i); j++) {
            result += ' ';
        }

        for (let k = 0; k != (2 * i - 1); k++) {
            result += '*';
        }

        for (let l = 1; l <= (key - i); l++) {
            result += ' ';
        }

        result += '\n'
        
    }

    for (let i = 1; i <= key; i++) {
        
        
    }

    return console.log(result);

}

ship(2)
