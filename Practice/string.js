// // function isPalindrome(str){
// //     let reverse = str.split('').reverse().join('');
// //     return reverse === str;
// // }

// // console.log(isPalindrome('racecar'));
// // console.log(isPalindrome('hello'));

// // const names = 'Raman'
// // console.log(names[0]);  // "R". we can access letter of the string using index like an array.


// // // Occurence of letter in a string
// // function occurenceLetter(str, letter){
// //     let count = 0;
// //     for(i=0; i<str.length; i++){
// //         if(str[i] === letter){
// //             count++
// //         }
// //     }
// //     return count;
// // }

// // console.log(occurenceLetter('hello world', 'l'));



// // function reverseString(str) {
// //     return str.split('').reverse().join('');
// // }

// // console.log(reverseString("hello")); // olleh


// // // Binary search 
// // function binary(array,target){
// //     let left = 0;
// //     let right = array.length -1;
// //     while(left<=right){
// //         let middleIndex = Math.floor((left+right)/2);
// //         if(target === array[middleIndex]){
// //             return middleIndex;
// //         }

// //         if(target<middleIndex){
// //             right = middleIndex-1
// //         }else{
// //             left = middleIndex+1;
// //         }
// //     }
// //     return -1
// // }

// // console.log(binary([1,2,3,4,5],3));


// // function linearSearch(array, target){
// //     for(let i=0; i<array.length; i++){
// //         if(target === array[i]){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }

// // console.log(linearSearch([6,7,8,9,10],7));
// // console.log(linearSearch([6,7,8,9,10],77));


// function lengthOfLargestString(s){
//     let charSet = new Set();
//     let start = 0;
//     let maxLength = 0;

//     for(let end=0; end<s.length; end++){
//         while(charSet.has(s[end])){
//             charSet.delete(s[start]);
//             start++;
//         }
//         charSet.add(s[end]);
//         maxLength = Math.max(maxLength, end-start+1)
//     }
//     return maxLength
    
// }


// console.log(lengthOfLargestString('abcabcbb'));




function binarySearch(array, target){
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


console.log(binarySearch([-5, 2, 4, 6, 10],6));
console.log(binarySearch([-5, 2, 4, 6, 10],10));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));


function recursiveBinarySearch(array, target){
    return search(array, target, 0, array.length-1)
}

function search(array, target, left,right){
    while(left<=right){
        let middleIndex = Math.floor((left+right)/2);
        if(array[middleIndex] === target){
            return middleIndex;
        }
        if(target<array[middleIndex]){
            return search(array, target, left, middleIndex-1)
        }else{
            return search(array, target, middleIndex+1, right)
        }
    }
    return -1;
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10],6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10],10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10],20));