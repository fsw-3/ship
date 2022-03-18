function shipStar(star){
    let result = '';

    //loping top
    for (let i = 1; i <= star + 1; i++) {
        //space loop
        for (let s = 1; s <= 2 * star + 1 - i; s++) {
            result += ' ';
        }
        //stars loop top
        for (let j = 0; j <= 2 * i - 2 ; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}
console.log(shipStar(1));
