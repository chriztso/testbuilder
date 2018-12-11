// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
   // Visa always has a prefix of 4 and a length of 13, 16, or 19.
   // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Once you've read this, go ahead and try to implement this function, then return to the console
  var twotofour = Number(cardNumber.slice(1,4));
  var secondfour = Number(cardNumber.slice(0,4));
  var secondsix = Number(cardNumber.slice(0,6));
 
    if(cardNumber.length === 14 && cardNumber[0] === '3' &&(cardNumber[1] === '8'  || cardNumber[1] === '9' )) {
        return "Diner's Club";
    }
    
    else if (cardNumber.length === 15 && cardNumber[0] === '3' &&(cardNumber[1] === '4'  || cardNumber[1] === '7' )){
        return "American Express";
    }
    else if(cardNumber.length === 13 && cardNumber[0] === '4'){
      return "Visa"; 
     } 
    
    else if((cardNumber.length === 16 || cardNumber.length === 19) && cardNumber[0] === '4' && (twotofour !== 903 && twotofour !== 905 && twotofour !== 911 && twotofour !== 936)){
        return "Visa";
    }
    
    

    else if(cardNumber.length === 16 && (cardNumber[0] === '5' &&  (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5'))) {
        return "MasterCard";
    }
    else if((cardNumber.length === 16 || cardNumber.length === 19) && ((cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '6' && cardNumber[1] === '4' && (cardNumber[2] === '4'|| cardNumber[2] === '5' || cardNumber[2] === '6' || cardNumber[2] === '7' || cardNumber[2] === '8' || cardNumber[2] === '9')) ||( cardNumber[0] === '6' && cardNumber[1] === '5'))){
        return "Discover";
    }
    else if((cardNumber.length >= 12 && cardNumber.length <= 19) && ((cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '8') || (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '2' && cardNumber[3] === '0') || (cardNumber[0] === '5' && cardNumber[1] === '0' && cardNumber[2] === '3' && cardNumber[3] === '8') || (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4'))){
        return "Maestro";
    }
   

    

    else if(cardNumber.length >= 16 && cardNumber.length <=19){
     var firstsix = Number(cardNumber.slice(0,6));
     var firstthree = Number(cardNumber.slice(0,3));
     var firstfour = Number(cardNumber.slice(0,4));
     if((cardNumber.length === 16 ||cardNumber.length === 18 || cardNumber.length === 19) && (secondfour === 4903|| secondfour === 4905||secondfour === 4911|| secondfour === 4936|| secondfour === 6333|| secondfour === 6759 || secondsix === 564182 || secondsix === 633110)){
      return "Switch";
     }
     if(firstsix >= 622126 && firstsix <= 622925){
       return "China UnionPay";
     }
  
     if (firstthree >=  624 && firstthree <= 626){
        return "China UnionPay";
     }
  
     if(firstfour >= 6282 &&  firstfour<= 6288){
       return "China UnionPay";
     }

    }

    /*else if((cardNumber.length === 16 ||cardNumber.length === 18 || cardNumber.length === 19) && (secondfour === 4903|| secondfour === 4905||secondfour === 4911|| secondfour === 4936|| secondfour === 6333|| secondfour === 6754 || secondsix === 564182 || secondsix === 633110)) {
      return "Switch";
    }*/
    
    

      

 } 

   //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
   /* else if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19 && ((cardNumber[0] === '4' && cardNumber[1] === '9' && cardNumber[2] === '0' && cardNumber[3] === '3') || (cardNumber[0] === '4' && cardNumber[1] === '9' && cardNumber[2] === '0' && cardNumber[3] === '5') || (cardNumber[0] === '4' && cardNumber[1] === '9' && cardNumber[2] === '1' && cardNumber[3] === '1') || (cardNumber[0] === '4' && cardNumber[1] === '9' && cardNumber[2] === '0' && cardNumber[3] === '5') ||
             (cardNumber[0] === '4' && cardNumber[1] === '9' && cardNumber[2] === '3' && cardNumber[3] === '6') || (cardNumber[0] === '5' && cardNumber[1] === '6' && cardNumber[2] === '4' && cardNumber[3] === '1' && cardNumber[3] === '8'&& cardNumber[3] === '2') || (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '3' && cardNumber[3] === '1' && cardNumber[3] === '1'&& cardNumber[3] === '0') || (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '3' && cardNumber[3] === '3') || (cardNumber[0] === '6' && cardNumber[1] === '7' && cardNumber[2] === '5' && cardNumber[3] === '9'))){
        return "Switch";
        
    }*/





