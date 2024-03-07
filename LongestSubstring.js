// const str = 'aaaaadfjdkaafdjflkdaaaaaaaaaaaaaaa';
// let currentChar = str[0];
// let currentCount = 1;
// let maxChar = str[0];
// let maxCount = 1;
// let result = '';

// for (let i = 1; i <= str.length; i++) {
//   if (str[i] === currentChar) {
//     currentCount++;
//   } else {
//     if (currentCount > maxCount) {
//       maxCount = currentCount;
//       maxChar = currentChar;
//     }
//     currentChar = str[i];
//     currentCount = 1;
//   }
// }


// for (let i = 0; i < maxCount; i++) {
//   result += maxChar;
// } 

// console.log(result);



const str = 'aaaabbbbbbbbbccccccccccccdddddddddddddddddd';

let s = str[0];
let max = 0;
let curr = 0;
let char = '';
let maxChar = '';

for (let i = 0; i <= str.length; i++) {
  if (str[i] === s) {
    curr++;
    char += s;
  } else {
    if (curr > max) {
      max = curr;
      maxChar = char;
    }
    s = str[i];
    char = s;
    curr = 1;
  }
}

console.log(maxChar);

