// Abbreviate a Two Word name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Solution 1:

function abbrevName(name){

    // code away
  return name.split(" ").map((part) => part[0].toUpperCase()).join(".");
}

// Solution 2: 

const abbrevName = (name) => name.split(" ").map((part) => part[0].toUpperCase()).join(".");
