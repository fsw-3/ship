function kapal(n) {
let z=1;
let y=n-3;
let kosong = "";
let kosong1 = "";
for (let i = 0; i < n; i++) {
    for (let j = n*2+y; j >= i; j--) {
        kosong += " ";
    }
    for (let k = 1; k <=z; k++) {
        kosong += "*";
    }
    z+=2;
    kosong+='\n';
}
s = (z-2)*3;

for (let t = 0;  t < n; t++) {
    for (let v = 0; v < t; v++) {
        kosong1+="  ";
    }
    for (let u = s-1; u >= t; u--) {
        kosong1+="*";
    }
    s-=3;
    kosong1+='\n'
}
return kosong+kosong1
}

console.log(kapal(9));
