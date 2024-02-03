const arr1 = [3,6,5,8,2,9]
const arr2 = [1,2,7,9,90,8,66]

function merge() {
  const arr = [...arr1, ...arr2].sort((a,b)=>a-b)
  console.log(arr)
  const clean = Array.from(new Set(arr))
  console.log(clean)
  let freqMap = {}
  arr.forEach(item=>{
    freqMap[item] = (freqMap[item] || 0) + 1
  })
  console.log(freqMap)

  let maxElement
  let max = 0
  for(let item in freqMap){
    if(freqMap[item]>max){
      maxElement = item
      max = freqMap[item]
    }
  }
  let product = maxElement * max
  return {               
    maxElement,
    max,
    product
  }
}

console.log(merge())

let inputString = "apple you hip back";

// Split the string into an array of words
let words = inputString.split(' ');

// Swap the first and last words
let temp = words[0];
words[0] = words[words.length - 1];
words[words.length - 1] = temp;

// Join the words back into a string
let outputString = words.join(' ');

console.log(outputString);

function isPrime(num) {
  // 0 and 1 are not prime numbers
  if (num <= 1) {
      return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false; // The number is divisible, so it's not prime
      }
  }

  return true; // The number is not divisible by any other numbers, so it's prime
}

console.log(isPrime(2))

function filterPrimeNumbers(array) {
  function isPrime(num) {
      if (num <= 1) {
          return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              return false;
          }
      }
      return true;
  }

  return array.filter((num) => isPrime(num));
}


var deleteDuplicates = function(head) {
  let current = head;

  while (current && current.next) {
      if (current.val === current.next.val) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }
  return head;
};

const inputArray = ["d", "b", "c", "b", "c", "a"];

const uniqueElements = inputArray.filter((element, index, array) => array.indexOf(element) === array.lastIndexOf(element));

console.log(uniqueElements);


function outer(){
    let a = 20
    function inner(){
        return a
    }
    return inner()
}

console.log(outer())
