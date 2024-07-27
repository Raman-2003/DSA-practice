// // Normal Recursion
// function recursion(n){
//     if(n<=1){
//         return 1;
//     }

//     return n*recursion(n-1)
// } 

// console.log(recursion(4));
// console.log(recursion(5));


// //  Loop Recursion
// function loopRecursion(n){
//     if(n<=1){
//         return 1;
//     }
//     let result = 1;
//     for(i=2; i<=n; i++){
//         result *= i;
//     }
//     return result
// }

// console.log(loopRecursion(4));
// console.log(loopRecursion(5));

// // Normal way to find out prime or not
// function isPrime(n){
//     if(n<2){
//         return false;
//     }

//     for(i=2; i<n; i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));


// // Prime number =>  In mathematics, prime numbers are defined as natural numbers greater than 1 that have no divisors other than 1 and themselves.


// //Using Math.sqrt to find prime or not
// function Prime(n){
//     if(n<2){
//         return false;
//     }
//     for(i=2; i<= Math.sqrt(n); i++){  // It reduce the number of loop running times also cut it mostly.
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(Prime(2));
// console.log(Prime(3));
// console.log(Prime(4));
// console.log(Prime(5));


// // Power of 2

// function PowerOfTwo(n){
//     if(n < 1){
//         return false;
//     }

//     while(n > 1){
//         if(n%2 !== 0){
//             return false;
//         }
//         n = n%2;
//     }
//     return true;
// }

// console.log(PowerOfTwo(2));
// console.log(PowerOfTwo(3));
// console.log(PowerOfTwo(5));
// console.log(PowerOfTwo(7));
// console.log(PowerOfTwo(8));


// // Using bit wise operator to find isPowerOfTwo.

// function isPowerOfTwoUsingbitwise(n){
//     if(n < 1){
//         return false;
//     }
//     return n & (n-1) === 0;
// }

// console.log(isPowerOfTwoUsingbitwise(2)); //true  [Because, 2%2 == 0 dhan varum]
// console.log(isPowerOfTwoUsingbitwise(3)); //false [Because, 3%2 != 0 dhan varum]
// console.log(isPowerOfTwoUsingbitwise(4)); //true  [Because, 4%2 == 0 dhan varum]
// console.log(isPowerOfTwoUsingbitwise(5)); //false [Because, 5%2 != 0 dhan varum]



