class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{ 
    constructor(){
        this.head = null;  
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++
    }

    insert(value, index){
        if(index<0 || index>this.size){
            return 
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index>this.size){
            return 
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = removeNode.next;
        }else{
           let prev = this.head;
           for (let i=0; i<index-1; i++){
                prev = prev.next;
           }
           removeNode = prev.next;
           prev.next = removeNode.next;
        }
        this.size--
        return removeNode
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return removeNode;
            }
            return null;
        }

    }

    search(value){
        if(this.isEmpty()){
            return null;
        }
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;  // If not found the given value, we return -1
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;  // Double process. It connects the 129th line. [  let next = curr.next; ]
        }
        this.head = prev;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        } else{
            let curr = this.head;
            let listedValues = ''
            while(curr){
                listedValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listedValues);
        }
    }
}

const list = new LinkedList();

// console.log(list.isEmpty());
list.prepend(10);
list.append(20);
list.append(30);
list.append(40);
list.insert(90, 2)
list.print()
console.log(list.getSize());

