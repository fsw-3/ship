function ship(num) {
    let star = "";
    let i;
    let j;
    let k;
    let l;
    let m;
    let n;

    for (i = 1; i <= num; i++) {
        for (j = 1; j <= (num*num)-i; j++) {
            star += " ";
        }
        for (k = 1; k < 2*i; k++) {
            star += "*";
            
        }
        star += "\n";
    }
    for (l = 1; l <= num; l++) {
        for (m = 0; m < l; m++) {
            star += " ";
        }
        for (n = (k-1)*3; n >= l+4; n--) {
            star += "*";
            
        }
        star += "\n";
        
    }

    return star;
}

console.log(ship(3))