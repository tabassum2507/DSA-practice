function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        console.log( arr, arr[j], arr[j+1 ])
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  const a = bubbleSort([2,4,1,7,3]);
  console.log(a)