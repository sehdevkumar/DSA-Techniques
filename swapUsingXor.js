let a = 12;
let b = 13;

a = a ^ b; // Step 1: a now holds the result of a ^ b
b = a ^ b; // Step 2: b now holds the original value of a
a = a ^ b; // Step 3: a now holds the original value of b

console.log(a, b); // Output: 13 12
