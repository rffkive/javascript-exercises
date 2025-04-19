const removeFromArray = function(array, num) {
        const index = array.indexOf(num);

        if (index > -1) { //only spliuce array when item is found
                array.splice(index, 1); //2nd parameter means remove one item only
        }
            return array;
};

// Do not edit below this line
module.exports = removeFromArray;
