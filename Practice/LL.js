class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LL{
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
            prev.next = node;  // at some point la prev.next ye illama poogum. loop vittu velila vandrum (exit aagidum). Apo, prev.next = node; kudukurom
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
            const node = new Node(value);  // Node vangurom, let prev edukrom, for loop use pandrom, asign pandrom.
            let prev = this.head;
            for (let i=0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index>this.size){
            return null;
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = removeNode.next;
        }else{
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            removeNode = prev.next
            prev.next = removeNode.next;
        }
        this.size--
        return removeNode;
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }

        if(value === this.head.value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let curr = this.head;
            while(curr.next && curr.next.value !== value){
                curr = curr.next;
            }
            if(curr.next){
                const removeNode = curr.next;
                curr.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value){
        if(this.isEmpty()){
            return null;
        }
        let i = 0;
        let curr = this.head;
        while(curr){
            if(value === curr.value){
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1;
    }

    reverse(){
        let prev = null
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;  
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
            return
        }
        let curr = this.head;
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listValues);
    }

}


const list = new LL();

console.log(list.isEmpty());
list.prepend(10)
list.append(20)
list.append(30)
list.append(40)
list.print()

list.insert(22, 2);
list.print()

list.removeValue(22);
list.print();
list.reverse()
list.print()