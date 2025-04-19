const convertToCelsius = function(degreeFahrenheit) {
  return ( degreeFahrenheit - 32 ) * 5/9;
};

const convertToFahrenheit = function(degreeCelcius) {
  return ( degreeCelcius * 5/9 +32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
