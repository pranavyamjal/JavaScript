//var c = 30

// Ouputs of scope will differ in node and console log

let a = 300

if(true) // Blocked scope
{
    let a = 10
    const b = 20
    console.log("INNER: ",a)
}

console.log("OUTER: ",a)

