function countUniqueValue(arr){

    if( arr.length === 0) return 0;
     
    let i= 0;
    for(let j= 1; j < arr.length; j++){
        if ( arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

const a=countUniqueValue([1,1,1,2,2,3,4,5,8]);
console.log(a);