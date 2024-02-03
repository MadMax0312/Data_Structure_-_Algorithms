class Queue {
    constructor() {
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    isEmpty() {
        return this.rear - this.front === 0
    }

    dequeue() {
        if(this.isEmpty()) {
            return 'Underflow'
        }
        const item = this.items[this.front]
        this.front++
        return item
    }

    size() {
        return this.rear - this.front
    }

    peek() {
        return this.items[this.front]
    }

    display() {
        if(this.isEmpty()) {
            console.log('empty queue')
        } else {
            console.log(this.items.slice(this.front, this.rear))
        }
    }
}

const queue = new Queue();
queue.display();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log(queue.dequeue());
queue.display();
console.log(queue.peek());