
// Remove middle name using build-in
let names = "Raman kishore appleseed king super";
let parts = names.split(' ');    // Split the name into an array of words
let result = [parts[0], parts[parts.length-1]].join(' ')
console.log(result);
console.log();
console.log();



//another good approach
function middleOddOrEven(name){
        let parts = name.split(' ');
        let length = parts.length;

        if(length<=2){
            return name;
        }

        let middleStart = Math.floor((length-1)/2)
        let middleEnd = Math.ceil((length-1)/2)

        parts.splice(middleStart, middleEnd-middleStart+1);
        return parts.join(' ')
}

console.log(middleOddOrEven('Raman Kishore Appleseed king super'));
console.log(middleOddOrEven('Raman king super'));
console.log(middleOddOrEven('Raman king is super'));
console.log(middleOddOrEven('Raman super'));
console.log(middleOddOrEven('Raman Kishore Appleseed'));


// Testing '' and ' '
const str = "Raman Kishore Appleseed king super"
let split = str.split('');  /* 
  ['R', 'a', 'm', 'a', 'n', ' ', 'K',
    'i', 's', 'h', 'o', 'r', 'e', ' ',
    'A', 'p', 'p', 'l', 'e', 's', 'e',
    'e', 'd', ' ', 'k', 'i', 'n', 'g',
    ' ', 's', 'u', 'p', 'e', 'r'
  ]
    */
let splits = str.split(' ');  // [ 'Raman', 'Kishore', 'Appleseed', 'king', 'super' ]
console.log(split);







/*
 Split(' ') method is used to convert a string into an array.
 for example => "Raman kishore persistence" => ["Raman", "kishore", "persistence"];

 join(' ') method is used to convert an array back into string. 
 It give back like a normal derivation of strings
 
 */




const strs = "Raman";
let length = strs.length;
let first = strs[0];
let last = strs[5];
console.log(length);
console.log(first); // R
console.log(last); // undefined. Working like an array indices.










