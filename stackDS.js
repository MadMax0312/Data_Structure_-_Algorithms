class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }

        const removedElement = this.top.data;
        this.top = this.top.next;
        this.size--;

        return removedElement;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.top.data;
    }

    display() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            let current = this.top;
            const elements = [];

            while (current !== null) {
                elements.push(current.data);
                current = current.next;
            }

            console.log(elements);
        }
    }
}

// Example usage:
const stack = new Stack();
stack.display();

stack.push(10);
stack.push(20);
stack.push(30);
stack.display();

console.log(stack.pop());
stack.display();

console.log(stack.peek());
