function isPalindrome(string) {
const stringReverse = string.toLowerCase().split("").reverse().join("")
return string === stringReverse  
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false



