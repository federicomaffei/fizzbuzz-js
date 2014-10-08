describe("Fizzbuzz", function() {

  var fizzbuzz;

  beforeEach (function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is divisible', function(){

    it('by three', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
    });

    it('by five', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
    });

  });


});