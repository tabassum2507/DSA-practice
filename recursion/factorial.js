function factorial(num){

    if(num == 0){
        return;
    }

    return num*factorial(num - 1);
}

factorial(4)