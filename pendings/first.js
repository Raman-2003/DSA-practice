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
