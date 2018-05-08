// function wordSearch(query, seq){
//   //your code here
//   let arr = [];
//   for(let v of seq)  {
//     if(v.toLowerCase().includes(query.toLowerCase())) { arr.push(v); }
//   }
//   return arr.length > 0 ? arr : arr = ['Empty'];
// }
// console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]));

// function centuryFromYear(year) {
//    return Math.ceil(year / 100);
// }
// console.log(centuryFromYear(1905));
// console.log(centuryFromYear(374));

// function checkPalindrome(inputString) {
//    let rev = inputString.split('').reverse().join('');
//    return inputString === rev;
// }
// console.log(checkPalindrome('aabaa'));

/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/
// function adjacentElementsProduct(inputArray) {
//    inputArray.forEach(
//       function (elem, index) {

//       });

//    console.log(tot);
// }
// adjacentElementsProduct([3, 6, -2, -5, 7, 3]);

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
*/
function addTogether() {
   let tot = 0;
   for(let i of arguments) {
      if(typeof i !== 'number') return undefined;
      tot += i;
   }
   return tot;
}
console.log(addTogether(2)(3));