const uncleanList = ["akash", null, "John", undefined, "Radhika", "Seshu"]
const cleanList = uncleanList.filter(Boolean)
console.log(cleanList);
// result
[ 'akash', 'John', 'Radhika', 'Seshu' ]