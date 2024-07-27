// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
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
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//         this.size++
//     }

//     insert(value, index){
//         if(index<0 || index>this.size){
//             return null;
//         }    
//         if(index === 0){
//             this.prepend(value);
//         }else{
//             const node = new Node(value);
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr = curr.next;
//             }
//             node.next = curr.next;
//             curr.next = node;
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null;
//         }
//         let removeNode;
//         if(index === 0){
//             removeNode = this.head;
//             this.head = removeNode.next;
//             this.size--
//             return removeNode;
//         }else{
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr = curr.next;
//             }

//             removeNode = curr.next;
//             curr.next = removeNode.next
//             this.size--
//             return removeNode;
//         }
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null;
//         }
//         if(this.head.value === value){
//             this.head = this.head.next;
//             this.size--;
//             return value;
//         }else{
//             let curr = this.head;
//             while(curr.next && curr.next.value !== value){
//                 curr = curr.next;
//             }
//             if(curr.next){
//                 let removeValue = curr.next;
//                 curr.next = removeValue.next;
//                 this.size--
//                 return removeValue;
//             }
//             return null;
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return null;
//         }
//         let curr = this.head;
//         let i=0;
//         while(curr){
//             if(value == curr.value){
//                 return i;
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1;
//     }

//     reverse(){
//         let curr = this.head;
//         let prev = null;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is Empty');
//         }

//         let curr = this.head;
//         let listedValues = ''

//         while(curr){
//             listedValues += `${curr.value} `
//             curr = curr.next;
//         }
//         console.log(listedValues);
//     }
// }


// const list = new LinkedList()
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)

// list.append(40)
// list.append(50)

// // list.insert(99, 2)
// // list.removeValue(99)

// list.print()

// list.reverse();

// list.print()


function binarySearch(array, target){
       let left = 0; // 0
       let right = array.length-1;  //100
       while(left<=right){
            let middleIndex = Math.floor(left+right/2);
            if(target === array[middleIndex]){
                return middleIndex;
            }
            if(target < array[middleIndex]){
                right = middleIndex-1
            }else{
                left = middleIndex+1;
            }
       }
       return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6));  //3
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
