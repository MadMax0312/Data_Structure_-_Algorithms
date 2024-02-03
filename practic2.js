function reverseArray(arr, start, end) {
  // Base case: stop recursion when start is greater than or equal to end
  if (start >= end) {
    return arr;
  }

  // Swap elements at the start and end indices
  [arr[start], arr[end]] = [arr[end], arr[start]];

  // Recursive call with updated start and end indices
  return reverseArray(arr, start + 1, end - 1);
}
const arr = [1,2,3,4,5]
let start = 0
let end = arr.length-1


let i = 0
let j = arr.length-1
while(i<j){
  let temp = arr[i]
  arr[i]=arr[j]
  arr[j]=temp
  
  i++
  j--
}

function reverse(start,end){
  if(start>=end){
    return arr
  }

  [arr[start],arr[end]] = [arr[end],arr[start]]

  return reverse(start+1, end-1)
}
console.log(arr)
console.log(reverse(start,end))

class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}
class linkedlist {
  constructor(){
    this.head = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  getSize() {
    return this.size
  }
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else {
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
      freq[curr.value] =(freq[curr.value]||0) + 1
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
    while(fast!==null && fast.next!==null){
      slow = slow.next
      fast = fast.next.next
    }
    return slow.value
  }
  insert(index, value){
    if(index<0||index>this.size){
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
    if(index<0||index>=this.size){
      return null
    }
    if(index===0){
      this.head = this.head.next
    }else {
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
      if(curr.next){
        curr.next = curr.next.next
        this.size--
      }
      return null
    }
  }
  merge(list1,list2){
    let mergeList = new linkedlist()
    let curr1 = list1.head
    let curr2 = list2.head
    while(curr1!==null && curr2!==null){
      if(curr1.value<curr2.value){
        mergeList.append(curr1.value)
      curr1 = curr1.next
      }else{
        mergeList.append(curr2.value)
        curr2 = curr2.next
      }
    }
    while(curr1!==null){
      mergeList.append(curr1.value)
      curr1 = curr1.next
    } 
    while(curr2!==null){
      mergeList.append(curr2.value)
        curr2 = curr2.next
    }
    return mergeList
  }
  search(value){
    if(this.isEmpty()){
      return null
    }else {
      let i = 0
      let curr = this.head
      while(curr){
        if(curr.value === value){
          return i
        }
        curr = curr.next
        i++
      }
    }
    return -1
  }
  reverse(){
    if(this.isEmpty()){
      return null
    }
    let prev = null
    let curr = this.head
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
      console.log('empty')
      return null
    }else{
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

const list = new linkedlist()
list.print()

let freq = list.findDup()
for(let item in freq){
  if(freq[item]>1){
    console.log(item)
  }
}

function fact(n){
  if(n===1||n===0){
    return  1
  } else {
    return n*fact(n-1)
  }
}

function fib(n){
  if(n<=1){
    return n
  } else {
    return fib(n-1)+fib(n-2)
  }
}

function sum(arr, index=0){
  if(index === arr.length){
    return 0
  }else {
    return arr[index]+sum(arr,index+1)
  }
}

function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
}