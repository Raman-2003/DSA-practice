// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class linked{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size;
//     }

//     prepend(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             let curr = this.head;
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = node;
//         }
//         this.size++
//     }

   

//     insert(value, index){
//         if(index<0 || index>this.size){
//             return null;
//         }
//         const node = new Node(value)
//         if(index == 0){
//             node.next = this.head;
//             this.head = node;
//         }else{
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr = curr.next;
//             }
//             node.next = curr.next;
//             curr.next = node;
//         }
//         this.size++
//     }

//     removefrom(index){
//         if(index<0 || index>this.size){
//             return null;
//         }
//         let removeNode;
//         if(index === 0){
//             removeNode = this.head;
//             this.head = removeNode.next;
//         }else{
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr = curr.next
//             }
//             removeNode = curr.next
//             curr.next = removeNode.next
//         }
//         this.size--;
//         return removeNode
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null;
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//             return value;
//         }else{
//             let curr = this.head;
//             while(curr.next && curr.next.value !== value){
//                 curr = curr.next;
//             }
//             if(curr.next){
//                 let removeNode = curr.next;
//                 curr.next = removeNode.next;
//                 this.size--
//                 return removeEventListener;
//             }
//             return null;
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return null;
//         }
//         let i=0
//         let curr = this.head;
//         while(curr){
//             if(curr.value === value){
//                 return i;
//             } 
//              curr = curr.next;
//              i++
//         }
//         return -1
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty');
//         }
//         let curr=this.head;
//         let listedValues = ''
//         while(curr){
//             listedValues += `${curr.value} `
//             curr = curr.next;
//         }
//         console.log(listedValues)
//     }
// }

// const list = new linked();
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)

// list.append(40)
// list.append(50)

// // list.insert(99, 2)
// // list.removefrom(2)

// console.log(list.search(20))

// list.print()




class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linked{
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
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    insert(value, index){
        if(index<0 || index>this.size){
            return null;
        }
        const node = new Node(value);
        if(index === 0){
            node.next = this.head;
            this.head = node;
        }else{
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node; 
        }
        this.size++
    }


    removeFrom(index){
        if(index<0 || index>this.size){
            return null;
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = removeNode.next;
            this.size--;
            return removeNode;
        }else{
            let curr = this.head;
            for(let i=0; i<index-1; i++){
                curr = curr.next;
            }
        removeNode = curr.next;
        curr.next = removeNode.next;
        }
        this.size--;
        return removeNode;
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        let removeValue;
        if(value === this.head.value){
            removeValue = this.head;
            this.head = removeValue.next
            this.size--;
            return removeValue
        }else{
            let curr = this.head;
            while(curr.next && curr.next.value !== value){
                curr = curr.next
            }
            if(curr.next){
                removeValue = curr.next;
                curr.next = removeValue.next;
                this.size--;
                return removeValue;
            }
            return null;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
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


const list = new Linked();
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)
list.append(50)
list.print()

list.insert(99, 2)
list.print()

list.removeFrom(2);
list.print()