function isPalindrome(str){
    let reverse = str.split('').reverse().join('');
    return reverse === str;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

const names = 'Raman'
console.log(names[0]);  // "R". we can access letter of the string using index like an array.


// Occurence of letter in a string
function occurenceLetter(str, letter){
    let count = 0;
    for(i=0; i<str.length; i++){
        if(str[i] === letter){
            count++
        }
    }
    return count;
}

console.log(occurenceLetter('hello world', 'l'));



function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // olleh


// Binary search 
function binary(array,target){
    let left = 0;
    let right = array.length -1;
    while(left<=right){
        let middleIndex = Math.floor((left+right)/2);
        if(target === array[middleIndex]){
            return middleIndex;
        }

        if(target<middleIndex){
            right = middleIndex-1
        }else{
            left = middleIndex+1;
        }
    }
    return -1
}

console.log(binary([1,2,3,4,5],3));


function linearSearch(array, target){
    for(let i=0; i<array.length; i++){
        if(target === array[i]){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([6,7,8,9,10],7));
console.log(linearSearch([6,7,8,9,10],77));