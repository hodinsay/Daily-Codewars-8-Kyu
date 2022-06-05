// If you can't sleep, just count sheep!!

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Solution 1:

const countSheep = function (num){
    let result = '';
    
    for (let i = 1; i <= num; i++) {
      result += i.toString() + ' sheep...';
    }
    return result;
  }

// Solution 2:

const countSheep = (num) => [...Array(num).keys()].reduce((res, i) => res + (i + 1) + ' sheep...', '');
