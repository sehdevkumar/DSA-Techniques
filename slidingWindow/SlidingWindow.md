The examples I provided were **problems** solved using the **sliding window technique**. Each example demonstrates how the sliding window approach can be applied to different types of problems with varying constraints and goals. Let me break it down:

### Sliding Window Technique Breakdown

1. **Fixed-size Sliding Window**
   - **Problem**: Maximize or minimize something (like sum) in a subarray of a given size.
   - **Algorithm**: Use a fixed window size and slide it across the array.

2. **Variable-size Sliding Window**
   - **Problem**: Find subarrays of variable lengths based on certain conditions (like reaching a sum or unique element constraint).
   - **Algorithm**: Expand and contract the window dynamically based on the problem’s conditions.

3. **Two Pointers Sliding Window**
   - **Problem**: Usually involves checking conditions on subarrays (e.g., number of distinct elements, sum constraints).
   - **Algorithm**: Use two pointers, adjusting the window size as needed to maintain the required condition.

4. **Sliding Window with Deque**
   - **Problem**: Find the maximum/minimum in each subarray of a given size.
   - **Algorithm**: Maintain a deque to efficiently track the maximum/minimum element in the current window.

5. **Sliding Window for Strings**
   - **Problem**: Find the longest substring that satisfies some conditions (e.g., distinct characters, no repeating characters).
   - **Algorithm**: Use a sliding window to check character conditions in a string.

### Core **Algorithms** Used in Sliding Window:

1. **Initialization**:
   - Start with two pointers (e.g., `start` and `end`) or a window size.
   - Initialize auxiliary data structures (like arrays, maps, or deques) to help track the state of the window.

2. **Sliding the Window**:
   - Move the window by expanding one pointer (typically `end`).
   - As you expand, adjust internal data structures to reflect the current window.

3. **Shrinking the Window**:
   - When a condition is violated (e.g., sum exceeds the target, too many distinct characters), shrink the window by advancing the `start` pointer.
   - Continue adjusting the window until the condition is met.

4. **Result Calculation**:
   - Depending on the problem, you compute results during or after sliding (e.g., tracking maximum sum, counting valid subarrays, etc.).

### Example of Sliding Window **Algorithm Structure**:

Here’s a more abstract look at the sliding window algorithm structure:

```typescript
function slidingWindowAlgo(arr: number[], condition: any): ResultType {
    let start = 0;
    let result: ResultType = initialValue;

    // Iterate over each element as the right boundary of the window
    for (let end = 0; end < arr.length; end++) {
        // Adjust the window by adding the element at the 'end'
        windowAdjust(arr[end]);

        // Check if the condition is met
        while (conditionViolated()) {
            // Shrink the window by moving 'start' pointer
            windowShrink(arr[start]);
            start++;
        }

        // Compute result based on the current window
        result = computeResult();
    }

    return result;
}
```

This is a **generic sliding window algorithm**, where:
- `windowAdjust`: Expands the window by adding the current element.
- `windowShrink`: Shrinks the window if the condition is violated.
- `conditionViolated`: Determines when to shrink the window.
- `computeResult`: Computes the result during the sliding process (e.g., max sum, count, etc.).

### Conclusion:
- What I presented earlier were specific **problem-solving applications** of the sliding window technique.
- The **algorithms** within each example involve adjusting the window dynamically (either fixed size or variable size) and computing the desired result (sum, maximum, count, etc.).

If you want a more specific focus on the **general algorithms** or patterns involved, the abstract version above shows the common approach used in sliding window techniques across many problems.




# Algos

The sliding window technique is an efficient way to solve problems that involve arrays or sequences, especially when you're working with contiguous subarrays or subsequences. Here are various algorithms and patterns using the sliding window technique:

### 1. **Fixed-size Sliding Window**
This is the most basic type of sliding window, where the window has a fixed size, and you slide it over the array from left to right.

**Problem:** Find the maximum sum of a subarray of size `k`.
```typescript
function maxSumSubarray(arr: number[], k: number): number {
    let maxSum = 0, windowSum = 0;
    
    // Calculate the sum of the first 'k' elements.
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    maxSum = windowSum;

    // Slide the window from left to right, adjusting the window sum.
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

### 2. **Variable-size Sliding Window**
In this variation, the size of the window varies based on a condition, such as a target sum, a unique number of characters, etc.

**Problem:** Find the smallest subarray with a sum greater than or equal to a target value.
```typescript
function minSubArrayLen(target: number, arr: number[]): number {
    let start = 0, sum = 0, minLen = Infinity;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum >= target) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= arr[start++];
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
```

### 3. **Sliding Window with Two Pointers**
Often, you’ll use two pointers to dynamically adjust the window size as you slide across the array.

**Problem:** Find the longest substring with at most `k` distinct characters.
```typescript
function longestSubstringKDistinct(s: string, k: number): number {
    let start = 0, maxLength = 0;
    const charCount = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        charCount.set(char, (charCount.get(char) || 0) + 1);

        // Shrink the window if the number of distinct characters exceeds 'k'.
        while (charCount.size > k) {
            const leftChar = s[start];
            charCount.set(leftChar, charCount.get(leftChar) - 1);

            if (charCount.get(leftChar) === 0) {
                charCount.delete(leftChar);
            }

            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
```

### 4. **Maximum/Minimum in Every Sliding Window of Size `k`**
This algorithm uses a deque (double-ended queue) to find the maximum (or minimum) in every subarray of size `k`.

**Problem:** Find the maximum in each subarray of size `k`.
```typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove elements outside the current window.
        if (deque.length > 0 && deque[0] === i - k) {
            deque.shift();
        }

        // Remove elements smaller than the current element from the deque.
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // Append the maximum element of the current window to the result.
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
```

### 5. **Sliding Window for Longest Substring without Repeating Characters**
This technique is useful for problems involving unique elements within a window.

**Problem:** Find the length of the longest substring without repeating characters.
```typescript
function lengthOfLongestSubstring(s: string): number {
    let start = 0, maxLength = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap.has(char)) {
            start = Math.max(start, charIndexMap.get(char) + 1);
        }

        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
```

### 6. **Sliding Window with Sum Calculation**
This version helps with problems where you need to calculate the sum of elements within a sliding window of dynamic size.

**Problem:** Find the number of subarrays with a sum equal to `target`.
```typescript
function subarraySum(nums: number[], target: number): number {
    let count = 0, sum = 0;
    const sumMap = new Map<number, number>();
    sumMap.set(0, 1);

    for (let num of nums) {
        sum += num;
        if (sumMap.has(sum - target)) {
            count += sumMap.get(sum - target)!;
        }
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }

    return count;
}
```

### 7. **Sliding Window for Maximum Product**
Sliding window can also be used to calculate products.

**Problem:** Find the subarray with the maximum product.
```typescript
function maxProduct(nums: number[]): number {
    let maxProd = nums[0], currMax = nums[0], currMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const temp = currMax;
        currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i]);
        currMin = Math.min(nums[i], temp * nums[i], currMin * nums[i]);
        maxProd = Math.max(maxProd, currMax);
    }

    return maxProd;
}
```

### 8. **Sliding Window for Longest Subarray with Ones after Replacement**
This variant involves transforming the array by modifying at most a limited number of elements.

**Problem:** Find the longest contiguous subarray of `1`s after replacing at most `k` `0`s.
```typescript
function longestOnes(nums: number[], k: number): number {
    let start = 0, maxLen = 0, zeros = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) zeros++;

        while (zeros > k) {
            if (nums[start] === 0) zeros--;
            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}
```

### Conclusion
These are some of the most common sliding window algorithms. Depending on the problem constraints, the window can either be fixed or dynamically expanded/shrunk using pointers, maps, or deques to efficiently solve problems that would otherwise require brute-force solutions.