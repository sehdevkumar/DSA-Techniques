function LongestSubArray(arr, k) {
  debugger;

  let start = 0;
  let sum = 0;
  let maxLen = 0;

  for (let end = 0; end < arr.length; end++) {
    //   adjust window
    sum += arr[end];

    // meet condtions
    while (sum > k) {
        
        // window shrinking and remove previous element
      
            sum = arr[start] > 0 ? sum - arr[start] : sum + arr[start];
            start++;
    }
    
    // compute result
    
    
    if (sum === k) {
        maxLen = Math.max(maxLen, end - start + 1);
    }
    // if found sum then calculate max len

    console.log(maxLen);
  }

  return maxLen;
}

LongestSubArray([-13, 0, 6, 15, 16 ,2 ,15, -12, 17, -16 ,0 ,-3, 19, -3, 2, -9, -6],15)





