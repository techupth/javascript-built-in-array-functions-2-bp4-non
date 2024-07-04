function isPalindrome(string) {
  // Start coding here
  const cleanString = string.toLowerCase().replace(/[\W_]/g, '');

  for (let i = 0; i < Math.floor(cleanString.length / 2); i++) {
    if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false