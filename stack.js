class Stack {
    constructor(){
        this.items = []
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.size() === 0
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Underflow"
        }
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    display(){
        if(this.isEmpty()){
            console.log('empty stack')
        }else {
            console.log(this.items)
        }
        
    }
}

const stack = new Stack()

stack.display()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

stack.pop()
stack.display()
console.log(stack.peek())