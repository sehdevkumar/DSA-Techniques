<!-- 1. max sum  -->
<!-- 2. max product -->



A algo gives max sum subrrary even it holds negative values.


```js 

let arr = [1,2,-3,-5,3,4,6,-7];

let maxSum = 0;
let currSum = 0;

for(let i=0;i<arr.length;i++){
   currSum =Math.max(arr[i], currSum + arr[i]);
   maxSum = Math.max(currSum , maxSum);
 
}

console.log(maxSum);

```