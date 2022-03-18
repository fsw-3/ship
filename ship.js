function ship(number){
    let result='';

    // jumlah baris
    for(let i=1;i<=number;i++){
        // spasi
        for (let j=i;j<number;j++){
            result+=' ';
        }
        for (let k=1;k<=i;k++){
            result +='*';
        }
        for (let l=1;l<=i-1;l++){
            result +='*';
        }
        result+='\n';
    }

    return result;

}
console.log(ship(2));