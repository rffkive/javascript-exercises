const removeFromArray = function(array, ...num) 
    {
        //create a copy of the array to work with
        const result = [...array];
        for ( const number of num) 
              {
                let index;
                while ((index = result.indexOf(number)) !== -1) 
                  { //only spliuce array when item is found
                     result.splice(index, 1); //2nd parameter means remove one item only
                  }
              }
        return result;
    };

// Do not edit below this line
module.exports = removeFromArray;