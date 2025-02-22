const repeatString = function (word, times){ // store 2 arguments as required
    if (times < 3) return 'ERROR';  // if times = negative, return error
    let string = ""; //declare empty string to store the result
    for (i=0; i < times; i++) { // loop
        string += word;} // concat the word to our string
        return string; // return the string, "word" repeated how many "times"
  };

// Do not edit below this line
module.exports = repeatString;
