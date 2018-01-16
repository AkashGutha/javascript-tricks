
// cloning object using spread operator 
let human = {
    name: "Akash",
    sex: "male"
}
let humanReplica = { ...human }; // not by reference

// spread laso works on strings
console.log(..."akash");
// result -> a k a s h (as seperate chars)

// extending arrays
let chars = ["a", "k", "a"]
chars = [...chars, "s", "h"];
// result -> [ 'a', 'k', 'a', 's', 'h' ]

