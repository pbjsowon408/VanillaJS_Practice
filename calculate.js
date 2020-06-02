const calculator = {
    plus: function(a, b){
    return a+b;
  },
    minus: function(a, b){
    return a-b;
  },
    multiply: function(a, b){
    return a*b;
  },
    power: function(a, b){
    return a**b;
  },
    divide: function(a, b){
    return a/b;
  }
}
console.log(calculator.power(5, 5));

//or

const divide = calculator.divide(5, 5);
console.log(divide);
