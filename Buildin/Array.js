const array = [1,2,3,4,5];

array.push(6,7,8);
console.log(array);

array.pop()
console.log(array);

// Push and Pop methods are Constant time complexity O(1). Because, it doesn't reallocation or reform the array index positions.

array.shift()
console.log(array);

array.unshift(1)
console.log(array);

// Shift and Unshift methods are Linear time complexties. O(n). Because whenever we perform shift and unshifft, it again reforms the index position and maintain a proper index.
