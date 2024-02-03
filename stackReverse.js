let s1 = 'applemon'
let arr = []
let str = s1.split('')

for(let i=0; i<s1.length; i++){
    arr.push(str.pop())
}

let s = 'apaaahfdfkdaaljdkfjaaaaplemonaa';
let f='aa'
let count = 0;

for(let i=0;i<s.length;i++){
    if(s[i+f.length]!==f[0] && s[i-1]!==f[0]){
        if(s.substring(i,i+f.length) === f){
            count++
        }
    }
}

console.log(count)



