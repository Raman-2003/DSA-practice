/*
 Queue is a custom data structure and It is a sequential collection of elements in queue and it follows the principle of First In First Out (FIFO).

 The first element inserted into the queue is the first element to be removed.

 Take an example of Airport luggage checkuo machine.

 It mainly supports two operations.

 Enqueue => Which adds an element at the tail of the collection
 Dequeue => Which removes an element from the front/head of the collection. (oldest element)

 Applications:
 Printers
 Callback queue in javascript runtime.

 Queue implementation

 enqueue => It adds an element at the rear/tail position of the queue
 dequeue => It removes an element from the front/head(first, oldest) element of the queue.
 peek()  => is used to get the first index value without removing the value. Simply array[0]
 isEmpty() => It returns a boolean result. checks if the queue is empty or not.
 getSize() => it returns the size of the queue.
 print()   => 
*/

// Normal ways to implement above the cases

class NormalQueue{
    constructor(){
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null;
    }

    getSize(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());  //convert the contents of this.items into a string representation. For arrays:  [1, 2, 3].toString() returns "1,2,3"
    }
}

const queue = new NormalQueue();

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.isEmpty());
queue.print();
console.log(queue.peek());
console.log(queue.getSize());
//Above class is not efficient and It has Linear time complexity O(n). How we can be change into Constant time O(1)