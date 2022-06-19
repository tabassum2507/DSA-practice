function maxSum( arr, num ){
    if( num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for(let i=0; i <arr.length - num+1; i++){
        temp=0;

        for(let j=1; j<num; j++){
            temp += arr[i+j];
            console.log(temp)
        }
        if (temp > max) {
            max= temp;
        }
    }
    return max;
}

let a = maxSum( [1,2,3,4,5,3], 4)
console.log(a)