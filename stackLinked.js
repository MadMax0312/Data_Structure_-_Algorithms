class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    push(element) {
        const node = new Node(element)
        node.next = this.top
        this.top = node
        this.size++
    }

    pop() {
        if(this.isEmpty()) {
            return "Underflow"
        }
        this.top = this.top.next
    }

    peek() {
        if(this.isEmpty()) {
            return null
        }
        return this.top
    }

    diplay() {
        if(this.isEmpty()) {
            console.log('empty')
        } else {
            let curr = this.top
            let elements = []

            while(curr) {
                elements.push(curr.value)
                curr = curr.next
            }

            console.log(elements)
        }
    }
}