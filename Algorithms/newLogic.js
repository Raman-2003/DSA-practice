class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    add(value){
        const node = new Node(value);
        if(this.head === null){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }

    removeDupicates(){
        if(this.head === null){
            return null;
        }
        let current = this.head;
        let seenValues = new Set();
        seenValues.add(current.value);

        while(current.next !== null){
            if(seenValues.has(current.next.value)){  // has(current.next.value) because, we have an array of Set values. So we need to use the .value instead of .next 
                current = current.next.next;
                this.size--
            }else{
                seenValues.add(current.next.value);
                current = current.next;
            }
        }
    }

    print(){
        let current = this.head;
        let result = [];
        while(current !== null){
            result.push(current.value);
            current = current.next;
        }
        console.log(result);
    }
}


const list = new LinkedList();

list.add(10)
list.add(20)
list.add(30);

list.print()