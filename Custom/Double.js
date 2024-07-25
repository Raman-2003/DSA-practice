class Node{
    constructor(value){
        this.value= value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
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
           this.head.prev = node;
           this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
           return null;
        }else{
            let value = this.head.value;
            // this.head.prev = null;
            this.head = this.head.next;
            this.size--
            return value;
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null
        }
        this.size--;
        return value;
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

    printReverse(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{   
            let curr = this.tail;
            let listedValues = ""
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.prev;
        }
        console.log(listedValues);
        }
    }
}


const list = new DoubleLinkedList();

console.log(list.isEmpty());

list.prepend(10)
list.prepend(20);
list.append(30)
list.append(40)
list.append(50)
list.printReverse()

list.removeFromFront();
list.print()

list.removeFromEnd();
list.print()
