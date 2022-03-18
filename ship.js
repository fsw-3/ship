function ship(stars) {
    let result = "";
    //i loop baris & kolom
    for (let i = 0; i <=stars*2; i++) {  
        for (let j = 0; j <= stars*2-i; j++) {
            result += ' ';
        }
        for (let k = 0; k < i*2-1; k++) {
            result += '*';
        } 
        result += '\n';
    }
    for (let i = 0; i <= stars; i++) {
        for (let k = 0; k < i*2; k++) {
            result += '*';
        }
        result += '\n';
    }
    console.log(result);
}
ship(1);
ship(2);
ship(3);
ship(4);