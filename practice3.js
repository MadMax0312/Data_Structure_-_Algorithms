function binary(arr,target){
    let left = 0
    let right = arr.length - 1

    while(left<=right){
        let middle = Math.floor((left+right) / 2)
        if(target === arr[middle]){
            return middle
        }
        if(target<arr[middle]){
            right = middle - 1
        }else {
            left = middle + 1
        }
    }
    return -1
}

function recurReverse(arr, start = 0, end = arr.length - 1){
    if(start >= end){
        return arr
    }

    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    return recurReverse(arr, start+1, end-1)
}

const originalArray = [1, 2, 3, 4, 5];

function normalRver(arr){
    let i=0
    let j=arr.length-1
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}

function strRever(str,index=str.length-1){
    if(index<0){
        return ''
    }
    return str[index] + strRever(str,index-1)
}

function reveStr(str){
    if(str.length<1){
        return ''
    }
    return str.substr(1) + str[0]
}

function bubbleSort(arr){
    let swapped
    do {
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while(swapped)
    return arr
}

function merggg(arr) {
    let freq = {}
    arr.forEach(item=>{
        freq[item] = (freq[item] || 0) + 1
    })

    console.log(freq)

    let maxElement
    let max = 0
    for(let item in freq){
        if(freq[item]>max){
            maxElement = item
            max = freq[item]
        }
    }
    let product = maxElement * max
    return product
}

const arr1 = [1,23,4,6,4,2,1,8,0,9,8,7,5,2,3,4,7,6,8,9,0]

function isPrime(n){
    if(n<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

function check(arr){
    function isPrime(n){
        if(n<=1){
            return false
        }
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i===0){
                return false
            }
        }
        return true
    }
    return arr.filter(num=>isPrime(num))
}

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linked {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let curr = this.head
            while(curr){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    findDup(){
        let freq = {}
        let curr = this.head
        while(curr){
            freq[curr.value] = (freq[curr.value] || 0) + 1
            curr = curr.next
        }
        return freq
    }

    findMiddle(){
        if(this.isEmpty()){
            return null
        }
        let slow = this.head
        let fast = this.head
        while(fast.next!==null && fast!==null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    insert(value, index){
        if(index>this.size || index<0){
            return null
        }
        if(index===0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let curr = this.head
            for(let i=1;i<index;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        if(index===0){
            this.head = this.head.next
        } else {
            let curr = this.head
            for(let i=1;i<index;i++){
                curr = curr.next
            }
            curr.next = curr.next.next
        }
        this.size--
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        } else {
            let curr = this.head
            while(curr.next && curr.next.value!==value){
                curr = curr.next
            }
                curr.next = curr.next.next
                this.size--
        }
        return null
    }

    mergeSortedLists(list1,list2){
        let mergeList = new linked()
        let curr1 = list1.head
        let curr2 = list2.head

        while(curr1 && curr2){
            if(curr1.value<curr2.value){
                mergeList.append(curr1.value)
                curr1 = curr1.next
            } else {
                mergeList.append(curr2.value)
                curr2 = curr2.next
            }

            while(curr1){
                mergeList.append(curr1.value)
                curr1 = curr1.next
            }
            
            while(curr2){
                mergeList.append(curr2.value)
                curr2 = curr2.next
            }
        }
        return mergeList
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next 
            i++
        }
        return -1
    }

    reverse(){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('empty list')
        } else {
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list1 = new linked()
const list2 = new linked()

const merge = new linked()
const result = merge.mergeSortedLists(list1,list2)
result.print()
const freq = result.findDup()

for(const item in freq){
    if(freq[item] > 1){
        console.log(item)
    }
}

function insertionSort(arr){
    for(let i=1;i<arr.length-1;i++){
        let key = arr[i]
        let j = i-1
        while(j>=0 && arr[j]<key){
            arr[j+1] =arr[j]
            j = j-1
        }
        arr[j+1] = key
    }
    return arr
}

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right){
    let result = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i=0;i<arr.length - 1 ;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

function selectionSort(arr){
    const n = arr.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;i++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

