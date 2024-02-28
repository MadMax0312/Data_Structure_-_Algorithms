function fib(n, memo={}) {
    
    if(n in memo) {
        return memo[n]
    }
    if(n<=2) {
        return 1
    }
    const res = fib(n-1) + fib(n-2)
    memo[n]=res
    return res
}

console.log(fib(5))