class Queue{
    constructor(){
        this.items = {}
        this.front = 0;
        this.rear = 0;
    }

    /*  Above case is this.items = {} [means object]. here we can do items = [] array and also adhuku thangundha mari dequeue.
    construcctor(){
        this.items = []
        this.head = 0;
        this.rear = 0;
    }

    dequeue(){
        const value = this.items[this.head];
        this.head++
        return value
    }
    */

    enqueue(value){
        this.items[this.rear] = value;
        this.rear++
    }
    dequeue(){
        const value = this.items[this.front];
        delete this.items[this.front];
        this.front++
        return value;
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
         return this.items[this.front]
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items);
    }
}


const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.isEmpty());
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.size());  // 3
