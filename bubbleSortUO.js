function bubbleSort(arr) {
    for(let i = arr.length; i >0; i--){
        for( let j = 0; j < i- 1; j++){
            if (arr[j] > arr[j+1]) {
                var temp  = arr[j];
                arr[j] = arr[j+ 1];
                arr[j+1] = temp;
            }
        }
    } return arr;
}

const a = bubbleSort([2,4,1,7,3])
console.log(a)