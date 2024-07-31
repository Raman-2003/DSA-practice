/*
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linked{
    constructor(){
        this.head = null;
        this.size = 0
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    insert(value, index){
        if(index<0 || index>= this.size){
            return null;
        }
        if(index === 0){
            this.prepend(value)
        }

        let node = new Node(value);
        let curr = this.head;
        for(let i=0; i<index-1; i++){
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
        this.size++
    }


    removeIndex(index){
        if(index<0 || index>=this.size){
            return null;
        }
        let removeNode;
        if(this.size === 1){
            removeNode = this.head;
            this.head = null;
        }else{
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = removeNode.next;
        }
        this.size--
        return removeNode;
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        let removeNode;
        if(this.head.value === value){
            removeNode = this.head;
            this.head = null;
        }else{
            let curr = this.head;
            while(curr.next && curr.next.value !== value){
                curr = curr.next;
            }
            if(curr.next){
                removeNode = curr.next;
                curr.next = removeNode.next;
            }
        }
        this.size--
        return removeNode;
    }

    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    search(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            return 0;
        }
        let curr = this.head;
        let i=0;
        while(curr){
            if(curr.value === value){
                return i;
            }
            i++;
            curr = curr.next;
        }
        return -1
    }

    removeDuplicates(){
        if(this.isEmpty()){
            return null;
        }else{
            let seen = new Set();
            let curr = this.head;
            seen.add(curr.value);

            while(curr.next !== null){
                if(seen.has(curr.next.value)){
                    curr = curr.next.next;
                    this.size--;
                }else{
                    seen.add(curr.next.value);
                    curr = curr.next;
                }
            }
            return seen;
        }

    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }
        let curr = this.head;
        let listedValues = ''
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listedValues);
    }
}


const list = new Linked()
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)
list.append(40)
list.append(40)
list.append(50);
list.insert(99,2)
// list.removeValue(99)
console.log(list.search(99))
list.print();

list.reverse()
list.print()
console.log(list.removeDuplicates())
// list.print()

*/



/*
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class tail{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail  = node;
        }
        this.size++
    }

    removeFrontValue(){
        if(this.isEmpty()){
            return null;
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.head;
            this.head = null;
            this.tail = nulll;
        }else{
            removeValue = this.head;
            this.head = removeValue.next;
        }
        this.size--
        return removeValue;
    }

    removeEndValue(){
        if(this.isEmpty()){
            return null;
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.tail;
            this.head = null;
            this.tail = null;
        }else{
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
                 removeValue = curr.next;
                 this.tail = curr;
                 this.tail.next = null;
        }
        this.size--;
        return removeValue;
    }


    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }
        let curr = this.head;
        let listedValues = ''
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listedValues);
    }
}


const list = new tail()
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.removeFrontValue()
list.removeEndValue()
list.print()

*/



/*
class CircularQueue{
    constructor(capacity){
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    enqueue(value){
        this.rear = (this.rear+1)%this.capacity;
        this.items[this.rear] = value;
        this.currentLength += 1;
        if(this.front === -1){
            this.front = this.rear;
        }
    }

    dequeue(value){
        if(this.isEmpty()){
            return null;
        }
        let removeNode = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front+1)%this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.front = null;
            this.rear = null;
        }
        return removeNode;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let str = ''
            let i=0;
            for(i=this.front; i !== this.rear; i=(i+1)%this.capacity){
                str += this.items[i] + ' '
            }
            str += this.items[i];
            console.log(str);
        }
    }
}



const cir = new CircularQueue(5)
cir.enqueue(10)
cir.enqueue(20)
cir.enqueue(30)
cir.dequeue()
cir.dequeue()
cir.print()
*/



function findLarge(string){
    return string.reduce((accu,curr)=>accu.length>curr.length?accu:curr)
}
console.log(findLarge(['Ice', 'Cream', 'Chacolate', 'Candies']));

function findLargest(array){
    let max = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i].length>max.length){
            max = array[i]
        }
    }
    return max;
}
console.log(findLargest(['Ice', 'Cream', 'Chacolate', 'Candies']));

function large(string){
    return string.split(' ').reduce((accu, curr)=>accu.length>curr.length? accu:curr)
}

console.log(large("Ice Cream Chacolate Candies"));


function largest(string){
    let largest = ''
    let currentWord = ''

    for(let i=0; i<string.length; i++){
        if(string[i] === ' ' || i === string.length){
            if(currentWord.length > largest.length){
                largest = currentWord;
            }
            currentWord =''
        }else{
            currentWord += string[i];
        }
    }
    return largest

}
console.log(largest("Ice Cream Chacolate Candies"));

