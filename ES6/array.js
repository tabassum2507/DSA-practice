function matchedValueRemoval(arr, val) {
    let newArr = [];

    for(let i=0; i< arr.length; i++){
        let arrNum = arr[i];
        let isMatching = false;

        for(let j=0; j < val.length; j++) {
            let valNum = val[j];
            if( arrNum === valNum ) {
                isMatching = true;
            }

            if( isMatching === false) {
                newArr.push(arrNum);
            }
        }
        return newArr;
    }
}

const a = matchedValueRemoval( [ 2,3,2,5,6], [1,2,3]);
console.log(a);