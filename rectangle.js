function rectangle( height, width) {
    let rec = " ";

    for(let i = 0; i< width; i++){
        for(let j=1; j < height; j++){
           if ( i==0 || i== width-1 || j==1 || j==height-1){
              rec +="*"
           }
          rec +=" ";
        }
       rec +="\n";
    }
    console.log(rec)
}

rectangle(6, 3);