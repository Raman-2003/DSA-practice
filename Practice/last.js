// // Fibonacci formula => fibonacci = fibonacci(n-1)*fibonacci(n-2);

// // Slow fibonacci
// function fibonacci(n){
//     if(n<2){
//         return n;
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(1));
// console.log(fibonacci(2));

// // effective fibonacci
// function fiboEff(n){
//     if(n<2){
//         return n;
//     }
//     let fib = [0,1 ]
//     for(i=2; i<=n; i++){
//         fib[i] = fib[i-1]+fib[i-2];
//     }
//     return fib[n]
// // }

// console.log(fiboEff(55));


// // Memoization
// let cache = {}  // It stores the values. behaves like a cache management

// function memoi(num){
//     console.log(cache);
//     if(cache[num]){
//         console.log('If is working');
//         console.log(cache[num]);
//     }else{
//         console.log('Else is Working');
//         cache[num] = num+10;
//         console.log(cache[num]);
//     }
// }

// memoi(10) // Else is Working
// memoi(10) // If is working
// memoi(20) // Else is Working
// memoi(20) // If is working

// /*
//  Uses of Memoization is, It follows the principle of Cache storage management.
//  Oonce it processed some operations using else case, it stores the values in the cache = {}.
//  So, it reduces the travel trip between the official server and user request.
//  Browser easily fetch the user request solution from the cache storage area. 

// */


// function summation(n){
//     return n*(n+1)/2
// }

// console.log(summation(5)); //15 
// console.log(summation(3)); //6
// console.log(summation(2)); //3



// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Linked{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }

//     isEmpty(){
//         this.size === 0
//     }

//     getSize(){
//         return this.size;
//     }

//     prepend(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }

//     append(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             let curr = this.head;
//             while(curr.next !== null){
//                 curr = curr.next;
//             }
//             curr.next = node;
//         }
//         this.size++
//     }

//     insert(value, index){
//         if(index<0 || index>=this.size){
//             return null;
//         }
//         if(index === 0){
//             this.prepend(value);
//         }else{
//             let node = new Node(value);
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr = curr.next;
//             }
//             node.next = curr.next;
//             curr.next = node;
//         }
//         this.size++
//     }

//     removeIndex(index){
//         if(index<0 || index>=this.size){
//             return null;
//         }
//         let removeNode;
//         if(index===0){
//             removeNode = this.head;
//             this.head = removeNode.next;
//         }else{
//             let curr = this.head;
//             for(let i=0; i<index-1; i++){
//                 curr = curr.next;
//             }
//             removeNode = curr.next;
//             curr.next = removeNode.next
//         }
//         this.size--
//         return removeNode;
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null;
//         }
//         let removeNode;
//         if(this.head.value === value){
//             removeNode = this.head;
//             this.head = removeNode.next;
//         }else{
//             let curr = this.head;
//             while(curr.next && curr.next.value !== value){
//                 curr = curr.next;
//             }
//             removeNode = curr.next;
//             curr.next = removeNode.next;
//         }
//         this.size--
//         return removeNode;
//     }

//    search(value){
//     if(this.isEmpty()){
//         return "Empty"
//     }
//     if(this.head.value === value){
//         return 0;
//     }else{
//         let i=0; 
//         let curr = this.head;
//         while(curr){
//             if(curr.value === value){
//                 return i;
//             }
//             i++;
//             curr = curr.next;
//         }
//         return -1
//       }
//    }

//    reverse(){
//           let curr = this.head;
//           let prev = null;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//    }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is Empty');
//         }
//         let listedValues = ''
//         let curr = this.head;
//         while(curr){
//             listedValues += `${curr.value} `
//             curr = curr.next;
//         }
//         console.log(listedValues);
//     }
// }



// const list = new Linked()

// list.prepend(30)
// list.prepend(20)
// list.prepend(10)

// list.append(40)
// list.append(50)

// list.insert(99,2)

// list.print()

//////  SOME NEW WAYS TO IMPLEMEMT LOGICS

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class newWays{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//        return this.size === 0
//     }

//     getSize(){
//         return this.size;
//     }

//     addAnElement(value){
//         let node = new Node(value);
//         if(this.head === null){
//             this.head = node;
//         }else{
//            let curr = this.head;
//            while(curr.next !== null){
//               curr = curr.next;
//            }
//            curr.next = node;
//         }
//         this.size++
//     }
 
//        removeDuplicates(){
//             if(this.head === null){
//                 return null;
//             }

//             let seenValues = new Set();
//             let current = this.head;
//             seenValues.add(current.value);

//             while(current.next !== null){
//                 if(seenValues.has(current.next.value)){
//                     current = current.next.next
//                     this.size--
//                 }else{
//                     seenValues.add(current.next.value);
//                     current = current.next;
//                 }
//             }
//             return seenValues;
//         }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is Emtpy');
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


// const list = new newWays()
// list.addAnElement(10)
// list.addAnElement(20)
// list.addAnElement(30)
// list.addAnElement(30)
// list.addAnElement(30)

// list.print()

// console.log(list.removeDuplicates())



// // Recursion, isPrime Checking. 
// function recursion(n){
//     if(n<=1){
//         return 1;
//     }
//     return n*recursion(n-1)
// }

// console.log(recursion(5));
// console.log(recursion(3));


// function loopRecursion(n){
//     if(n<=1){
//         return 1;
//     } 

//     let result = 1
//     for(let i=2; i<=n; i++){
//         result *= i;
//     }
//     return result
// }

// console.log(loopRecursion(5));
// console.log(loopRecursion(3));


// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2; i<n; i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true;
// }


// function isPrimeEff(n){
//     if(n<2){
//        return false
//    }
//    for(let i=2; i<=Math.sqrt(n); i++){
//       if(n%i === 0){
//         return false;
//       }
//    }
//    return true;
// }

// console.log(isPrimeEff(2));
// console.log(isPrimeEff(3));
// console.log(isPrimeEff(4));
// console.log(isPrimeEff(5));
// console.log(isPrimeEff(6));


// Linear search

// const array = [1,2,3,4,5,6,7,8,9,10]
// const target = 5;

// function findTargetIndex(array, target){
//         for(let i=0; i<array.length; i++){
//             if(target === array[i]){
//                 return i;
//             }
//         }
//         return -1;
// }

// console.log(findTargetIndex(array, target));



// function binarySearch(array, target){
//     let left = 0;
//     let right = array.length-1;

//     while(left<=right){
//         let middleIndex = Math.floor((left+right)/2)
//         if(target === array[middleIndex]){
//             return middleIndex;
//         }
//         if(target < array[middleIndex]){
//             right = middleIndex-1;
//         }else{
//             left = middleIndex+1;
//         }
//     }
//     return -1;
// }


// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));


// function recursiveBinary(array, target){
//     return search(array, target, 0, array.length-1)
// }


// function search(array, target, left, right){
//     while(left<=right){
//         let middleIndex = Math.floor((left+right)/2);
//         if(target === array[middleIndex]){
//             return middleIndex;
//         }
//         if(target < array[middleIndex]){
//             return search(array, target, left, middleIndex-1)
//         }else{
//             return search(array, target, middleIndex+1, right);
//         }
//     }
//     return -1
// }

// console.log(recursiveBinary([-5, 2, 4, 6, 10], 6));
// console.log(recursiveBinary([-5, 2, 4, 6, 10], 10));
// console.log(recursiveBinary([-5, 2, 4, 6, 10], 20));
// console.log();


// function findMaxElement(array){
//     let obj = {}
//     for(let num of array){
//         if(obj[num]){
//             obj[num]++
//         }else{
//             obj[num] = 1;
//         }
//     }

//     let maxCount = 0;  // Remember here it needs to = 0 for swapping
//     let maxNumber= null; 
//     for(let key in obj){
//         if(obj[key]>maxCount){
//             maxCount = obj[key];
//             maxNumber = key;
//         }
//     }
//     return maxNumber;
// }

// console.log(findMaxElement([5,6,7,8,8,8,8,8]));



// // Swapping is a good option for this one compare with prev and next
// function reverseArray(array){
//     let start = 0;
//     let end = array.length-1;

//     while(start<end){
//         let temp = array[start];
//         array[start] = array[end];
//         array[end] = temp;
//         start++
//         end-- 
//     }
//     return array
// }

// console.log(reverseArray([1,2,3,4,5]));


// // Count occurence of the target element
// function countOccurence(array, value){
//     let count = 0;
//     for(let i=0; i<array.length; i++){
//         if(array[i] === value){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countOccurence([1,2,3,3,3,3,3,4,5], 3));



function removeDup(array){
    let unique = [];

    for(let i=0; i<array.length; i++){
        if(!unique.includes(array[i])){
            unique.push(array[i])
        }
    }
    return unique;
}

console.log(removeDup([1,2,3,3,3,4,4,5]));



function newWaytoRemoveDup(array){
    const seen = new Set();

    for(let i=0; i<array.length; i++){
        if(seen.has(array[i])){
            continue;
        }else{
            seen.add(array[i])
        }
    }
    return seen;
}

console.log(newWaytoRemoveDup([1,2,3,3,3,4,4,5]));


// Practical fail practice

function mergeTwoArraysWithoutBuildinMethod(array1, array2){
        let mergedArray = [];
        let i=0; j=0;
        while(i<=array1.length && j<array2.length){  // = is must heree to keep maintains the adjacant value joining
            if(array1[i]<array2[j]){
                mergedArray.push(array1[i]);
                i++;
            }else{
                mergedArray.push(array2[j]);
                j++;
            }
        }
        return mergedArray;
}

console.log(mergeTwoArraysWithoutBuildinMethod([1,2,3], [4,5,6]));


function isPalindrome(str){
    let reverse = str.split('').reverse().join('');
    return reverse === str;
}

console.log(isPalindrome('Raman'));
console.log(isPalindrome('racecar'));


function countLetters(str,letter){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === letter){
            count++
        }
    }
    return count;
}

console.log(countLetters('Hello world', 'l'));

function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString('Raman'));


function largestSubString(str){
    let start = 0;
    let maxLength = 0;
    let charSet = new Set();

    for(let end=0; end<str.length; end++){
        while(charSet.has(str[end])){
            charSet.delete(str[start]);
            start++
        }
        charSet.add(str[end]);
        maxLength = Math.max(maxLength, end-start+1)
    }
    return maxLength;
}


console.log(largestString('abcabcbb'));