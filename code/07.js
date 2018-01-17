// function that throws an error when parameter is not defined.
const required = function(param){		
    throw new Error(`
        ${param} is not defined
    `)
}

// a Divison using the required function to make 
// both of it's parameters mandatory or requried.
const Division = function(
    a=required("a"),
    b=required("b")
){
    return a/b
}

Division(10)

// throws -> Error: b is not defined