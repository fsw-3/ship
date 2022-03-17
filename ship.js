// Ciee Lagi Liat Kodingan Ini

function ship(key) {
    let result = '';
    let pow_length = 1;
    let pow_space = 1;

    for(let i = 1; i <= key; i++){
        pow_length = pow_length * 3;
    }

    for(let j = 1; j <= key; j++){
        pow_space = pow_space * 2
    }

    for (let j = 1; j <= key; j++) {

        // angka 1 disitu harus ada Dynamic, cuman bingun apa yach wkwkwk
        for (let k = 0; k < (pow_space + 1) - j; k++) {
            result += ' '
        }

        for (let l = 0; l < (2 * j - 1); l++) {
            result += '*';
        }

        result += '\n'
        
    }

    // Looping dibawah udah di tambah, cuman logika nya belum pasti, yang pasti setiap turunan harus dikurang dua
    for (let o = 1; o <= key; o++) {
        // for (let o = 0; o < pow; o++) {
        //     result += ' ';
        // }

        for (let p = 0; p < pow_length; p++) {
            result += '*';
        }

        // for (let q = 1; q <= (key - n); q++) {
        //     result += ' ';
        // }

        result += '\n'
    }

    return console.log(result);

}

ship(3)
