function stacks(s) {
    let stack = []
    let obj ={
        '(':')',
        '{':'}',
        '[':']'
    }

for(const item of s){
    if(item in obj){
        stack.push(item)
    } else {
        let popped = stack.pop()
        if(obj[popped]!==item){
            return false
        }
    }
}
return stack.length === 0
}

console.log(stacks('{[()]}'))
