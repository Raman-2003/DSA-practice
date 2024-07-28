function findLThelongestWord(str){
    let parts = str.split(' ');

    const result = parts.reduce((acc, curr) => {
        return curr.length>acc.length? curr: acc;
    })
    return result;
}


console.log(findLThelongestWord('One Three Chennai NewZealand'));  // NewZealand


function customLongest(str){
    let maxLength = 0;
    let bigWord = '';
    let currWord = ''
    let i=0;

    while(i <= str.length){
        if(str[i] === ' ' || i === str.length){
               if(currWord.length > maxLength){
                maxLength = currWord.length;
                bigWord = currWord;
               }
               currWord = ''
        }else{
            currWord += str[i]
        }
        i++
    }
    return bigWord;
}

console.log(customLongest('One Three Chennai Netherlands'));  //Netherlands