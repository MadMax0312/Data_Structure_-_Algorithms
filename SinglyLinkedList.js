class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class linkedlist {
  constructor() {
    this.head = null
    this.size = 0
  }
  
  isEmpty() {
    return this.size === 0
  }
  getSize(){
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  findDuplicates() {
    let freqMap = {};
    let current = this.head;
    while (current) {
      freqMap[current.value] = (freqMap[current.value] || 0) + 1;
      current = current.next;
    }
    return freqMap
 }

  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    } else {
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node
    }
    this.size++
  }

  findMiddle() {
    if(this.head === null){
      return null
    }
    let slowPointer = this.head
    let fastPointer = this.head
    while(fastPointer!==null && fastPointer.next!==null){
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next.next
    }
    return slowPointer.value
  }

  insert(index, value){
    if(index<0 || index>this.size){
      console.log('not possible')
      return null
    }
    if(index === 0){
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
      console.log('not possible')
      return null
    }
    if(index === 0){
      this.head = this.head.next
    } else {
      let curr = this.head
      for(let i=1;i<index;i++){
        curr = curr.next
      }
      curr.next = curr.next.next
      this.size--
    }
  }

  removeValue(value) {
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

  mergeSortedLists(list1, list2) {
    let mergeList = new linkedlist()
    let curr1 = list1.head
    let curr2 = list2.head

    while(curr1!==null && curr2!==null){
      if(curr1.value<curr2.value){
        mergeList.append(curr1.value)
        curr1 = curr1.next
      } else {
        mergeList.append(curr2.value)
        curr2 = curr2.next
      }
    }
    while(curr1!==null){
      mergeList.append(curr1.value)
      curr1= curr1.next
    }
    while(curr2!==null){
      mergeList.append(curr2.value)
      curr2 = curr2.next
    }
    return mergeList
  }

  search(value) {
    if(this.isEmpty()){
      return null
    }
    let i=0
    let curr = this.head
    while(curr){
      if(curr.value===value){
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }

  reverse() {
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

  print() {
    if(this.isEmpty()){
      console.log("empty list")
      return null
    }else {
      let curr = this.head
      let listvalues = ' '
      while(curr){
        listvalues += `${curr.value} `
        curr = curr.next
      }
      console.log(listvalues)
    }
  }
}

const list1 = new linkedlist()

list1.print()

list1.append(10)
list1.append(20)
list1.append(30)
list1.print()

const list2 = new linkedlist()

list2.print()
list2.append(50)
list2.append(60)
list2.append(70)
list2.append(70)
list2.append(50)
list2. print()

const mergeList = new linkedlist();
const result = mergeList.mergeSortedLists(list1, list2);
result.print();
const freqMap = result.findDuplicates()

for (let number in freqMap) {
  if (freqMap[number] > 1) {
     console.log(number);
  }
 }