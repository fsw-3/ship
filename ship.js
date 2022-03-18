function ship(param1) {
let result = "";
let num = param1;
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num+6-i; j++) {
            result += " ";    
        }
        for (let k = 1; k <= 2*i-1; k++) {
            result += "*";
        }
        result += "\n"
    }
    // for (let l = 1; l <= num; l++) {
    //     for (let m = 1; m <= l; m++) {
    //         result += " ";
    //     }
    //     for (let n = 1; n <= num+4-l; n++) {
    //         result += "*";
    //     }
    //     result += "\n"
    // }
    return result;
}
console.log(ship(3));