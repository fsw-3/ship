// Ciee Lagi Liat Kodingan Ini

function ship(key) {
    // Variabel Untuk Menampilkan Kapal
    let result = '';
    // Variabel Untuk Menyimpan Hasil Pangkat 2
    let pow = 1;
    let pow2 = 1;

    // Looping Pangkat 2
    for(let j = 1; j <= key; j++){
        pow = pow * 2
    }

    for(let j = 1; j <= key; j++){
        pow2 = pow2 * 3
    }

    // Looping Atas
    for (let j = 1; j <= key; j++) {

        // Looping Pertama Untuk Memberikan Spasi Kepada Bintang
        for (let k = 0; k < pow - j; k++) {
            result += ' '
        }

        // Looping Kedua Untuk Memberikan Spasi Kepada Bintang
        for (let l = 0; l < (2 * j - 1); l++) {
            result += '*';
        }

        // Memberikan Garis Baru Kepada Setiap Hasil Looping
        result += '\n'
        
    }

    // Looping Bawah
    for (let m = 1; m <= key; m++) {

        // // Looping Pertama Untuk Memberikan Spasi Kepada Bintang
        for (let n = 1; n < m ; n++) {
            result += ' '
        }

        // Looping Kedua Untuk Memberikan Spasi Kepada Bintang
        for (let o = 0; o < 2 * ((pow2 - pow) - m) - 1; o++) {
            result += '*';
        }

        // Memberikan Garis Baru Kepada Setiap Hasil Looping
        result += '\n'
    }

    // Untuk Memberikan Hasil Dari Function
    return console.log(result);

}

// Menampilkan Kapal
ship(1);
console.log('\n');
ship(2);
console.log('\n');
ship(3);
console.log('\n');
ship(4);
console.log('\n');
ship(5);
console.log('\n');
