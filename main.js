function fizzy(num1) {
  if (num1 % 3 === 0 && num1 % 5 !== 0) {
    return 'Fizz'
  } else if (num1 % 5 === 0 && num1 % 3 !== 0) 
  return 'Buzz'
   else (num1 % 5 === 0 && num1 % 3 !== 0) 
  return num1 ;
  else (num1 % 3 = 0 && num1 % 5 = 0) 
  return 'FizzBuzz'
}




  module.exports = {
  fizzy,
}