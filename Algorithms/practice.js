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

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            // console.log('First');
        }else{
            node.next = this.head;
            // console.log(" NODE.NEXT => " ,node.next);
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            // console.log('Before while loop, Now, curr is: ', curr);
            // console.log();
            while(curr.next){
                curr = curr.next;
                // console.log('inside while ',curr);
            }
            curr.next = node;
            // console.log('curr.next value ', curr.next);
        }
        this.size++
    }

    insert(value, index){
        if(index<0 || index>this.size){
            return null;
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            // console.log('After foor loop curr value ',curr);
            node.next = curr.next;
            // console.log("before inserting curr value ",node);
            curr.next = node;
            this.size++
        }

    }

    // way 1 to removeFrom logic
    removeFrom(index){
        if(index<0 || index >= this.size){
            return null;
        }
        if(index === 0){
            this.head = this.head.next;
            this.size--
        }else{
            let removeNode;
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = removeNode.next;
            this.size--
            return removeNode
        }
    }

    
    // way 2 to removeFrom logic
    removeIndexValue(index){
        if(index<0 || index>=this.size){
            return null;
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = removeNode.next;
        }else{
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = removeNode.next;
        }
        this.size--
        return removeNode
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        let removeValue;
        if(value === this.head.value){
            removeValue = this.head;
            this.head - removeValue.next;
            this.size--
            return removeValue;
        }else{
            let curr = this.head;
            while(curr.next && curr.next.value !== value){
                curr = curr.next;
            }
            if(curr.next){
                   removeValue = curr.next;
                   curr.next = removeValue.next;
                   this.size--
                   return removeValue
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
            i++;
            curr = curr.next
        }
        return -1
    }

    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev;
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

const list = new Linked();
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)
list.append(50)

list.insert(99, 2);
// list.removeIndexValue(0)
// list.removeIndexValue(1)
// // list.removeFrom(0)
// list.removeValue(99)
console.log(list.search(99))
list.print()


list.reverse()
list.print()