const arr = [3,5,4,1,0,-2,30,2,10]

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)
    return arr
}

function selectionSort(arr) {
    const n = arr.length 

    for(let i=0; i<n-1; i++){
        let minIndex = i

        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        if(minIndex!==i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }

    return arr
}

function insertionSort(arr) {
    for(let i=1;i<arr.length;i++) {
        let key = arr[i]
        let j = i - 1

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = key
    }
    return arr
}

function quickSort(arr) {
    if(arr.length<2) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function mergeSort(arr) {
    if(arr.length<2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right){
    let result = []
    let i = 0
    let j = 0

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

console.log(mergeSort(arr))
