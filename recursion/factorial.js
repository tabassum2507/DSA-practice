function factorial(num){

    if(num === 1){
        return 1;
    }

    return num*factorial(num - 1);
}

let a=factorial(4);
console.log(a)