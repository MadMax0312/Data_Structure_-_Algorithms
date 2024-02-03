function fact(n){
    if(n===0 || n===1){
        return 1
    }else {
        return n * fact(n-1)
    }
}

function fibonacci(n){
    if(n<=1){
        return n
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

function sum(arr,index){
    if(index<0){
        return 0
    }else {
        return arr[index] + sum(arr,index-1)
    }
}
const arr2 = [1,2,3,4,5,6,7]
function sum2(arr,index=0){
    if(index===arr.length){
        return 0
    }else {
        return arr[index] + sum2(arr,index+1)
    }
}
const str = 'adlkfjdsljfskljf'
function revStr(str){
    if(str === ''){
        return ''
    }else {
        return revStr(str.substr(1)) + str[0]
    }
}

function reverseString(str, index=0){
    if(index===str.length){
        return ''
    }else {
        return reverseString(str, index+1) + str[index]
    }
}

const arr = [1, 2, 3, 4, 5];

function reverseArray(arr, start = 0, end = arr.length - 1) {
    if(start>=end){
        return arr
    }else {
        [arr[start],arr[end]] = [arr[end],arr[start]]
        return reverseArray(arr,start+1, end-1)
    }
}

function digitSum(n){
    let sum = 0
    if(n===0){
        return sum
    }else{
        let digit = n%10
        sum += digit 
        return sum + digitSum(Math.floor(n/10))
    }
}

function sumNatural(n,i=1){
    if(i>n){
        return 0
    }else{
        return i + sumNatural(n,i+1)
    }
}

function sum22(n){
    if(n===1){
        return 1
    }else {
        return n + sum22(n-1)
    }
}

function reverseStringg(str){
    if(str.length===1){
        return ''
    }else{
        return str[str.length-1] + reverseStringg(str.slice(0,str.length-1))
    }
}

const s = 'helllo how are you?'

function findMax(arr, index = 0, max = Number.MIN_VALUE) {
    if (index === arr.length) {
        return max;
    } else {
        return findMax(arr, index + 1, Math.max(max, arr[index]));
    }
}

function maxv(arr,index=0,max=Number.MIN_VALUE){
    if(arr.length === index){
        return max
    } else {
        return maxv(arr,index+1,Math.max(max,arr[index]))
    }
}

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.substring(1, str.length - 1));
    }
}

function pali(str) {
    if(str.length <= 1){
        return true
    } else if(str[0] !== str[str.length-1]){
        return false
    } else {
        return pali(str.substring(1, str.length-1))
    }
}

const a = "malayalam"
console.log(pali(a))