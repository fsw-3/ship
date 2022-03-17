// Ciee Lagi Liat Kodingan Ini

function ship(key) {
    // Variabel Untuk Menampilkan Kapal
    let result = '';
    // Variabel Untuk Menyimpan Hasil Pangkat 2
    let pow = 0;
    // Variabel Untuk Menyimpan Jumlah Bintang Yang Perlu Dihapus Di Bagian Kanan
    let num = 0;

    // Fungsi if Untuk Memeriksa Value Key
    if(key > 2){
        // Variabel Yang Berfungsi Untuk Menyimpan Jumlah Key Sementara
        let key_second = key + 3;
        
        // Looping Pangkat 2 apabila key diatas 2
        for(let j = 1; j <= key_second; j++){
            pow = pow + 3;
        }
    }else {

        // Looping Pangkat 2 apabila key dibawah sama dengan 2
        for(let j = 1; j <= key; j++){
            pow = (pow + 1) * 3;
        }
    }

    // Fungsi if Untuk Memeriksa Apakah Jumlah Value Variabel pow Ganjil Atau Genap
    if(pow % 2 == 0){
        pow = pow - 3;
    }

    // Variabel pow_half Berfungsi Untuk Menampilkan Bintang Sehingga Berada Di Tengah
    pow_half = pow / 2;

    // Looping Atas
    for (let j = 1; j <= key; j++) {
        // Looping Pertama Untuk Memberikan Spasi Kepada Bintang
        for (let k = 0; k < pow_half - j; k++) {
            result += ' '
        }

        // Looping Kedua Untuk Menampilkan Bintang
        for (let l = 0; l < (2 * j - 1); l++) {
            result += '*';
        }

        // Memberikan Garis Baru Kepada Setiap Hasil Looping
        result += '\n';
        
    }

    // Looping Bawah
    for (let m = 0; m < key; m++) {
        // Looping Pertama Untuk Memberikan Spasi Kepada Bintang
        for (let n = 1; n <= m * 2; n++) {
            result += ' ';
        }

        // Looping Kedua Untuk Menampilkan Bintang
        for (let o = 0; o < pow - num; o++) {
            result += '*';
        }

        // Menambahkan Variabel num Untuk Menghapus Jumlah Bintang Setiap Di Loop
        num = num + 4;
        
        // Memberikan Garis Baru Kepada Setiap Hasil Looping
        result += '\n';
    }

    // Untuk Memberikan Hasil Dari Function
    return console.log(result);

}

// Menampilkan Kapal
ship(1);
ship(2);
ship(3);
ship(4);
