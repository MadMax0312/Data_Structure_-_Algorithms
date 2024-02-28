const str = 'aaaaadfjdkaafdjflkdaaaaaaaaaaaaaaa';
let currentChar = str[0];
let currentCount = 1;
let maxChar = str[0];
let maxCount = 1;
let result = '';

for (let i = 1; i < str.length; i++) {
  if (str[i] === currentChar) {
    currentCount++;
  } else {
    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = currentChar;
    }
    currentChar = str[i];
    currentCount = 1;
  }
}

if (currentCount > maxCount) {
  maxCount = currentCount;
  maxChar = currentChar;
}

for (let i = 0; i < maxCount; i++) {
  result += maxChar;
}

console.log(result);
