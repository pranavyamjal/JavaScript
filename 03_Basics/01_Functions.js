function sayMyName()
{
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}

// sayMyName()

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2)
{
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(10, 20)

console.log("Result: ", result)

function loginUserMessage(username = "OM")
{
    if(!username)
        {
            console.log("Please enter a username");
            return
        }

    return `Welcome ${username}`
}

// console.log(loginUserMessage("Pranav"))
console.log(loginUserMessage())

