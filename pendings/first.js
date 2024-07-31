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

