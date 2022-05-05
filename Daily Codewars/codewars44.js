// Convert boolean values to strings 'Yes' or 'No'

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solution 1:

function boolToWord( bool ){
    //...
    if (bool === true){
      return 'Yes';
    } else {
      return 'No';
    }
  }

// Solution 2:

const boolToWord = bool => bool === true ? 'Yes' : 'No';
