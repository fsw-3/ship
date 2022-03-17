let n = 5;
let hasil = "";
// External looping
for (let i = 1; i <= n; i++) {
    // cetak spasi
    for (let j = 1; j <= n - i; j++) {
        hasil += " ";
    }
    // cetak bintang
    for (let k = 0; k < 2 * i - 1; k++) {
        hasil += "*";
    }
    hasil += "\n";
}
console.log(hasil);