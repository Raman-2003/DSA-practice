// Fibonacci formuls => Fibonacci = Fib(n-1) + Fib(n-2);



// General 
function fibonacci(n){
    if(n <= 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}


// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(55)); // But this function is Linear time complexity.


// General
let memoi = {};

function memo(n){
    console.log(memoi);
    if(memoi[n]){
        console.log('If is working');
        console.log(memoi[n]);
    }else{
        console.log('Else is working');
        memoi[n] = n + 10;
        console.log(memoi[n]);
        
    }
}

memo(10)
memo(10)
memo(20)
memo(30)


// Efficient
function fibonacci(n){
    if(n<=1){
        return n;
    }
    const fib = [0,1];
    for(let i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib[n]
}   

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(555));  // This function is really faster than other fibonacci derivavtion methods also This is Constant time complexity.

fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(3) = 2
fibonacci(4) = 3
fibonacci(5) = 5
fibonacci(6) = 8
fibonacci(7) = 13
fibonacci(8) = 21
fibonacci(9) = 34
fibonacci(10) = 55


function fibonacci(n){
    const fib = [0,1];  // Here we didn;t give the base case. But is better to give the base case
    for(let i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib[n]
}

console.log(fibonacci(3));


// Good summation example
function summation(n){
    return n*(n+1)/2;
}

console.log(summation(5));  // 5+4+3+2+1
console.log(summation(55));



// Fibonacci of 5  = 5  fibonacci = fibonacii[n-1] + fibonacci[n-2]
// Factorial of 5  = 120 recursion = n * recursion (n-1)

