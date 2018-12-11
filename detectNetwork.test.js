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
   
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
   
  it('has a prefix of 39 and a length of 14', function() {
     
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
     
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
     
     
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
  
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
         it('has a prefix of 6011 and a length of 16', function() {
          
       if (detectNetwork('6011231234214444') !== 'Discover') {
       throw new Error('Test failed');
       }
            
    });
         it('has a prefix of 644 and a length of 16', function() {
            
            
            if (detectNetwork('6441231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
   });
         it('has a prefix of 645 and a length of 16', function() {
            
        
            
            if (detectNetwork('6451231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 646 and a length of 16', function() {
    
            
            if (detectNetwork('6461231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 647 and a length of 16', function() {
        
            
            if (detectNetwork('6471231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 648 and a length of 16', function() {
            
            
            if (detectNetwork('6481231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 649 and a length of 16', function() {
            
            
            if (detectNetwork('6491231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 644 and a length of 19', function() {
           
            
            if (detectNetwork('6441231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 645 and a length of 19', function() {
           
            
            if (detectNetwork('6451231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 646 and a length of 19', function() {
            
            
            if (detectNetwork('6461231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 647 and a length of 19', function() {
            
            
            if (detectNetwork('6471231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 648 and a length of 19', function() {
           
            
            if (detectNetwork('6481231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 649 and a length of 19', function() {
            
            
            if (detectNetwork('6491231234214444111') !== 'Discover') {
            throw new Error('Test failed');
            }
            
    });
         it('has a prefix of 65 and a length of 16', function() {
            
            
            if (detectNetwork('6511231234214444') !== 'Discover') {
            throw new Error('Test failed');
            }
            
  });
         it('has a prefix of 65 and a length of 19', function() {
            
            
            if (detectNetwork('6511231234214444333') !== 'Discover') {
            throw new Error('Test failed');
            }
            
});
    it('has a prefix of 6011 and a length of 19', function() {
    
    
    if (detectNetwork('6011231234214444123') !== 'Discover') {
    throw new Error('Test failed');
    }
});
});

describe('Maestro', function() {
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Write full test coverage for the Maestro card
         it('has a prefix of 5018 and a length of 12', function() {
           
            
            if (detectNetwork('501890909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 13', function() {
            
            
            if (detectNetwork('5018909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 14', function() {
            
            
            if (detectNetwork('50189090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 15', function() {
            
            
            if (detectNetwork('501890909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 16', function() {
            
            
            if (detectNetwork('5018909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 17', function() {
            
            
            if (detectNetwork('50189090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 18', function() {
            
            
            if (detectNetwork('501890909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5018 and a length of 19', function() {
            
            
            if (detectNetwork('5018909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         
         it('has a prefix of 5020 and a length of 12', function() {
            
            
            if (detectNetwork('502090909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 13', function() {
            
            
            if (detectNetwork('5020909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 14', function() {
            
            
            if (detectNetwork('50209090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 15', function() {
            
            
            if (detectNetwork('502090909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 16', function() {
            
            
            if (detectNetwork('5020909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 17', function() {
            
            
            if (detectNetwork('50209090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 18', function() {
            
            
            if (detectNetwork('502090909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5020 and a length of 19', function() {
            
            
            if (detectNetwork('5020909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         
         
         it('has a prefix of 5038 and a length of 12', function() {
            
            
            if (detectNetwork('503890909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         
         it('has a prefix of 5038 and a length of 13', function() {
            
            
            if (detectNetwork('5038909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 14', function() {
            
            
            if (detectNetwork('50389090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 15', function() {
            
            
            if (detectNetwork('503890909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 16', function() {
            
            
            if (detectNetwork('5038909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 17', function() {
            
            
            if (detectNetwork('50389090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 18', function() {
            
            
            if (detectNetwork('503890909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 5038 and a length of 19', function() {
            
            if (detectNetwork('5038909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 12', function() {
            
            
            if (detectNetwork('630490909090') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 13', function() {
            
            
            if (detectNetwork('6304909090901') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 14', function() {
            
            
            if (detectNetwork('63049090909011') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 15', function() {
            
            
            if (detectNetwork('630490909090111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 16', function() {
            
            if (detectNetwork('6304909090901111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 17', function() {
            
            
            if (detectNetwork('63049090909011111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 18', function() {
            
            
            if (detectNetwork('630490909090111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
         it('has a prefix of 6304 and a length of 19', function() {
           
            
            if (detectNetwork('6304909090901111111') !== 'Maestro') {
            throw new Error('Test failed');
            }
});
});
describe('should support China UnionPay', function(){

  for(var prefix = 622126; prefix <= 622925; prefix++){
     var tester = prefix + '1234567890';
     for(var length = 16; length <= 19; length++){
      (function(length, tester, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          if (detectNetwork(tester) !== 'China UnionPay') {
            throw new Error('Test failed');
          }
        })
      })(length, tester, prefix)
     }
  } 

   for(var prefix = 622126; prefix <= 622925; prefix++){
     var tester = prefix + '1234567890';
     for(var length = 16; length <= 19; length++){
      (function(length, tester, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          if (detectNetwork(tester) !== 'China UnionPay') {
            throw new Error('Test failed');
          }
        })
      })(length, tester, prefix)
      tester += '1';
     }
  } 

  for(var prefix = 624; prefix <= 626; prefix++){
     var tester = prefix + '1234567890123';
     for(var length = 16; length <= 19; length++){
      (function(length, tester, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          if (detectNetwork(tester) !== 'China UnionPay') {
            throw new Error('Test failed');
          }
        })
      })(length, tester, prefix)
      tester += '1';
     }
  } 
  for(var prefix = 6282; prefix <= 6288; prefix++){
     var tester = prefix + '123456789012';
     for(var length = 16; length <= 19; length++){
      (function(length, tester, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          if (detectNetwork(tester) !== 'China UnionPay') {
            throw new Error('Test failed');
          }
        })
      })(length, tester, prefix)
      tester += '1';
     }
  } 
});

          
describe('should support Switch', function() {
   it('has a prefix of 4903 and a length of 16', function() {
           
            
            if (detectNetwork('4903000011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 4903 and a length of 18', function() {
           
            
            if (detectNetwork('490300001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 4903 and a length of 19', function() {
           
            
            if (detectNetwork('4903000011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 4905 and a length of 16', function() {
           
            
            if (detectNetwork('4905000011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 4905 and a length of 18', function() {
           
            
            if (detectNetwork('490500001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 4905 and a length of 19', function() {
           
            
            if (detectNetwork('4905000011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 4911 and a length of 16', function() {
           
            
            if (detectNetwork('4911000011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 4911 and a length of 18', function() {
           
            
            if (detectNetwork('491100001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 4911 and a length of 19', function() {
           
            
            if (detectNetwork('4911000011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 4936 and a length of 16', function() {
           
            
            if (detectNetwork('4936000011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 4936 and a length of 18', function() {
           
            
            if (detectNetwork('493600001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 4936 and a length of 19', function() {
           
            
            if (detectNetwork('4936000011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 6333 and a length of 16', function() {
           
            
            if (detectNetwork('6333000011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 6333 and a length of 18', function() {
           
            
            if (detectNetwork('633300001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 6333 and a length of 19', function() {
           
            
            if (detectNetwork('6333000011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 6759 and a length of 16', function() {
           
            
            if (detectNetwork('6759000011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 6759 and a length of 18', function() {
           
            
            if (detectNetwork('675900001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 6759 and a length of 19', function() {
           
            
            if (detectNetwork('6759000011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 564182 and a length of 16', function() {
           
            
            if (detectNetwork('5641820011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 564182 and a length of 18', function() {
           
            
            if (detectNetwork('564182001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 564182 and a length of 19', function() {
           
            
            if (detectNetwork('5641820011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 633110 and a length of 16', function() {
           
            if (detectNetwork('6331100011112222') !== 'Switch') {
            throw new Error('Test failed');
            }
});
   it('has a prefix of 633110 and a length of 18', function() {            
            if (detectNetwork('633110001111222233') !== 'Switch') {
            throw new Error('Test failed');
            }
});   it('has a prefix of 633110 and a length of 19', function() {
            if (detectNetwork('6331100011112222333') !== 'Switch') {
            throw new Error('Test failed');
            }
});
})
