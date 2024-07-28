class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(value){
        const newNode = new Node(value)  // create a new node using Node class
        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode;
        }
        this.size++
    }

    removeDuplicates(){
        if(this.head === null){
            return;
        }
        let current = this.head;
        let seenValues = new Set();
        seenValues.add(current.value);

        while(current.next !== null){
            if(seenValues.has(current.next.value)){
                current.next = current.next.next;
                this.size--
            }else{
                seenValues.add(current.next.value);
                current = current.next;
            }
        }
    }

    printList(){
        // here we didn't give the base case;
        let current = this.head;
        let result = [];
        while(current !== null){
            result.push(current.value);
            current = current.next;
        }
        console.log(result);
    }

}

const list = new linkedList();
list.add(10)
list.add(20)
list.add(30)
list.add(30)
list.add(30)
list.printList()

list.removeDuplicates()
list.printList()