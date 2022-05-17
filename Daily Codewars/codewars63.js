// Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution 1:

const arrayPlusArray = (arr1, arr2) => arr1.reduce((num1, n) => num1 + n) + arr2.reduce((num2, n) => num2 + n);

// Solution 2:

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((num1, n) => num1 + n) + arr2.reduce((num2, n) => num2 + n); 
  }