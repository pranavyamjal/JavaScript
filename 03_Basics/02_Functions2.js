function calculateCartPrice(...num1)
{
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // Output: [200, 400, 500, 2000]


function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // Output: [500, 2000]


const user = 
{
    username : "Pranav",
    price : 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject
({
    username: "Pranav", 
    price: 199
})

const myNewArray = [200, 400, 500, 800]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 500, 800]))
