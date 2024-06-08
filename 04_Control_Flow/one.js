const temperature = 41

if(temperature === 40)
{
    console.log("Less than 40")
}

else
{
    console.log("Temperature is greater than 50")
}

console.log("Execute")

// <, >, <=, >=, ==, ===, !=, !==

const score = 200

if(score >= 100)
{
    let power = "fly"
    console.log(`User Power: ${power}`)
}

console.log(`User Power: ${power}`)  // ReferenceError: power is not defined (Blocked Scope)

// Avoid below code(28)
if (balance > 500) console.log("Test"), console.log("Test2")


if (balance < 500)
    {
       console.log("Less than 500")   
    }

    else if(balance < 750)
        {
            console.log("Less than 750")
        }
    else if(balance < 900)
        {
            console.log("Less than 900")
        }
else
{
    console.log("Less than 1200")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromFacebook = false

if(userLoggedIn && debitCard && 2==3)
    {
        console.log("Allow to buy my course")
    }

if(loggedInFromGoogle || loggedInFromFacebook)
    {
        console.log("User logged in from Google or Facebook")   
    }

