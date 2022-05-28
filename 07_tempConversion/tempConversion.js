const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9; 
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

function test(celsius) {
  let temp = 73.2 * (5/9) + 32;
  console.log(temp);
  temp = Math.round(temp * 10) / 10;
  console.log(temp);

}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
