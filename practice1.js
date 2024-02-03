const arr = [1,2,3,4,5,6,7]
const array = [4,2,0,8,7,6,-3, 4, 4, 2, 8, 6]

function fn(n){
    if(!n){
        return -1
    }else{
        return arr.indexOf(n)
    }
}

function findIndex(n) {
    return n ? arr.indexOf(n) : -1;
}

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

console.log(binarySearch(-3))

function recursiveBinarySearch(target){
    return search(target, 0, arr.length-1)
}

function search(target, left, right){
    if(left>right){
        return -1
    }

    let middle = Math.floor((left+right)/2)
    if(target===arr[middle]){
        return middle
    }

    if(target<arr[middle]){
        return search(target, left, middle-1)
    }else{
        return search(target, middle+1, right)
    }
}

const nums = [3,2,9,20,4,7,1,8]

// function srt(){
//     return nums.sort((a,b)=>a-b)
// }

function bubbleSort(nums) {
    let swapped;
    
    do {
        swapped = false;

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(nums);

function reverseWords(inputString) {
    return inputString.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

let originalString = "i am out home";
let reversedString = reverseWords(originalString);
console.log(reversedString)

function rotateArray(r){
    let k = r % arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k))
}

function removeDup() {
    return Array.from(new Set(array))
}

function twoSum(target) {
    const numMap = new Map()
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i]
        if(numMap.has(complement)){
            return [numMap.get(complement), i]
        }
        numMap.set(nums[i], i)
    }
    return []
}

let originalStrings = "i am in calc in a pl in ok in";
let modifiedString = originalStrings.replace(/in/g, "");


let originalStringss = "i am in calc in a pl in ok in";
let modifiedStrings = originalStringss.split(" in").join("")
console.log(modifiedStrings)

var uniqueArr = [];
let dup =[]
for (var i = 0; i < array.length; i++) {
  if (!uniqueArr.includes(array[i])) {
    uniqueArr.push(array[i]);
  }else{
    dup.push(array[i])
  }
}

let obj = {}
for(let i=0;i<array.length;i++){
    if(!obj[array[i]]){
        obj[array[i]]=1
    }else{
        obj[array[i]]+=1
    }
}












  


