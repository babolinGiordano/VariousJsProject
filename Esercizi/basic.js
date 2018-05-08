// //jshint esversion: 6
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// reverseString("hello");

// // Return the factorial of the provided integer.
// //jshint esversion: 6
// function factorialize(num) {
//    let tot = 1;
//    if(num === 0) return 1;
//    for(let i=1;i<=num;i++) {
//       tot *= i;
//    }
//    return tot;
// }
// factorialize(5);

// // Return true if the given string is a palindrome. Otherwise, return false.
// //jshint esversion: 6
// function palindrome(str) {
//    str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
//    let rev = str.split('').reverse().join('');
//    return str === rev ? true : false;
// }
// palindrome("eye");

// Return the length of the longest word in the provided sentence.
//jshint esversion: 6
// function findLongestWord(str) {
//    let max = 0;
//    let array = str.split(' ');
//    for(let val of array){
//       max = val.length > max ? val.length : max;
//    }
//    return max;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//jshint esversion: 6
function titleCase(str) {
   let array = str.toLowerCase().split(' ');
   str = '';
   for(let val of array){
      let first = val.slice(0,1);
      let rest = val.length > 1 ? val.slice(1) : '';
      str += first.toUpperCase() + rest + ' ';
   }
   str = str.slice(0, str.length-1);
   return str;
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
