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

    getSize(){
        return this.size
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

    removeIndex(index){
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

const test = new Linked()
test.prepend(40)
test.prepend(30)
test.prepend(20)
test.prepend(10)
test.removeIndex(1)
test.print()


function binarySearch(array, value){
    let left = 0;
    let right = array.length-1;

    while(left<=right){
        let middleIndex = Math.floor((left+right)/2);
        if(array[middleIndex] === value){
            array[middleIndex] = 0;
            console.log(array);
            return middleIndex;
        }
        if(value<array[middleIndex]){
            right = middleIndex-1
        }else{
            left = middleIndex+1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5], 3));


/// Find even calculatation using Recursive calls
function EvenRecursion(array, index=0){
    if(index>=array.length){
        return 0;
    }

    let currentNum = array[index];
    let sum = (currentNum%2 === 0) ? currentNum : 0;

    return sum+EvenRecursion(array, index+1)
}

console.log(EvenRecursion([1,2,3,4,5,6,7,8]));

// Using RegEx to count a substring occurences
function regexFinder(str, substr){
    let test = new RegExp(substr, 'g');
    let result = str.match(test);
    return result? result.length : 0
}

let str = 'hihihellohellohihihihihellohellohello'
console.log(regexFinder(str, 'hi'));


// split
function anotherWay(string, substr){
    return string.split(substr).length-1
}

let string = 'hihihellohellohihihihihellohellohello'
console.log(anotherWay(string, 'hi'));