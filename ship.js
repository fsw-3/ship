// funtion star dengan satu parameter
const star = (num) => {
  // variabel untuk menampung hasil bentuk bintang
  let result = "";
  // variabel untuk menghasilkan bintang bagian atas dan menampung nilai jumlah bintang di atas terakhir untuk menghasilkan bintang di bagian bawah
  let kk = 0;

  // looping untuk menghasilkan enter dengan '\n'
  for (let i = 0; i < num; i++) {
    // looping untuk menghasilkan spasi kosong agar bintang berbentuk segitiga / layar perahu
    for (let j = 3 * num - 2; j > i; j--) {
      // variabel result diisi dengan spasi kosong
      result += " ";
    }

    // looping untuk menghasilkan bintang di bagian atas
    for (kk = 0; kk <= 2 * i; kk++) {
      // variabel result diisi dengan bintang '*' berbentuk segitiga / layar perahu
      result += "*";
    }
    // variabel result diisi dengan enter '\n'
    result += "\n";
  }

  // looping untuk menghasilkan enter dengan '\n'
  for (let i = 0; i < num; i++) {
    // looping untuk menghasilkan spasi kosong agar bintang berbentuk segitiga / badan perahu
    for (let j = 0; j < 2 * i; j++) {
      // variabel result diisi dengan spasi kosong
      result += " ";
    }

    // looping untuk menghasilkan bintang di bagian bawah
    for (let k = i; k <= (kk - 1) * 3 + 2; k++) {
      // variabel result diisi dengan bintang '*' berbentuk segitiga / badan perahu
      result += "*";
    }
    // variabel kk dikurangi 1, perloop sebelum di enter '\n'
    kk--;
    // variabel result diisi dengan enter '\n'
    result += "\n";
  }

  console.log("output");
  // menampilkan hasil bintang
  console.log(result);
};

// memanggil fungsi star dengan argumen angka
star(1);
star(2);
star(3);
star(4);
star(5);
star(6);
star(7);
star(8);
star(9);
star(10);
