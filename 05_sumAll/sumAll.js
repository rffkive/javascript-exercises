const sumAll = function(firstNumber,lastNumber) {
        if ( firstNumber > lastNumber) {
                let temp = firstNumber; 
                firstNumber = lastNumber;
                lastNumber = temp;
        }

        if ( firstNumber < 0 || lastNumber < 0) {
                return "ERROR";
        }

        if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
                return "ERROR";
        }
        let totalNUmber = 0;

        for ( i=firstNumber; i <= lastNumber; i++) {
                totalNUmber += i;
        } 
        return totalNUmber;
};

module.exports = sumAll;
