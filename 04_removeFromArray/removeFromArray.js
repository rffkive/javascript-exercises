 // input - an array with 1 or more value to be removed - [a,b,c,d]
    // output - array with those values to be removed - [a,b,c]

const removeFromArray = function(array, ...args) {
   const newArray = [];
   array.forEach((item) => {
        if(!args.includes(item))
        {
            newArray.push(item);
        }
   });
   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
