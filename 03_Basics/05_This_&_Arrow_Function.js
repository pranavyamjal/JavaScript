const user = {
    username: "Pranav",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`Welcome ${this.username} and price is ${this.price}`)
    }
}

// this refers to the current object(context) 

user.welcomeMessage()
user.username = "Yamjal"
user.welcomeMessage()

console.log(this)

function chai()
{   let username = "Pranav"        // this is a local variable
    console.log(this.username)     // output is undefined
}

const chai = function () 
{
    let username = "Pranav"
    console.log(this.username)
}

const chai = () =>
    {
        let username = "Pranav"
        console.log(this)
    }

const addTwo = (num1, num2) =>
    {
        return num1 + num2
    }

const addtwo1 = (num1, num2) => num1 + num2

const addtow0 = (num1, num2) => (num1 + num2)

const addTwo0 = (num1, num2) => ({username: "Pranav"})

console.log(addTwo(5, 7))

const myArray = [2, 4, 5, 7, 8]

myArray.forEach()
