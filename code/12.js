
// simple array
const names = ["akash", "radhika", "seshu"]
// array to csv conversion
let csv = names.join(",")
//csv -> akash,radhika,seshu

// ayou can use any delimiter
csv = names.join("|")
// csv -> akash|radhika|seshu

let realodedNames = csv.split("|")
// realodedNames -> [ 'akash', 'radhika', 'seshu' ]