// Search element in an array

function search(array, value){
    const set = new Set(array);
    return set.has(value)
}

console.log(search([1,2,3,4,5], 32));


/*
Why Constant Time Complexity Is Not Possible array.

Finding the maximum element in an UNSORTED array cannot be done in constant time O(1).
because you need to check each element at least once to ensure it is not larger than 
the current maximum. Therefore, the best achievable time complexity for this operation
in a single pass through the array is linear time O(n)


Sorted aray case la, easy ah last and first ah return pannidlam.
*/

function MaxElement(array){
    let len = array.length-1;
    const sort = array.sort((a,b)=>a-b);
    return sort[len]
}

console.log(MaxElement([45,2,12,5,76,67]));



// Effcient reverse
function reverse(array){
    return array.reverse()
}
console.log(reverse([1,2,3,4,5]));

// In-Effcient reverse
function InefficientReverse(array){
    let start = 0;
    let end = array.length-1;
    while(start<end){
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++
        end--
    }
    return array;
}

console.log(InefficientReverse([1,2,3,4,5,6]));

//Minimum number
function minNumber(array){
    return Math.min(...array)
}
console.log(minNumber([1,2,3,4,5]));


// Maximum number
function maxNumber(array){
    return Math.max(...array)
}
console.log(maxNumber([1,2,3,4,5,6,7]));



// Neither efficient and not effcient.
function total(array){
    let sum = 0;
    for(i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

function findAnswer(array){
    return total(array)  // we call the another function here.
}

console.log(findAnswer([1,2,3,4,5]));
console.log(findAnswer([34,6557,8989,34]));
console.log(findAnswer([45,67,834,3,667,88]));