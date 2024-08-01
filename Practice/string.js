// // function isPalindrome(str){
// //     let reverse = str.split('').reverse().join('');
// //     return reverse === str;
// // }
// // console.log(isPalindrome('racecar'));
// // console.log(isPalindrome('hello'));
// // const names = 'Raman'
// // console.log(names[0]);  // "R". we can access letter of the string using index like an array.


// // // // Occurence of letter in a string
// // // function occurenceLetter(str, letter){
// // //     let count = 0;
// // //     for(i=0; i<str.length; i++){
// // //         if(str[i] === letter){
// // //             count++
// // //         }
// // //     }
// // //     return count;
// // // }

// // // console.log(occurenceLetter('hello world', 'l'));



// // // function reverseString(str) {
// // //     return str.split('').reverse().join('');
// // // }

// // // console.log(reverseString("hello")); // olleh


// // // // Binary search 
// // // function binary(array,target){
// // //     let left = 0;
// // //     let right = array.length -1;
// // //     while(left<=right){
// // //         let middleIndex = Math.floor((left+right)/2);
// // //         if(target === array[middleIndex]){
// // //             return middleIndex;
// // //         }

// // //         if(target<middleIndex){
// // //             right = middleIndex-1
// // //         }else{
// // //             left = middleIndex+1;
// // //         }
// // //     }
// // //     return -1
// // // }

// // // console.log(binary([1,2,3,4,5],3));


// // // function linearSearch(array, target){
// // //     for(let i=0; i<array.length; i++){
// // //         if(target === array[i]){
// // //             return i;
// // //         }
// // //     }
// // //     return -1;
// // // }

// // // console.log(linearSearch([6,7,8,9,10],7));
// // // console.log(linearSearch([6,7,8,9,10],77));


// // function lengthOfLargestString(s){
// //     let charSet = new Set();
// //     let start = 0;
// //     let maxLength = 0;

// //     for(let end=0; end<s.length; end++){
// //         while(charSet.has(s[end])){
// //             charSet.delete(s[start]);
// //             start++;
// //         }
// //         charSet.add(s[end]);
// //         maxLength = Math.max(maxLength, end-start+1)
// //     }
// //     return maxLength
    
// // }

// // console.log(lengthOfLargestString('abcabcbb'));




// function binarySearch(array, target){
//     let left = 0;
//     let right = array.length-1;
//     while(left<=right){
//         let middleIndex = Math.floor((left+right)/2);
//         if(target === array[middleIndex]){
//             return middleIndex;
//         }
//         if(target<array[middleIndex]){
//             right = middleIndex-1
//         }else{
//             left = middleIndex+1;
//         }
//     }
//     return -1;   
// }


// console.log(binarySearch([-5, 2, 4, 6, 10],6));
// console.log(binarySearch([-5, 2, 4, 6, 10],10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));


// function recursiveBinarySearch(array, target){
//     return search(array, target, 0, array.length-1)
// }

// function search(array, target, left,right){
//     while(left<=right){
//         let middleIndex = Math.floor((left+right)/2);
//         if(array[middleIndex] === target){
//             return middleIndex;
//         }
//         if(target<array[middleIndex]){
//             return search(array, target, left, middleIndex-1)
//         }else{
//             return search(array, target, middleIndex+1, right)
//         }
//     }
//     return -1;
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10],6));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10],10));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10],20));



function largeString(str){
        return str.reduce((accu, curr)=>accu.length>curr.length? accu: curr)
}
console.log(largeString(['Ice', 'Cream', 'Chacolate', 'Candies']));


function findLa(str){
    let max = str[0];
    for(let i=1; i<str.length; i++){
        if(str[i].length > max.length){
            max = str[i]
        }
    }
    return max;
}

console.log(findLa(['Ice', 'Cream', 'Chacolate', 'Candies']));


function normalStrLarge(str){
    let currentWord = ''
    let largest = ''
    for(let i=0; i<=str.length; i++){
        if(str[i] === ' ' || i === str.length){
            if(currentWord.length > largest.length){
                largest = currentWord;
            }
            currentWord = ''
        }else{
            currentWord += str[i];
        }
    }
    return largest;
}

console.log(normalStrLarge("Raman Kishore Armstrong Equality and Discipline"));


function removeDup(array){
    let seen = new Set();
for(let num of array){
    if(seen.has(num)){
        continue;
    }else{
        seen.add(num);
    }
}
return seen;
}
console.log(removeDup([1,2,33,33,4,5,5,6]));


function mergedArray(array1, array2){
            let i =0;
            let j = 0;
            let merged = [];

            while(i<array1.length && j<array2.length){
                if(array1[i]<array2[j]){
                    merged.push(array1[i]);
                    i++;
                }else{
                    merged.push(array2[j]);
                    j++
                }
            }

            while(i<array1.length){
                merged.push(array1[i]);
                i++
            }

            while(j<array2.length){
                merged.push(array2[j]);
                j++;
            }
            return merged
}

console.log(mergedArray([1,2,3,4], [1,2,3,4,5,6,7,8,9]));



function nonRepeat(array){
    let obj = {};

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
    return -1
}
console.log(nonRepeat([1,2,3,4,3,2,1,5,5,6,7,6,4]));


function pascalToSnake(str){
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().substring(1)
}

console.log(pascalToSnake('RamanKishoreArmstrong'));


function reverseString(str){
    if(str.length<=1) return str;

    return str[str.length-1] + reverseString(str.substring(0, str.length-1))
}


console.log(reverseString('Ramankishore'));


function findSecondLarge(array){
    let largest = ''
    let secondLargest = ''

    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            secondLargest = largest;
            largest = array[i];
        }else if(array[i]>secondLargest && array[i]<largest){
            secondLargest = array[i];
        }
    }
    return secondLargest;
}

console.log(findSecondLarge([1,2,3,44,4,5,6,7]));



function isSorted(array){
    if(array.length<=1) return trur;

    let ascending = true;
    let decending = true;

    for(let i=0; i<array.length; i++){
        if(array[i]<array[i-1]){
            ascending = false;
        }

        if(array[i]>array[i-1]){
            decending = false;
        }

        if(!ascending && !decending){
            return false;
        }
    }
    return true;
}

console.log(isSorted([1,2,3,4,5,6]));


function zeroMoving(array){
        let count = 0;
        let newAArray = [];
        for(let i=0; i<array.length; i++){
            if(array[i] === 0){
                count++
            }else{
                newAArray.push(array[i])
            }
        }

        for(let j=1; j<=count; j++){
                newAArray.push(0);
        }
        return newAArray
}
console.log(zeroMoving([1,2,3,0,534,0,43,0,23,32,0,332]));



function consecutive(array){
        let start = 0;
        let get = [];

        for(let i=0; i<array.length; i++){
            if(get.includes(array[i])){
                get[start];
            }else{
                get.push(array[i]);
            }
        }
        return get;
}

console.log(consecutive([1,2,3,1,2,3,4,1,2,4,5,6]));