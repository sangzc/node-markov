
const MarkovMachine = require('./markov')

describe("MarkovMachine", function() {
    // Testing the class MarkovMachine and it's instance methods
  
    test("makeText returns a string", function() {
      const strTest = new MarkovMachine('This is a sample string with text in it')
      let text = strTest.makeText()
      expect(typeof text).toEqual("string");
    });

  });