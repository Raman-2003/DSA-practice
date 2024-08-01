class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class Double{
    constructor(){
        this.head = null;
        this.tail = null;
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
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;  // It connects everthing
            this.head = node;
        }
        this.size++
    }

    append(value){
        let node = new Node(value);
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

    removeFront(){
        if(this.isEmpty()){
            return null;
        }
        let removeNode;
        if(this.size === 1){
            removeNode = this.head;
            this.head = null;
            this.tail = null;
        }else{
            removeNode = this.head;
            removeNode.prev = null;
            this.head = removeNode.next;
        }
        this.size--
        return removeNode;
    }


    removeEnd(){
        if(this.isEmpty()){
            return null;
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--
    }

    printReverse(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let curr = this.tail;
            let listedValues = ''
            while(curr){
                listedValues += `${curr.value} `
                curr = curr.prev;
            }
            console.log(listedValues);
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('list is Empty');
        }else{
            let listedValues = ''
            let curr = this.head;
            while(curr){
                listedValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listedValues);
        }
    }

    
}

const doub = new Double()

doub.prepend(30)
doub.prepend(20)
doub.prepend(10)
doub.append(40)
doub.append(50)
// doub.removeFront()
// doub.removeEnd()
doub.printReverse()
doub.print()