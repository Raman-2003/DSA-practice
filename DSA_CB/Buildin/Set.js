// Set constructor optionally accepts an array.

const set = new Set([1,2,3,4,5]);

for(let num of set){
    console.log(num);
}

set.add(6)
console.log(set);

set.add(6)
set.add(6)
set.add(6);

console.log(set);
console.log(set.has(2)); // true
console.log(set.has(22)); // false;

set.delete(3);
console.log(set);

set.clear();
console.log('Set elements ', set);

/*
Creating a new Set => Constant time
Adding an element  => Constant time
Deleting an element => Constant time
Access an element using "has" => Constant time
clear method    => Constant time
set.size()      => Constant time
forEach => Linear time
*/


// const str = "This very beautiful";
// function find(){
//     function findLargestWord(str) {
//         let maxLength = 0;
//         let maxWord = "";
//         let currentLength = 0;
//         let currentWord = "";
    
//         for (let i = 0; i < str.length; i++) {
//             let char = str[i];
//             if (char !== ' ') {
//                 currentWord += char;
//                 currentLength++;
//             } else {
//                 if (currentLength > maxLength) {
//                     maxLength = currentLength;
//                     maxWord = currentWord;
//                 }
//                 currentWord = "";
//                 currentLength = 0;
//             }
//         }
    
//         // Check the last word
//         if (currentLength > maxLength) {
//             maxWord = currentWord;
//         }
    
//         return maxWord;
//     }
    
//     const str = "This is very beautiful";
//     console.log(findLargestWord(str)); // Output: "beautiful"
    
// }

