for (let i = 0; i < arr.length - windowSize + 1; i++) {
  for (let j = 0; j < windowSize; j++) {}
}

for (let i = 0; i < windowSize; i++) {}

for (let i = windowSize; i < arr.length; i++) {}

let arr = [3, 2, -4, 6, 1];

function burteForce(arr, windowSize) {
  if (arr.length < windowSize) {
    return null;
  }
  let maxSum = 0;
  for (let i = 0; i < arr.length - windowSize + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < windowSize; j++) {
      tempSum += arr[i + j];
    }
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function slidingWindow(arr, windowSize) {
  if (arr.length < windowSize) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < windowSize; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = windowSize; i < arr.length; i++) {
    tempSum = tempSum - arr[i - windowSize] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(slidingWindow([3, 2, -4, 6, 1], 3));
