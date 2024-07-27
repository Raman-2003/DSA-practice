// How to flattening an array with build in methods and without build in-s


// build in
function flat(array){
    let flated = array.flat();
    return flated;
}

const array = [[1,2,3,4], [5,6,7]];
console.log(flat(array));

// build in
function secondWay(arr){
    let joined = arr.flatMap(x=>x);
    return joined;
}

const arr = [[1,2,3,4], [5,6,7,8]]
console.log(secondWay(arr));


function usingLoop(twoDArray){
    let final = [];
    for (let i=0; i<twoDArray.length; i++){
        for(let j=0; j<twoDArray[i].length; j++){
            final.push(twoDArray[i][j])
        }
    }
    return final;
}

const twoDArray = [[1,2,3,4], [5,6,7,8]];
console.log(usingLoop(twoDArray));