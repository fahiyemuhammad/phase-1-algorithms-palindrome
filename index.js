function isPalindrome(word) {
  word = word.toLowerCase()
    if (word === word.split("").reverse().join("")){
      return true
    }else{
      return false
    }
}

/* 
  convert the word to lowercase since it's case sensitive
  splits the word into an array of single characters,reverses each letter, joins abck the letters into a word.
  checks if it's equal to the initial word initial 

*/
console.log(isPalindrome("racecar"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("robot"))
console.log(isPalindrome("a"))
console.log(isPalindrome("ab"))

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
