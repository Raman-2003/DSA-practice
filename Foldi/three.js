// Anagrams checks


//Using Build in methods.
function AnagramUsingBuildin(one, two){
    // convert lowercase
    let low1 = one.toLowerCase();
    let low2 = two.toLowerCase();

    return low1.split('').sort().join('') === low2.split('').sort().join('');
}

console.log(AnagramUsingBuildin('Tab', 'Bat'));  // true
console.log(AnagramUsingBuildin('Ice', 'Nice'));  // false
console.log(AnagramUsingBuildin('aab', 'aaz'));  // false
console.log(AnagramUsingBuildin('ayalamlam', 'malayalam'));  // true

console.log();
console.log();
console.log();


// Use custom methods
function CheckAnagramUusingCustomLogic(str1, str2){
    // convert lowercasse and remove non-alphabetic characters.
    function cleanString(str){
        let result = ''
        for(let i=0; i<str.length; i++){
            let char = str[i].toLowerCase();
            if(char >= 'a' && char <= 'z'){
                result += char;
            }
        }
        return result;
    }

    cleanString(str1)
    cleanString(str2);

    if(str1.length !== str2.length){
        return false;
    }

    function CountCharacters(str){
        let obj = {};
        for(i=0; i<str.length; i++){
            let char = str[i];
            obj[char] = (obj[char] || 0) + 1;
        }
        return obj;
    }

    let C1 = CountCharacters(str1)
    let C2 = CountCharacters(str2);

    for(let key in C1){
        if(C1[key] !== C2[key]){
            return false;
        }
    }
    return true;


}

console.log(AnagramUsingBuildin('Tab', 'Bat'));  // true
console.log(AnagramUsingBuildin('Ice', 'Nice'));  // false
console.log(AnagramUsingBuildin('aab', 'aaz'));  // false
console.log(AnagramUsingBuildin('ayalamlam', 'malayalam'));  // true

