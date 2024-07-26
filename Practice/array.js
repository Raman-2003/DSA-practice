// Find largest value in an array.
function findLargest(array){
    let max = array[0];
    for(i=1; i<array.length;i++){
        if(max<array[i]){
            max = array[i]
        }
    }
    return max;
}
console.log(findLargest([34,67,122,98,54]));

// Sum of all elements in an array.
function sumOfArray(array){
    let sum = 0;
    for(i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sumOfArray([1,2,3,4,5]));


// reverse not efficient
function reverseArray(array){
    let empty = []
    for(i=array.length-1; i>=0; i--){
        empty.push(array[i])
    }
    return empty
}

console.log(reverseArray([1,2,3,4,5]));

//efficient reverse.
function reverse(array){
    let start = 0;
    let end = array.length-1;
    while(start < end){
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--
    }
    return array;
}
console.log(reverse([6,7,8,9,10]));


function minimumNumber(array){
    let min = array[0];
    for(i=1; i<array.length; i++){
        if(array[i] < min){
            min = array[i]
        }
    }
    return min;
}

console.log(minimumNumber([3,4,1,5,6]));  // 1





function countOccurences(array, target){
        let count = 0;
        for(i=0; i<array.length; i++){
            if(target === array[i]){
                count++
            }
        }
        return count++
}

console.log(countOccurences([1, 2, 3, 3, 3, 4, 5], 3));


// Find the Index of a Given Element in an Array
function findIndex(array, target){
    for(i=0; i<array.length; i++){
        if(target === array[i]){
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log();
console.log();
console.log();
console.log();




function searchNotEfficient(array, value){
    if(array.length === 0){
        return null;
    }
    let i = 0;
    let curr = array[0];
    while(curr){
        if(curr === value){
            return i;
        }
        curr = array[i+1]
        i++;    
    }
    return -1
}

console.log(searchNotEfficient([1,2,3,4,5,6], 55));



function SearchNotSpeed(array, target){
    for(i=0; i<array.length; i++){
        if(target === array[i]){
            return true;
        }
    }
    return false;
}
console.log(SearchNotSpeed([1,2,3,4,5], 4));


// Find the Second Largest Element in an Array
function secondLargest(array){
    const sort = array.sort((a,b)=>a-b);
   const len = sort.length;
    return sort[len-2]
}

console.log(secondLargest([1,4,6,87,43]))


function secondBig(array){
    const uniqueArray = Array.from(new Set(array));

    const sort = uniqueArray.sort((a,b)=>b-a);

    return sort[1];
}

console.log(secondBig([1,2,3,4,5]));



function removeDup(array){
    let unique = [];
    for(i=0; i<array.length; i++){
        if(!unique.includes(array[i])){
            unique.push(array[i])
        }
    }
    return unique;
}

console.log(removeDup([1,2,2,2,3,4]));


function mergedArray(array1, array2){
    let mergedArr = [];
    let i=0; j=0;
    while(i<=array1.length && j<array2.length){
        if(array1[i] < array2[j]){
            mergedArr.push(array1[i])
            i++
        }else{
            mergedArr.push(array2[j])
            j++
        }
    }
    return mergedArr
}

console.log(mergedArray([1,3,5], [2, 4, 6]));

//update an element;
function updateValue(array, value, index){
        for(i=0; i<array.length; i++){
            if(index === i){
                array[i] = value;
            }
        }
        return array;
}


console.log(updateValue([1,2,3,4,5], 10, 2));


function append(array, value){
    let len = array.length;
    array[len] = value;
    return array;
}

console.log(append([1,2,3,4], 5));