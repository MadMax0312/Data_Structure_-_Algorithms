// const str = 'abcabcdeabcdefg';

// let res = ''
// let maxChar = ''

// for(let i=0;i<str.length;i++) {
//     res=str[i]
//     for(let j=i+1;j<str.length;j++) {
//         if(!res.includes(str[j])){
//             res+=str[j]
//         }
//     }
//     if(res.length>maxChar.length){
//         maxChar=res
//         res=''
//     }
//         res=''
// }

// console.log(maxChar)

const str = 'abcabcdeabcdefg';

let maxChar = '';

for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let currentMax = '';
    
    for (let j = i; j < str.length; j++) {
        if (currentMax.includes(str[j])) {
            break;
        }
        currentMax += str[j];
    }
    
    if (currentMax.length > maxChar.length) {
        maxChar = currentMax;
    }
}

console.log(maxChar);


// const str = 'abcabcdeabcdefg';

// let maxChar = '';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//     if (res.includes(str[i])) {
//         if (res.length > maxChar.length) {
//             maxChar = res;
//         }
//         res = res.substring(res.indexOf(str[i]) + 1);
//     }
//     res += str[i];
// }

// if (res.length > maxChar.length) {
//     maxChar = res;
// }

// console.log(maxChar);




