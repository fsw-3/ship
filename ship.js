// function shipStar(star){
//     let result = '';

//     //loping top
//     for (let i = 1; i <= star + 1; i++) {
//         //space loop
//         for (let s = 1; s <= 2 * star + 1 - i; s++) {
//             result += ' ';
//         }
//         //stars loop top
//         for (let j = 0; j <= 2 * i - 2 ; j++) {
//             result += '*';
//         }
//         result += '\n';
//     }
//     return result;
// }
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
        for(let j = 1; j <= i; j++){
            result += ' ';
        }
        for(let k = 1; k <= 6 * star - 3 - i; k++){
            result += '*';
        }
        result += '\n';
    }
    return result;
}
console.log(shipStar(1));
console.log(shipStar(2));
// console.log(shipStar(3));
// console.log(shipStar(4));