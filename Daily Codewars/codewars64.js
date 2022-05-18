// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution 1:

const grow = (x) => x.reduce((arr, n) => arr * n);

// Solution 2:

function grow(x){
    return x.reduce((arr, n) => arr * n);
  }