// Map is an unsorted key value pairs. Map constructor optionally accepts an array with key value pairs. Also Map accepts on;y one array in the constructor.

const map = new Map([['a',1], ['b', 2], ['c', 3]]);

console.log(map);

map.set('d',4);  // ['d', 4] ipdi square bracket la thara kudadhu. () indha bracket is enough.
console.log(map);

console.log(map.size); // it gives the size of map

console.log(map.delete('d'));  // true. means it can be delete
console.log(map);

console.log(map.has('d'));  // false

map.clear();
console.log(map);

// Mostly all are Constant time compexity O(1)
