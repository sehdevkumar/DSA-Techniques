function findMaxInSubArray(k, arr) {
  debugger
  const deque = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // Remove elements outside the current window.
    if (deque.length > 0 && deque[0] === i - k) {
      deque.shift();
    }

    // Remove elements smaller than the current element from the deque.
    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
      deque.pop();
    }

    deque.push(i);

    // Append the maximum element of the current window to the result.
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result.join(" ");
}

console.log(findMaxInSubArray(3, [1, 2, 1, 4, 5, 1, 6, 7, 8]));
