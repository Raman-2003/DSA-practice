// // Find largest string in an array

// // Using Buildin
// function largestString(str){
//     return str.reduce((curr, accu)=>accu.length > curr.length? accu : curr)
// }

// const array = ['Ice', 'Cream', 'Chacolate', 'Candies']
// console.log(largestString(array));  // Chacolate

// // Without using Build-in
// function findLargest(str){
//     let largest = ''
//     for(let i=0; i<str.length; i++){
//         if(str[i]>largest.length){
//             largest = str[i]
//         }
//     }
//     return largest
// }

// const arrays = ['Ice', 'Cream', 'Chacolate', 'Candies']
// console.log(largestString(arrays));  // Chacolate

// var str = "Raman Kishore Armstrong Equality and Discipline"
// console.log(str[0]);     //R
// console.log(str.length); //47



// // This function find out the largest string within a Sentence. {Without taking the sentnce into an array}
// // Example => Here we taking link "Raman Kishore Pooja Intelligent Small Angry" instead ["Raman", "Kishore", "Pooja", "Intelligent", "Small", "Angry"]

// // Using Build-in methods
// function findLarge(str){
//      return str.split(" ").reduce((accu, curr)=>curr.length > accu.length? curr: accu)
// }   

// console.log(findLarge("Raman Kishore Pooja Intelligent Small Angry"));

// // Without buildin to findout the largest string in a sentence
// function largest(str){
//     let largest = ''
//     let currentWord = ''

//     for(let i=0; i<str.length; i++){
//         if(str[i] === ' ' || i === str.length){
//             if(currentWord.length > largest.length){
//                 largest = currentWord;
//             }
//             currentWord = ''
//         }else{
//             currentWord += str[i];
//         }
//     }
//     return largest
// }

// console.log(largest("Raman Kishore Pooja Intelligent Small Angry"));


// // Remove duplicates
// function removeDuplicates(array){
//     let seen = new Set();
//     for(let i=0; i<array.length; i++){
//         if(seen.has(array[i])){
//             continue;
//         }else{
//             seen.add(array[i])
//         }
//     }
//     return seen;
// }

// console.log(removeDuplicates([1,2,33,33,4,5,5,6])); // { 1, 2, 33, 4, 5, 6 }

// /*
// Usage of ASCII values in JavaScript:
// 1. Character to ASCII: The charCodeAt() method is used to get the ASCII value of a character.
// 2. ASCII to Character: The String.fromCharCode() method converts ASCII values back to characters.
// 3. Simple encryption: ASCII values are useful in implementing basic encryption algorithms like the Caesar cipher.

// Definition: 
// ASCII, which stands for American Standard Code for Information Interchange, is a character encoding standard used for 
// electronic communication. ASCII values are numerical representations assigned to characters, including letters, digits, 
// punctuation marks, and control characters.

// */

// // Two dimensional array => merged
// function twoDimen(array1, array2){
//     let i=0; 
//     let j=0;
//     let merged = [];
//     while(i<=array1.length && j<array2.length){
//         if(array1[i]<array2[j]){
//             merged.push(array1[i])
//             i++;
//         }else{
//             merged.push(array2[j]);
//             j++;
//         }
//     }
//     return merged;
// }

// console.log(twoDimen([1,2,3], [4,5,6]));  //[1,2,3,4,5,6]

// /*
// Jagged array also called as Ragged array and "array of arrays". Inside a single array, we can declare 
// a lot of mini arrays with different length. "Elements are stored like an array."
// */

// let jaggedArray = [
//     [1,2,3],
//     [1,2,3,4,5],
//     [1,2],
//     [5,6,7,8,9, 'Armstrong']
// ]

// console.log(jaggedArray[0][2]);  // 0th array la 2 element => "3"
// console.log(jaggedArray[1][0]);  // 1st array la 2 element => "1"
// console.log(jaggedArray[2][1]);  // 2nd array la 2 element => "2"
// console.log(jaggedArray[3][5]);  // 3rd array la 2 element => "Armstrong"



// // First non-repeating element without using buildin method.
// function countSingleOccur(array){
//     let obj = {};
//     for (let num of array){
//         if(obj[num]){
//             obj[num]++
//         }else{
//             obj[num] = 1;
//         }
//     }

//     for (let key in obj){
//         if(obj[key] === 1){
//             return key;
//         }
//     }
//     return -1;
// }

// console.log(countSingleOccur([1,2,3,3,4,5,1,2]));


// // Pascal Case to Snake case.
// function pascalToSnake(str){
//     return str.replace(/([A-Z])/g, '_$1').toLowerCase().substring(1);
// }
// const test1 = pascalToSnake('PascalToSnake') 
// const test2 = pascalToSnake('RamanKishoreArmstrong')

// console.log(test1);
// console.log(test2);

// /*      Explanation:
//     /([A-Z])/g matches all capital letters in the string.
//     The replace method inserts an underscore before each capital letter. The $1 refers to the matched capital letter.
//     toLowerCase method converts the entire string to lowercase.
//     substring(1) method removes the leading underscore that is added at the start of the string.

//     step by step implement    
    
//     For AnotherExampleHere:
//   Match each capital letter:    A, E, H.
//   Insert underscores:           _A_nother_E_xample_H_ere.
//   Convert to lowercase:         _another_example_here.
//   Remove leading underscore:    another_example_here.
// */


// function recursion(n){
//     if(n<2){
//         return n;
//     }
//     return n*recursion(n-1)
// }
// console.log(recursion(3));
// console.log(recursion(4));
// console.log(recursion(5));


// // Reverse a string using Recursion
// function recursiveReverse(string){
//     if(string.length<=1){
//         return string;
//     }

//     return string[string.length -1] + recursiveReverse(string.substring(0, string.length-1))
// }

// console.log(recursiveReverse('EastWestNorth'));



// // Return middle element in an array
// function returnMiddle(array){
//     let left = 0;
//     let right = array.length;

//     while(left<=right){
//         let middle = Math.floor((array.length)/2);
//         if(middle%2===0){
//             return array[middle]
//         }else{
//             let newArr = [];
//             newArr.push(array[middle-1]);
//             newArr.push(array[middle])
//             return newArr
//         }
    
//     }
    
// }
// console.log(returnMiddle([1,2,3,4,5,6]));


// // Merge two arrays
// function flaten(array1, array2){
//     let newArr = [];
//     newArr = [...array1, ...array2].flat()  // optional thing => to give numbers inside flat method
//     return newArr
// }

// console.log(flaten([1,2,3],[4,5,6]));


// function capitalLetter(string){
//     if(typeof string !== 'string' || string.length === 0){
//         return string;
//     }
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
// }
// console.log(capitalLetter('alexanderbabu'));


// // Recursion will exit, once the count value reaches at 5
// function fiveTimeRecursion(value, count){
//     if(count>=5){
//         return value;
//     }
//     return fiveTimeRecursion(value+1, count+1)
// }

// console.log(fiveTimeRecursion(0,0));


// //Efficient
// function fibonacci(num){
//     if(num<2){
//         return num;
//     }
//     let fib = [0,1];
//     for(let i=2; i<=num; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib[num]
// }

// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(55));



// // It holds a weak reference to that particular object that we passed into the WeakRef() constructor.
// // We can access the WeakRef object using "deref()" method. ECMAScript 2021
// //Create a WeakRef() object.
// const obj = {
//     name: 'Raman Armstrong',
//     age: 21
// }

// const weakRef = new WeakRef(obj);
// console.log(weakRef.deref());



// console.log();
// const objss = {
//     name:'Raman',
//     age: 20,
//     city: 'Salem'
// }

// objss.name = 'Armstrong'

// console.log(objss);


// /*
// Primitive types in JavaScript (Number, String, Boolean, Undefined, Null, BigInt, Symbol) are immutable.

// Objects and their subtypes (including Arrays, Functions, Sets, and Maps) are mutable.

// When you assign an immutable value to a new variable or pass it to a function, you're working with a copy of that value.

// When you assign a mutable value to a new variable or pass it to a function, you're working with a reference to that value. 
// Changes to the new variable will affect the original.

// The const keyword prevents reassignment of the variable, but doesn't make objects immutable.
// */


//Find largest string
const array = [1,2,3,77, 4,5,6]

function findmax(array){
    let max = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i]>max){
            max=array[i]
        }
    }
    return max;
}

console.log(findmax(array));

// Find second largest without sorting
function secondLargest(array){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            secondLargest = largest
            largest = array[i];
        }else if(array[i]>secondLargest && array[i]<largest){
            secondLargest = array[i];
        }
    }
    if(secondLargest === -Infinity){
        return "There is no second largest number"
    }
    return secondLargest
}

console.log(secondLargest([10, 5, 8, 12, 3, 12, 7]));
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(secondLargest([5, 5, 5, 5])); // Output: "There is no second largest element"
console.log(secondLargest([1])); // Output: "There is no second largest element"
console.log();

// sorted or not
function isSorted(array){
    
    if(array.length<=1) return true;

    let ascending = true;
    let decending = true;

    for(let i=1; i<array.length; i++){
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

console.log(isSorted([1, 2, 3, 4, 5]));       // true (ascending)
console.log(isSorted([5, 4, 3, 2, 1]));       // true (descending)
console.log(isSorted([1, 1, 2, 3, 3]));       // true (ascending with duplicates)
console.log(isSorted([1, 3, 2, 4, 5]));       // false
console.log(isSorted([1]));                   // true (single element)
console.log(isSorted([]));                    // true (empty array)
console.log(isSorted([3, 3, 3, 3]));          // true (all elements equal



function zero(array){
    let newArr  = [];
    let count = 0;
    for(let i=0; i<array.length; i++){
            if(array[i] === 0){
                count++;
            }else{
                newArr.push(array[i])
            }
    }

    for(let j=1; j<count; j++){
        newArr.push(0);
    }

    return newArr
}

console.log(zero([1,20,3,0,4,50,0,6,0,50,67]));