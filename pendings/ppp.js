// Largest string

function largestStr(string){
    return string.reduce((accu, curr)=>accu.length>curr.length?accu:curr)
}

console.log(largestStr(['Ice', 'Cream', 'Chacolate', 'Candies']));

function finidLargest(string){
    let largest = ''  // largest value store
    for(let i=0; i<string.length; i++){
        if(string[i].length>largest.length){
            largest = string[i];
        }
    }
    return largest;

}

console.log(finidLargest(['Ice', 'Cream', 'Chacolate', 'Candies']));


function findLargestStr(str){
    return str.split(' ').reduce((accu,curr)=>accu.length>curr.length? accu:curr)
}

console.log(findLargestStr("Ice Cream Chacolate Candies"));

function withOutLargestStr(string){
    let largest = ''
    let currentWord = ''
    for(let i=0; i<string.length; i++){
        if(string[i] === ' ' || i === string.length){
            if(currentWord.length > largest.length){
                largest  = currentWord;
            }
            currentWord = ''   // It clears the current word and stores upcomming strings
        }else{
            currentWord += string[i];
        }
    }
    return largest
}

console.log(withOutLargestStr("Ice Cream Chacolate Candies"));

function removeDup(array){
        const seen = new Set();

        for(let i=0; i<array.length; i++){
            if(seen.has(array[i])){
                continue;
            }else{
                seen.add(array[i])
            }
        }
        return seen;
}

console.log(removeDup([1,2,33,33,4,5,5,6]));


function twoDimen(array1, array2){
    let i=0; 
    let j=0;
    let merged = [];
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            merged.push(array1[i])
            i++
        }else{
            merged.push(array2[j]);
            j++;
        }
    }

    while(i<array1.length){
        merged.push(array1[i])
        i++
    }

    while(j<array2.length){
        merged.push(array2[j]);
        j++
    }

    return merged


}

console.log(twoDimen([1,232,873], [432,598,9834,43989,3498,632]));  //[1,2,3,4,5,6]


const jagged = [
    [1,2,3],
    [4,5,6,7],
    [1,4,5,6,7],
    [34,56,6723,34]
]

console.log(jagged[0][2]);
console.log(jagged[1][2]);
console.log(jagged[2][4]);
console.log(jagged[3][2]);

function firstSingleOccurence(array){
    let obj = {}
    for(let num of array){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num] = 1;
        }
    }

    for(let key in obj){
        if(obj[key] === 1){
           return key;
        }
    }
}

console.log(firstSingleOccurence([1,2,3,4,2,1,4]));


function pascalToSnake(string){
    return string.replace(/([A-Z])/g, '_$1').toLowerCase().substring(1)
}
const nams = "RamanKishoreArmstrong"
// const name = 'raman_kishore_armstrong'
console.log(pascalToSnake(nams));


function recursion(n){
    if(n<2){
        return n;
    }

    return n*recursion(n-1)

}

console.log(recursion(5));
console.log(recursion(6));
console.log(recursion(7));


function middleArray(array){
        let middle = Math.floor(array.length/2);
        let news = []
        if(middle%2===0){
            return array[middle]
        }else{
            news.push(array[middle])
            return news;
        }
}
array = [1,2,3,4,5,6]
console.log(middleArray(array));

function mergedArray(array1, array2){
        let news = [array1,array2].flat(2)
        return news;
}
console.log(mergedArray([1,2,3,4],[5,6,[3,56,67],7]));

function firstCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

console.log(firstCap('alexanderbabu'));


function recusriveFive(value, count){
    if(count>=5){
        return value;
    }
    return recusriveFive(value+1, count+1)
}

console.log(recusriveFive(0,0));


const obj = {
    name: 'Raman',
    age: 20
}

const weakMap = new WeakRef(obj);
console.log(weakMap.deref());

function mostOccurence(array){
        let obj = {}

        for(let num of array){
            if(obj[num]){
                obj[num]++
            }else{
                obj[num] = 1;
            }
        }

        console.log(obj);

        let maxCount = 0;
        for(let key in obj){
            if(obj[key]>maxCount){
                maxCount = obj[key];
                maXOccur = key;
            }
        }
        return maXOccur
}

console.log(mostOccurence([1,2,3,3,4,5]));  // 3