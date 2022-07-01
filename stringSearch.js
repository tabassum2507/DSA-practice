// searching a short string in a long string

function stringSearch( str, short){
    var count = 0;
    for( let i = 0; i < str.length; i++){
        for( let j = 0; j < short.length; j++){
            if ( short[j] !== str[i+j]) break;
            if ( j === short.length-1) count ++;
        }
    }
    console.log(count);
}

stringSearch( "summer mere", "mer")
