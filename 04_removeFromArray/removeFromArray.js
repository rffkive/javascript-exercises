const removeFromArray = function(array, ...num) 
    {
        for ( const number of num) 
              {
                const index = array.indexOf(number);
                if (index > -1) 
                  { //only spliuce array when item is found
                     array.splice(index,1); //2nd parameter means remove one item only
                  }
              }
        return array;
    };

// Do not edit below this line
module.exports = removeFromArray;
