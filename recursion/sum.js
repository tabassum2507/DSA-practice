function sum(n){
    if(n<=0) return 0;
    
    return n +sum(n-1);
}

const a = sum(7)
console.log(a);