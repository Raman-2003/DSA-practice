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

set.delete(6);
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