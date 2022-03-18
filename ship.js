let numStar = 3;
console.log(star(numStar));

function star(numStar) {
    let star = '';
    let rowStar = numStar * 2;
    for (let i = 1; i <= numStar; i++) {
        for (let j = 1; j <= rowStar-i+numStar-1; j++) {
            star += " ";
        }
        for (let l = 1; l < 2 * i ; l++) {
            star += "*";
        }
            star += "\n";
    }
    let x = 0;
    for (let i = rowStar-1; i >= numStar;i--) {
        for (let j = 1; j <= rowStar-i-1+x; j++) {
            star += " ";
        }
        for (let l = 1; l <=  3 * i - x; l++) {
            star += "*";
        }
            star += "\n";
        x++;
    }  
    return star;
}
