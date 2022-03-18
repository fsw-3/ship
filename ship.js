function shipStar(star){
    let result = '';

    //loping top
    for (let i = 1; i <= star; i++) {
        //space loop
        for (let s = 1; s <= 3 * star - 1 - i; s++) {
            result += ' ';
        }
        //stars loop top
        for (let j = 0; j <= 2 * i - 2; j++) {
            result += '*';
        }
        result += '\n';
    }

    for(let i = 0; i < star; i++){
        for(let j = 1; j <= i * 2; j++){
            result += ' ';
        }
        for(let k = 0; k < 3 * (star * 2 - i) - 3 ; k++){
            result += '*';
        }
        result += '\n';
    }
    return result;
}
console.log(shipStar(1));
console.log(shipStar(2));
// console.log(shipStar(3));
// console.log(shipStar(4))