// Find largest string in an array

// Using Buildin
function largestString(str){
    return str.reduce((curr, accu)=>accu.length > curr.length? accu : curr)
}

const array = ['Ice', 'Cream', 'Chacolate', 'Candies']
console.log(largestString(array));  // Chacolate

// Without using Build-in
function findLargest(str){
    let largest = ''
    for(let i=0; i<str.length; i++){
        if(str[i]>largest.length){
            largest = str[i]
        }
    }
    return largest
}

const arrays = ['Ice', 'Cream', 'Chacolate', 'Candies']
console.log(largestString(arrays));  // Chacolate

var str = "Raman Kishore Armstrong Equality and Discipline"
console.log(str[0]);     //R
console.log(str.length); //47



// This function find out the largest string within a Sentence. {Without taking the sentnce into an array}
// Example => Here we taking link "Raman Kishore Pooja Intelligent Small Angry" instead ["Raman", "Kishore", "Pooja", "Intelligent", "Small", "Angry"]

// Using Build-in methods
function findLarge(str){
     return str.split(" ").reduce((accu, curr)=>curr.length > accu.length? curr: accu)
}   

console.log(findLarge("Raman Kishore Pooja Intelligent Small Angry"));

// Without buildin to findout the largest string in a sentence
function largest(str){
    let largest = ''
    let currentWord = ''

    for(let i=0; i<str.length; i++){
        if(str[i] === ' ' || i === str.length){
            if(currentWord.length > largest.length){
                largest = currentWord;
            }
            currentWord = ''
        }else{
            currentWord += str[i];
        }
    }
    return largest
}

console.log(largest("Raman Kishore Pooja Intelligent Small Angry"));


// Remove duplicates
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

console.log(removeDuplicates([1,2,33,33,4,5,5,6])); // { 1, 2, 33, 4, 5, 6 }

/*
Usage of ASCII values in JavaScript:
1. Character to ASCII: The charCodeAt() method is used to get the ASCII value of a character.
2. ASCII to Character: The String.fromCharCode() method converts ASCII values back to characters.
3. Simple encryption: ASCII values are useful in implementing basic encryption algorithms like the Caesar cipher.

Definition: 
ASCII, which stands for American Standard Code for Information Interchange, is a character encoding standard used for 
electronic communication. ASCII values are numerical representations assigned to characters, including letters, digits, 
punctuation marks, and control characters.

*/

// Two dimensional array => merged
function twoDimen(array1, array2){
    let i=0; 
    let j=0;
    let merged = [];
    while(i<=array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            merged.push(array1[i])
            i++;
        }else{
            merged.push(array2[j]);
            j++;
        }
    }
    return merged;
}

console.log(twoDimen([1,2,3], [4,5,6]));  //[1,2,3,4,5,6]

/*
Jagged array also called as Ragged array and "array of arrays". Inside a single array, we can declare 
a lot of mini arrays with different length. "Elements are stored like an array."
*/

let jaggedArray = [
    [1,2,3],
    [1,2,3,4,5],
    [1,2],
    [5,6,7,8,9, 'Armstrong']
]

console.log(jaggedArray[0][2]);  // 0th array la 2 element => "3"
console.log(jaggedArray[1][0]);  // 1st array la 2 element => "1"
console.log(jaggedArray[2][1]);  // 2nd array la 2 element => "2"
console.log(jaggedArray[3][5]);  // 3rd array la 2 element => "Armstrong"



// First non-repeating element without using buildin method.
function countSingleOccur(array){
    let obj = {};
    for (let num of array){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num] = 1;
        }
    }

    for (let key in obj){
        if(obj[key] === 1){
            return key;
        }
    }
    return -1;
}

console.log(countSingleOccur([1,2,3,3,4,5,1,2]));


// Pascal Case to Snake case.
function pascalToSnake(str){
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().substring(1);
}
const test1 = pascalToSnake('PascalToSnake') 
const test2 = pascalToSnake('RamanKishoreArmstrong')

console.log(test1);
console.log(test2);

/*      Explanation:
    /([A-Z])/g matches all capital letters in the string.
    The replace method inserts an underscore before each capital letter. The $1 refers to the matched capital letter.
    toLowerCase method converts the entire string to lowercase.
    substring(1) method removes the leading underscore that is added at the start of the string.

    step by step implement    
    
    For AnotherExampleHere:
  Match each capital letter:    A, E, H.
  Insert underscores:           _A_nother_E_xample_H_ere.
  Convert to lowercase:         _another_example_here.
  Remove leading underscore:    another_example_here.
*/


function recursion(n){
    if(n<2){
        return n;
    }
    return n*recursion(n-1)
}
console.log(recursion(3));
console.log(recursion(4));
console.log(recursion(5));


// Reverse a string using Recursion
function recursiveReverse(string){
    if(string.length<=1){
        return string;
    }

    return string[string.length -1] + recursiveReverse(string.substring(0, string.length-1))
}

console.log(recursiveReverse('EastWestNorth'));



// Return middle element in an array
function returnMiddle(array){
    let left = 0;
    let right = array.length;

    while(left<=right){
        let middle = Math.floor((array.length)/2);
        if(middle%2===0){
            return array[middle]
        }else{
            let newArr = [];
            newArr.push(array[middle-1]);
            newArr.push(array[middle])
            return newArr
        }
    
    }
    
}
console.log(returnMiddle([1,2,3,4,5,6]));


// Merge two arrays
function flaten(array1, array2){
    let newArr = [];
    newArr = [...array1, ...array2].flat(2)
    return newArr
}

console.log(flaten([1,2,3],[4,5,6]));