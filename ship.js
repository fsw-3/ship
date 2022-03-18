function shipStar(star){
    let result = '';

    //loping top
    for (let i = 1; i <= star + 1; i++) {
        //space loop
        for (let s = 1; s <= 3 * star - i; s++) {
            result += ' ';
        }
        //stars loop top
        for (let j = 1; j < 3 * i - 1 ; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}
console.log(shipStar(1));