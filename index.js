function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('')
  return word === reversedWord
}

/*
  Add your pseudocode here

- Split the word into an array of characters
- Reverse the array
- Join the reversed array back into a string
- Compare the reversed string to the original word
- If they are the same, return true; otherwise, return false
*/
/*
  Add written explanation of your solution here
  The function checks whether a given word is a palindrome by reversing the word and comparing it to the original.
If they are exactly the same, it returns true (meaning it is a palindrome); otherwise, it returns false.
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
