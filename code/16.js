// Destructuring is a convenient way of extracting
// multiple values from data stored in (possibly nested)
// objects and Arrays

const person = {
  name: "akash",
  profile: {
    degree: "electronics"
  }
};

const { name, age } = person;

console.log(name, age); // akash, undefined

const {
  profile: { degree }
} = person;

console.log(degree) // electronics
