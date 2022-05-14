// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution 1:

const find_average = (array) => array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length;

// Solution 2:

function find_average(array) {
    // your code here
    for (let i = 1; i <= array.length; i++) {
      return array.reduce((arr, n) => arr + n) / array.length;
    } if (i = 1){
        return 0;
    }
  }