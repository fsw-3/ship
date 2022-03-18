function ship(stars) {
    let result = "";
    // jika i = 0 kemudian i <= (2 x 2) -1 dimulai dari 0 maka kurang 1

    for (let i = 0; i <= stars; i++) {  
        for (let j = 0; j <= stars-i; j++) {
            result += ' ';
        }
        for (let k = 0; k < i * 2-1; k++) {
            result += '*';
        }
        result += '\n';
    }
    // start bawah
    // for (let i = 0; i <= stars-1; i++) {
    //     for (let  k = 0; k< i * 2 -1; k--){
    //         if ( k % 3 == 0) {
    //             result += '';
    //         }
    //     }
    //     result += '\n';
    // }
    return result;
}
console.log(ship(4));