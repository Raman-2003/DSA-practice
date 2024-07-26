const LinkedList = require('../Custom/withTail');

class linkedStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

const stack = new linkedStack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print();

stack.pop();
stack.print()