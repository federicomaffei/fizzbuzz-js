describe("Fizzbuzz", function() {

  var fizzbuzz;

  beforeEach (function(){
    fizzbuzz = new Fizzbuzz;
  });

  describe('knows when a number is divisible', function(){

    it('by three', function(){
      expect(isDivisibleByThree(3)).toEqual(true);
    });

  });


});