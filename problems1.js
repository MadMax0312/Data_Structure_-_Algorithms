const arr = [1,2,3,4,5,6,7]
const array = [4,2,0,8,7,6,-3, 4, 4, 2, 8, 6]


function binarySearch(target){
  let left = 0
  let right = arr.length-1

  while(left<=right){
      let middle = Math.floor((left + right) / 2)
      if(target === arr[middle]){
          return middle
      }
      if(target<arr[middle]){
          right = middle-1
      }else{
          left = middle + 1
      }
  }
  return -1
}

function reverseArray(arr, start = 0, end = arr.length - 1) {
  // Base case: stop recursion when start is greater than or equal to end
  if (start >= end) {
    return arr;
  }

  // Swap elements at the start and end indices
  [arr[start], arr[end]] = [arr[end], arr[start]];

  // Recursive call with updated start and end indices
  return reverseArray(arr, start + 1, end - 1);
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray([...originalArray]);


function nn(){
  for(let i=0,j=arr.length-1;i<j;i++,j--){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr
}

function serie(str, index = str.length - 1) {
  if (index < 0) {
    return '';
  }
  return str[index] + serie(str, index - 1);
}

console.log(serie('asdfghjkl;'));

function series(str) {
  if (str.length < 1) {
    return '';
  }
  return str.substr(1) + str[0];
}

