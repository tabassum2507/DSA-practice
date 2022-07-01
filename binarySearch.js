function binarySearch( arr, val ){
    var left = 0;
    var right = arr.length - 1;

    var middle = Math.floor((left + right) / 2);

    while ( arr[middle] !== val && left <= right){
        if ( arr[middle] > val ){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right)/ 2);
    }
    return arr[middle] === val ? middle : -1;
}

let a = binarySearch( [1,2,3,4,5,6,7], 4);
console.log(a);