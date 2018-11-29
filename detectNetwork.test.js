/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
     var detectNetwork = function(cardNumber){
     if(cardNumber.length === 14 && cardNumber[0] === '3' &&(cardNumber[1] === '8'  || cardNumber[1] === '9' )) {
     return "Diner's Club";
     }
     }

 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
     var detectNetwork = function(cardNumber){
     if(cardNumber.length === 14 && cardNumber[0] === '3' &&(cardNumber[1] === '8'  || cardNumber[1] === '9' )) {
     return "Diner's Club";
     }
     }
     
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
     var detectNetwork = function(cardNumber){
     if (cardNumber.length === 15 && cardNumber[0] === '3' &&(cardNumber[1] === '4'  || cardNumber[1] === '7' )){
     return "American Express";
     }
     }
     
     
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
     var detectNetwork = function(cardNumber){
     if (cardNumber.length === 15 && cardNumber[0] === '3' &&(cardNumber[1] === '4'  || cardNumber[1] === '7' )){
     return "American Express";
     }
     }

     
     
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
         it('has a prefix of 6011 and a length of 16', function() {
          var detectNetwork = function(cardNumber){
          if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5'))){
          return "Discover";
         }
         }
       
       if (detectNetwork('6011231234214444') !== 'Discover') {
       throw new Error('Test failed');
       }
            
    });
         it('has a prefix of 644 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6441231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
   });
         it('has a prefix of 645 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6451231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 646 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6461231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 647 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6471231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 648 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6481231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 649 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6491231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 644 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6441231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 645 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6451231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 646 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6461231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 647 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6471231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 648 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
           if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6481231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 649 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6491231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 65 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6511231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
  });
         it('has a prefix of 65 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
            return "Discover";
            }
            }
            
            if (detectNetwork('6511231234214444333') !== 'Discover') {
            throw new Error('Test failed');
            }
            
});
    it('has a prefix of 6011 and a length of 19', function() {
    var detectNetwork = function(cardNumber){
    if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5')))  {
    return "Discover";
    }
    }
    
    if (detectNetwork('6011231234214444123') !== 'Discover') {
    throw new Error('Test failed');
    }
});
});

describe('Maestro', function() {
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Write full test coverage for the Maestro card
         it('has a prefix of 5018 and a length of 12', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('501890909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 13', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5018909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 14', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('50189090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 15', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('501890909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5018909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 17', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('50189090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 18', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('501890909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5018909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         
         it('has a prefix of 5020 and a length of 12', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('502090909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 13', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5020909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 14', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('50209090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 15', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('502090909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5020909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 17', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('50209090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 18', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('502090909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5020909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         
         
         it('has a prefix of 5038 and a length of 12', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('503890909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         
         it('has a prefix of 5038 and a length of 13', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5038909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 14', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('50389090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 15', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('503890909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5038909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 17', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('50389090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 18', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('503890909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('5038909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 12', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('630490909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 13', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('6304909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 14', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('63049090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 15', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('630490909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 16', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('6304909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 17', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('63049090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 18', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('630490909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 19', function() {
            var detectNetwork = function(cardNumber){
            if((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4')){
            return "Maestro";
            }
            }
            
            if (detectNetwork('6304909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
});
describe('should support China UnionPay')
describe('should support Switch')
