// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Solution 1:

function fakeBin(x){
    return x.split('').map((num) => num > 4 ? 1 : 0).join('');
  }

// Solution 2:

function fakeBin(x){
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }