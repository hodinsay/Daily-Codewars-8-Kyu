// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Solution 1:

function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
  }

// Solution 2:

function removeExclamationMarks(s) {
    return s.split('!').join('');
  }

// Solution 3:

const removeExclamationMarks = (s) => s.split('').filter((letter) => letter !== '!').join('');
