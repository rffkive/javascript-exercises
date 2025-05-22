const fibonacci = function(arg) {
    let a = 0;
    let b = 1;
    let nexTerm;

    let num;
    if ( typeof arg !== 'number' ) {
        num = parseInt (arg);
    }  else {num = arg;}

    if (num == 0) 
        { return 0;} 
    else if ( num < 0) 
        { return "OOPS" } 
      
    else {

             for (let i=1; i<num; i++ ) {
                nexTerm = a+b;
                a = b;
                b = nexTerm;
            }

            return b;}
         };

// Do not edit below this line
module.exports = fibonacci;
