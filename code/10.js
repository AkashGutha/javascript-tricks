
// == is not equal to ===

// == will convert one of the operator 
// into the other's type. in this case '4'
// is converted to type of Number before 
// comparision. Hence equal to 4.
4 == '4'  // true

// === is strict and takes types into account.
4 === '4' // false