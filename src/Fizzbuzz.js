function Fizzbuzz() {};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
	return (number % 3 === 0);
};

Fizzbuzz.prototype.isDivisibleByFive = function(number){
  return true;
};