class Heap {
    constructor() {
        this.arr = []
    }

    left(i) {
        return (i*2) + 1
    }

    right(i) {
        return (i*2) + 2
    }

    parent(i) {
        return Math.floor((i-1)/2)
    }

    insert(val) {
        this.arr.push(val)
        this.shiftUp(this.arr.length-1)
    }

    shiftUp(i) {
        let arr = this.arr
        while(i>0) {
            let p = this.parent(i)
            if(arr[i] > arr[p]){
                let temp = arr[i]
                arr[i] = arr[p]
                arr[p] = temp

                i=p
            } else {
                break
            }
        }
    }

    display() {
        console.log(this.arr)
    }

    delete() {
        let last = this.arr.pop()
        if(this.arr.length) {
            this.arr[0] = last
            this.shiftDown(0)
        }
    }

    shiftDown(i) {
        let l = this.left(i)
        let r = this.right(i)
        let index = i
        let arr = this.arr
        if(l < arr.length && arr[l] > arr[index]) {
            index = l
        }
        if(r < arr.length && arr[r] > arr[index]) {
            index = r
        }
        if(index !== i) {
            let temp = arr[index]
            arr[index] = arr[i]
            arr[i] = temp
            
            this.shiftDown(index)
        }
    }

    build(arr) {
        this.arr = arr
        let n = Math.floor(arr.length / 2) - 1
        for(let i=n; i>=0; i--) {
            this.shiftDown(i)
        }
        console.log(arr)
    }
}

const heap = new Heap()

heap.display()
heap.insert(1)
heap.insert(2)
heap.insert(6)
heap.insert(8)
heap.display()

heap.delete()
heap.display()
heap.build([3,6,2,-2,0,9,7,1,40])
console.log(heap.parent(2))
console.log(heap.left(1))