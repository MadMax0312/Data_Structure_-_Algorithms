const s = 'aaadjfdjfaaaakdfjkdjaakfaajkaa'

let res = 0
let count = 0
for(let i=0;i<s.length;i++) {
    if(s[i]==='a'){
        count++
    }else if(s[i]!=='a' && count===2){
        res++
        count=0
    }else{
        count=0
    }
}

console.log(res)