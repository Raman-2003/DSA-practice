const linkedList = require('../Custom/withTail');

class linkedQueue{
    constructor(){
        this.list = new linkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
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

const queue = new linkedQueue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()

queue.dequeue();
queue.print()


