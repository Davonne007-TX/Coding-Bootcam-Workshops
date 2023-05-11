//Code Pen Examples for Block 18

// Testing Day 02 - Workshop

/*--------------------/*

/*

    Bacteria Time:

    Define a function, bacteriaTime, that accepts two arguments:

    1. currentNum (number) - number of starting bacteria
    2. targetNum (number) - desired number of bacteria

    Assuming that the number of bacteria doubles every 20 minutes,
    bacteriaTime should return the number of minutes required
    for the number of bacteria to grow from currentNum to a
    number equal to or larger than targetNum.

    You can assume that currentNum will be a positive integer.
    If targetNum is smaller than currentNum, return the string,
    'targetNum must be larger than currentNum'.   

*/

function bacteriaTime (currentNum, targetNum) {
    if (targetNum <= currentNum) {
      return "targetNum must be larger than currentNum";
    }
    
    const double = 20;
    let numBacteria = currentNum;
    let time = 0;
    
    while (numBacteria < targetNum) {
      numBacteria *= 2;
      time += double;
    }
    
    return time;  
  }
