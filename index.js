function reverse(word){
  return word.split("").reverse().join("");
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  return word === reversedWord;

  
  
  
}

/* 
  Add your pseudocode here
  If the word is the same as the reversed word, it should return true.
  Reverse the input string
  If the input string is the same as the reversed input, it should return true else false.
*/

/*
  Add written explanation of your solution here
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
