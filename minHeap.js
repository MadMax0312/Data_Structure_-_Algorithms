class Heap {
    constructor() {
        this.arr = []
    }

    left(i) {
        return (i * 2) + 1
    }

    right(i) {
        return (i * 2) + 2
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    display() {
        console.log(this.arr)
    }

    insert(val) {
        this.arr.push(val)
        this.shiftUp(this.arr.length-1)
    }

    shiftUp(i) {
        let arr = this.arr
        while(i > 0) {
            let p = this.parent(i)
            if(arr[i] < arr[p]) {
                let temp = arr[i]
                arr[i] = arr[p]
                arr[p] = temp

                i = p
            } else {
                break
            }
        }
    }

    delete() {
        const removed = this.arr[0]
        const lasValue = this.arr.pop()
        
        if(this.arr.length) {
            this.arr[0] = lasValue
            this.shiftDown(0)
        }
        return removed
    }

    shiftDown(i) {
        let left = this.left(i)
        let right = this.right(i)

        let index = i
        let arr = this.arr

        if(left < arr.length && arr[left] < arr[index]) {
            index = left
        }
        if(right < arr.length && arr[right] < arr[index]) {
            index = right
        }

        if(i!==index) {
            let temp = arr[index]
            arr[index] = arr[i]
            arr[i] = temp

            this.shiftDown(index)
        }
    }

    buildHeap(arr) {
        this.arr = arr
        let n = Math.floor(arr.length / 2) - 1
        for(let i=n; i>=0; i--) {
            this.shiftDown(i)
        }
        console.log(arr)
    }
}

const minHeap = new Heap()
minHeap.display()

minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(6)
minHeap.insert(1)
minHeap.insert(20)

minHeap.display()
console.log(minHeap.delete())
minHeap.display()

minHeap.buildHeap([5,3,2,0,20,1,-2,-3,10])