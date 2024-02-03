// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     const middle = Math.floor(arr.length/2)
//     const left = arr.slice(0,middle)
//     const right = arr.slice(middle)

//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left, right){
//     let result = []
//     let leftIndex = 0
//     let rightIndex = 0
    
//     while(leftIndex <left.length && rightIndex< right.length){
//         if(left[leftIndex] < right[rightIndex]){
//             result.push(left[leftIndex])
//             leftIndex++
//         }else{
//             result.push(right[rightIndex])
//                 rightIndex++
//         }
//     }
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

// const unsortedArray = [38, 27, 43, 3, 9, 82, 10];


function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right){
    let result = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift())
        }else {
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}