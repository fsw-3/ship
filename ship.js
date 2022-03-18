function star1(n){
    let result = "";
    for (let i = 1; i <= n; i++){
        
        for (let j = 1; j <= n - i; j++){
            result += " ";
        }

        for (let k = 0; k < 2*i - 1; k++){
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
}
star1(2);
console.log("--------------------------");

function star2(n){
    let result = "";
    for (let i = 1; i <= n; i++){
        
        for (let j = 1; j <= n - i; j++){
            result += " ";
        }

        for (let k = 0; k <  i*2 - 1; k++){
            result += "*";
        }
        result += "\n";
    }
    for (let i = 1; i < n - 3; i++) {

        for (let j = 0; j < i; j++) {
            result += " ";
        }

        for (let k = 0; k < (n - i) * 2 - 1; k++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
}
star2(5);