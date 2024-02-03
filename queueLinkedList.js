class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);

        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }

        const removedElement = this.front.data;
        this.front = this.front.next;

        // If dequeuing the last element, update rear as well
        if (this.front === null) {
            this.rear = null;
        }

        this.size--;

        return removedElement;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.data;
    }

    getSize() {
        return this.size;
    }

    print() {
        let current = this.front;
        const elements = [];

        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }

        console.log(elements);
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: [10, 20, 30]
console.log(queue.dequeue()); // Output: 10
queue.print(); // Output: [20, 30]
console.log(queue.peek()); // Output: 20
