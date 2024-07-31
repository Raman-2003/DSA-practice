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

function removeDuplicates(array){
    let seen = new Set();
    for(let i=0; i<array.length; i++){
        if(seen.has(array[i])){
            continue;
        }else{
            seen.add(array[i])
        }
    }
    return seen;
}

console.log(removeDuplicates([1,2,33,33,4,5,5,6]));


function twoDimen(array1, array2){
    let i=0; 
    let j=0;
    let merged = [];

    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            merged.push(array1[i])
            i++
        }else{
            merged.push(array2[j]);
            j++
        }
    }

    while(i<array1.length){
        merged.push(array1[i])
        i++
    }

    while(j<array2.length){
        merged.push(array2[j]);
        j++;
    }

    return merged;
}   

console.log(twoDimen([1,2,3],[4,5,6,7]));


function FirstOccurence(array){
    let obj = {}
    for(let num of array){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num] = 1;
        }
    }


    for(let key in obj){
        if(obj[key] === 1){
            return key;
        }
    }
}

console.log(FirstOccurence([1,2,3,3,4,4,5,1,2]));



function pascalToSnake(string){
    return string.replace(/([A-Z])/g, '_$1').toLowerCase().substring(1)
}

console.log(pascalToSnake('RamanKishoreArmstrong'));
console.log(pascalToSnake('AlwaysThinkingAboutUpgrade'));


function recursionReverse(string){
    if(string.length<=1) return string;

   return string[string.length-1] + recursionReverse(string.substring(0, string.length-1))
}

console.log(recursionReverse('Raman'));


function middleElement(array){
        if(array.length<=2){
            return array;
        }else{
            let middle  = Math.floor((array.length)/2);
            if(middle%2===0){
                return array[middle]
            }else{
                let news = [];
                news.push(array[middle-1])
                news.push(array[middle])
                return news;
            }
        }

}

console.log(middleElement([1,2,3,4,5,6]));



function secondLargest(array){
    let largest = -Infinity
    let secondLargest = -Infinity;

    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            secondLargest = largest;
            largest = array[i]
        }else if(array[i]>secondLargest && array[i]<largest){
            secondLargest = array[i]
        }
    }
    return secondLargest
}

console.log(secondLargest([1,2,3,4,5,6,7]));


function isSorted(array){
    if(array.length<=1) return false;
    let ascending = true;
    let descending = true;

    for(let i=0; i<array.length; i++){
        if(array[i]<array[i-1]){
            ascending = false;
        }

        if(array[i]>array[i-1]){
            descending = false;
        }

        if(!ascending && !descending){
            return false
        }
    }
    return true;
}

console.log(isSorted([1,2,3,4,5,878,96]));


function consecutive(array){
    let start = 0;
    let newArr = [];

    for(let i=0; i<array.length; i++){
        if(newArr.includes(array[i])){
            array[start]
        }else{
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(consecutive([1,2,3,1,2,3,4,1,2,4,5,6]));


function countOneAndTwo(array){
    let obj = {}
    let arr1 = []
    let arr2 = []

    for(let num of array){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num]=1;
        }
    }

    for(let key in obj){
        if(obj[key] === 1){
            arr1.push(Number(key))
        }else if(obj[key] === 2){
            arr2.push(Number(key))
        }
    }

    return [arr1,arr2]
}


console.log(countOneAndTwo([1,2,3,4,5,6,6,2,9,9]));