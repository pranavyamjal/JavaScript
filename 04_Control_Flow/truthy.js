const userEmail = []

if(userEmail)
    {
        console.log("Email sent")
    }

else
    {
        console.log("Email not sent")
    }

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// true, 'false', " ", [], {}, function(){}


if(userEmail.length === 0)
    {
        console.log("Array is empty")
    }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
    {
        console.log("Object is empty")
    }


// Nullish Coalescing Operator (??): Null or Undefined

// let val1;
// val1 = 5 ?? 10              // 5
// val1 = null ?? 10           // 10
// val1 = undefined ?? 10      // 10
// val1 = 0 ?? 10              // 0
// val1 = "" ?? 10             // 10
// val1 = false ?? 10          // 10
// val1 = NaN ?? 10            // 10
// val1 = 0n ?? 10             // 10
// val1 = function() ?? 10     // 10
// val1 = [] ?? 10             // 10

console.log(val1)


// Ternary Operator: Conditional Expression

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice > 100 ? console.log("More than 100") : console.log("Less than 100")

