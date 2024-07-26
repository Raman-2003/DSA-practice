class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.head = -1;
        this.rear = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1
        }
        if(this.head === -1){
            this.head = this.rear
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.items[this.head];
        this.items[this.head] = null;
        this.currentLength -= 1;
        this.head = (this.head+1) % this.capacity;
        if(this.isEmpty()){
            this.head = -1;
            this.rear = -1
        }
        return value;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.head];
        }
        return null;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }else{
            let i = 0;
            let str = ''
            for(i=this.head; i !==this.rear; i=(i+1)%this.capacity){
                str += this.items[i] + " "  // " " => It gives space for easy readable.
            }
            str += this.items[i];  // Adding the Last Element. After the loop completes, the index i will be equal to this.rear, pointing to the last element in the queue.
            console.log(str);
        }
    }
}


const queue = new CircularQueue(5);

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30);
queue.enqueue(40);
queue.print()
console.log(queue.isEmpty());
console.log(queue.isFull());

console.log(queue.dequeue());
queue.print()