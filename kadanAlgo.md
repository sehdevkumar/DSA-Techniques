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


### Examples 


1. **Max Product of SubArray**

```js

   let arr = [-3,3,3,-5,6,7,-8,10];
   let maxProduct = arr[0];
   let minProduct = arr[0];
   let finalProduct =arr[0];

   for(let i=0;i<arr.length;i++){
     
      let maxTemp = maxProduct;
      maxProduct = Math.max(arr[i], arr[i]*maxProduct, arr[i]*minProduct);
      minProduct = Math.max(arr[i], arr[i]*maxTemp, arr[i]*minProduct);
      finalProduct = Math.max(finalProduct,maxProduct);


   }


  console.log(finalProduct);








```
