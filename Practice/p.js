function normalFibo(n){
    if(n<2){
        return n;
    }
    return normalFibo(n-1)+normalFibo(n-2)
} 

console.log(normalFibo(0));
console.log(normalFibo(5));
// console.log(normalFibo(55));  // It takes too long time


function EfficientFibo(n){
    if(n<2){
        return n;
    }
    let fib = [0,1]
    for( i=2; i<=n; i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib[n]
}

console.log(EfficientFibo(0));
console.log(EfficientFibo(5));
console.log(EfficientFibo(55));


/* Fibonacci basic values.

fibonacci(0) = 0 
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(3) = 2
fibonacci(4) = 3
fibonacci(5) = 5
fibonacci(6) = 8
fibonacci(7) = 13
fibonacci(8) = 21
fibonacci(9) = 34
fibonacci(10) = 55

*/

function withOutBaseCaseEffcientFibo(n){
   let fib = [0,1];
    for(i=2; i<=n; i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib[n]
}

console.log(withOutBaseCaseEffcientFibo(0));
console.log(withOutBaseCaseEffcientFibo(3));
console.log(withOutBaseCaseEffcientFibo(55));


//Not efficient sum
function sampleSum(n){
    let m = n;
    let sum = 0;
    while(m>=1){
        sum +=m;
        m--;
    }
    return sum;
}
console.log(sampleSum(5));

//Efficient summation
function efficientSum(n){
    return n*(n+1)/2;
}

console.log(efficientSum(5));
console.log(efficientSum(55));



// RECURSIONS

function normalRecursion(n){
    if(n<2){
        return n;
    }
    return n*normalRecursion(n-1);
}
console.log(normalRecursion(5));
console.log(normalRecursion(10));

// Loop recursion
function loopRecursion(n){
    if(n<2){
        return n;
    }
    let result = 1;
    for(i=2; i<=n; i++){
        result *=i;
    }
    return result
}
console.log(loopRecursion(5));
console.log(loopRecursion(10));


// Prime or not

function isPrime(n){
    if(n<2){
        return false;
    }
    for(i=2; i<n; i++){
        if(n%i == 0){
            return false; 
        }
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(3));

function efficientPrimeFinder(n){
    if(n<2){
        return false;
    }
    for(i=2; i<=Math.sqrt(n); i++){ // here, = is most important i<=Math.sqrt()
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

console.log(efficientPrimeFinder(2));
console.log(efficientPrimeFinder(3));
console.log(efficientPrimeFinder(4));
console.log(efficientPrimeFinder(5));

function PowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2 === 0){
            return true;
        }
        n = n%2
    }
    return false;
}

console.log();
console.log();
console.log();

console.log(PowerOfTwo(10));
console.log(PowerOfTwo(11));
console.log(PowerOfTwo(12));



// Recursion => n*recursion(n-1)
// Fibonacci => fib(n-1)+fib(n-2)
// summarion => n*(n+1)/2
// Fibonacci effcient ah iruka array create pannitu store panlam.
// loop recursion is efficient
// isPrime ku ellathukum base case is must
// PowerOfTwo => n%2 === 0 => true otherwise n = n%2 othewise false;
// bitwise PowerOfTwo => n & (n-1) === 0;
// But we should n&(n-1)/2 pannanum. divided by 2 is must thing

console.log();
console.log();
console.log();
console.log();  // It creates a space



// But not efficient. It follows the linear time complexity
function linearSearch(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 6));

// Binary search. Slightly Dynamic

function binarySearch(array, target){
        let left = 0;
        let right = array.length-1;
        while(left<=right){
            let middleIndex = Math.floor((left+right)/2)
        if(target === array[middleIndex]){
            return middleIndex;
        }
        if(target<array[middleIndex]){
            right = middleIndex-1;
        }else{
            left = middleIndex+1;
        }  
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6));  // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1


function recursiveBinary(array, target){
    return search(array, target, 0, array.length-1);
}

function search(array, target, left, right){
    if(left>right){   // this base case is really important.
        return null;
    }
    let middleIndex = Math.floor((left+right)/1);
    if(array[middleIndex] === target){
        return middleIndex;
    }
    if(target<array[middleIndex]){
        return search(array, target, left, middleIndex-1)
    }else{
        return search(array, target, middleIndex+1, right)
    }
}


console.log(recursiveBinary([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinary([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinary([-5, 2, 4, 6, 10], 20));



function findMaxOccurrence(array){
    let storeObj = {}
    for(let num of array){
        if(storeObj[num]){
            storeObj[num]++
        }else{
            storeObj[num]=1;
        }
    }

    let maxCount = 0;
    let maxOccurance = null;

    for(let key in storeObj){
        if(storeObj[key]>maxCount){
            maxCount = storeObj[key];
            maxOccurance = key;
        }
    }
    return maxOccurance;
}

console.log(findMaxOccurrence([5,10,15, 20, 25, 25, 25, 30]));


// find largest number;

function findLargest(array){
    let max = array[0];
    for(i=1; i<array.length; i++){
        if(max<array[i]){
            max = array[i]
        }
    }
    return max;
}
console.log(findLargest([1,2,3,4,5,60,6]));


function sumOfArray(array){
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum;
}
console.log(sumOfArray([1,2,3]));

function reverseNotEfficient(array){
    let reverse = [];
    for(i=array.length-1; i>=0; i--){
        reverse.push(array[i])
    }
    return reverse;
}

console.log(reverseNotEfficient([1,2,3,4,5]));


function reverseMethod(array){
    return array.reverse()
}
console.log(reverseMethod([1,2,3,4,5,6,7,8]));



// Reverse la swapping is sliglty average time complexity
function reverseEffcient(array){
    let start = 0;
    let left = array.length -1;

    while(start<left){
        let temp = array[start];
        array[start] = array[left];
        array[left] = temp;
        start++;
        left--;
    }
    return array;
}

console.log(reverseEffcient([10,20,30,40,50]));


function countOccurences(array, target){
   let count = 0;
   for(i=0; i<array.length; i++){
    if(target === array[i]){
        count++
    }
   }
   return count;
}

console.log(countOccurences([1, 2, 3, 3, 3, 4, 5], 3));


function countAllOccurrence(array){
    let obj = {};
    for(let num of array){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num] = 1;
        }
    }
    return obj;
}

console.log(countAllOccurrence([1,2,3,2]));

function secondBig(array){
    let sort = array.sort((a,b)=>a-b);
    let len = sort.length;
    return sort[len-2]
}
console.log(secondBig([1,2,22,3,4,5,20]));


function removeDup(array){
    let newArr = [];
    for(let num of array){
        if(!newArr.includes(num)){
            newArr.push(num)
        }
    }
    return newArr;
}

console.log(removeDup([1,2,2,2,3,3,4]));


function append(array, value){
    let len = array.length;
    array[len-1] = value;
    return array;
}

console.log(append([1,2,3,4,5], 10));

function mergedArray(array1, array2){
    let mergedArr = []
    let i=0; j=0;
    while(i<=array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            mergedArr.push(array1[i]);
            i++
        }else{
            mergedArr.push(array2[j]);
            j++
        }
    }
    return mergedArr;
}

console.log(mergedArray([1,2,3], [5,6,7]));



// Search is sometimes not effcient. So we can use this Set method
function search(array, value){
    const set = new Set(array);
    return set.has(value)
}

console.log(search([1,2,3,4,5],3));
console.log(search([6,7,8,9,10],9));
console.log(search([6,7,8,9,10],99));



// Sorted array la dhan Binary search panna mudium.
function binaryTestSearch(array, target){
        let left = 0;
        let right = array.length-1;
        while(left<=right){
            let middleIndex = Math.floor((left+right)/2);
            if(target === array[middleIndex]){
                return middleIndex;
            }
            if(target<array[middleIndex]){
                right = middleIndex-1
            }else{
                left = middleIndex+1;
            }
        }
        return -1;
}

console.log(binaryTestSearch([-5, 2, 4, 6, 10],6));
console.log(binaryTestSearch([-5, 2, 4, 6, 10], 10));
console.log(binaryTestSearch([-5, 2, 4, 6, 10], 20));
// We use the sorted array.

//methos1
function MaxElement(array){
    let max = Math.max(... array);
    return max;
}
console.log(MaxElement([4,56,78333333333333333,3,12]));
console.log(MaxElement([54,78,23,565,32,6]));

// method2
function maxEle(array){
    let len = array.length-1;
    const sort = array.sort((a,b)=>a-b);
    return sort[len];
}

console.log(maxEle([4,56,78333333333333333,3,12]));
console.log(maxEle([54,78,23,565,32,6]));

function reverse(array){
    let start = 0;
    let end = array.length-1;
    while(start<end){
        let temp = array[end];
        array[end] = array[start]
        array[start] = temp;
        start++
        end--
    }
    return array
}

console.log(reverse([1,2,3,4,5]));



// summation => n*(n+1)/2
let sum = 5*(5+1)/2; // 1+2+3+4+5=15
console.log(sum);  //15

// fibonacci = fibonacci(n-1)+fibonacci(n-2); BASE case is must
function fibonacci(num){
    if(num<2){
        return num;
    }
    return fibonacci(num-1)+fibonacci(num-2)
}

console.log(fibonacci(6));  //8
// console.log(fibonacci(55)); // taking too time

function fibonaccis(num){
    if(num<2){
        return num;
    }
    let fib = [0,1];
    for(let i=2; i<=num; i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib[num]
}
console.log(fibonaccis([55]));