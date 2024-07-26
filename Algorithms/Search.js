const array = [-5, 2, 10, 4, 6];
const target = 6;

// We need to return the target index in the array. If it is not found, we return -1.

// Normal way 
function linearSearch(array, target){
    for(i=0; i<array.length; i++){
        if(target === array[i]){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(array, target));  // O(n) means this is a linear time comlpexity also it is not efficient.


// Efficient way.
function binarySearch(array, target){
    let leftIndex = 0;
    let rightIndex = array.length -1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === array[middleIndex]){
            return middleIndex;
        }
        if(target<array[middleIndex]){
            rightIndex = middleIndex-1;
        }else{
            leftIndex = middleIndex+1;
        }
    }
    return -1;
}


console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));


// function recursiveBinary(array, target){
//     return binarySearch(array, target, 0, array.length-1)
// }

// function search(array, target, leftIndex, rightIndex){
//         if(leftIndex > rightIndex){
//             return null;
//         }
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2);
//         if(target === array[middleIndex]){
//             return middleIndex
//         }
//         if(target < array[middleIndex]){
//             return search(array, target, leftIndex, middleIndex-1)
//         }else{
//             return search(array, target, middleIndex+1, rightIndex)
//         }
// }





function recursiveBinary(array, target){
    return search(array, target, 0, array.length-1);
}

function search(array, target, left, right){
    if(left>right){
        return null;
    }
    let middleIndex = Math.floor((left+right)/2);
    if(array[middleIndex] === target){ 
        return middleIndex;
    }
    if(target<array[middleIndex]){
        return search(array, target, left, middleIndex-1)
    }else{
        return search(array, target, middleIndex+1, right);
    }
}

console.log(recursiveBinary([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinary([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinary([-5, 2, 4, 6, 10], 20));
