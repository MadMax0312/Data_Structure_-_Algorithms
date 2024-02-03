function checkMonotonic(arr) {
    let increasing = true
    let decreasing = true

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            increasing = false
        } 
        if(arr[i+1] > arr[i]) {
            decreasing = false
        }
    }
    return increasing || decreasing
}

console.log(checkMonotonic([8,7,6,5,4,3]))