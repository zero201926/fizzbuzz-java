/*
describe("FizzBuzz", function() {
  it("Print the numbers from 1 to 100", function() {
    expect(function() {
    FizzBuzz.print();
    })
  }).toMatch(/\d{1,}/);
  it("If a number is divisible by 3 print 'Fizz' instead", function() {
    expect(function() {
      FizzBuzz.print();
    }).toEqual('Fizz');
  })
  it("If a number is divisible by 5 print 'Buzz' instead", function() {
    expect(function() {
      FizzBuzz.print();
    }).toEqual('Buzz');
  })
  it("If a number is divisible by 3 and 5 print 'FizzBuzz' instead", function() {
    expect(function() {
      FizzBuzz.print();
    }).toEqual('FizzBuzz');
  })
});
*/

describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it('fizzbuzzes for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});
