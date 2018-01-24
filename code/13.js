function write( message ){
    console.log("hello world! " + message);
}

// this is wrong and doesn't work
write"this is my message"
// throws an error

// this is wierd and works like a charm
write`this is my message`
// result -> hello world! this is my message

// they are also called tag functions
