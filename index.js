function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) return true;

  else return false;
}

/* 
  Add your pseudocode here
  
  const reversedWord;
  if (word === reversedWord) return true;
  else return false;
  */

 /*
 Add written explanation of your solution here

 1- Get the input string and split it into an array
 2- Reverse the array  
 3- Join the reversed array back to a single string
 4- Compare this new string with the original string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
