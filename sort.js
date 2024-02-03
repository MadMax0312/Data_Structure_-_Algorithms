const arr = [-5,0,-7,3,-2,1,54,-5]

function bubbleSort() {
  let swapped
  do{
    swapped = false
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1]=temp
        swapped = true
      }
    }
  }
  while(swapped)
}

function insertionSort() {
   for(let i=0;i<arr.length;i++){
    let nti = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>nti){
      arr[j+1]=arr[j]
      j=j-1
    }
    arr[j+1]=nti
   }
}

insertionSort()
 

function quickSort(arr){
  if(arr.length<2){
    return arr
  }
  let pivot = arr[arr.length-1]
  let left = []
  let right = []
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}