
const max=10, min=5;

// Random number in the range (min - max).
const num = Math.floor(
    // multiplying the random number to 
    // fit it into the range of 0 -> (max - min) 
    // (max - min) is the max-range
    Math.random() * (max - min)
) + min;
// min is added to  adjust the range to start
// from 5
console.log(num)

// result -> any num b/w 5-10