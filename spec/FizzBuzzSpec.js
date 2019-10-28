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
