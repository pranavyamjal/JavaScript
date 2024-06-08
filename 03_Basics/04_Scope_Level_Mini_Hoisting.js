function one()
{
    const username = "Pranav"

    function two()
    {
        const website = "Youtube"
        console.log(username)
    }

    //console.log(website)

    two()
}

one()

if(true)
{
    const username = "Pranav"
    if(username === "Pranav")
        {
            const website = "Youtube"
            console.log(username + website)
        }
        console.log(website) // ERROR
}
console.log(username) // ERROR 



// =============== Interesting ===============

addone(5) // 
function addone(num)  // function declaration
{
    return num + 1
}



addTwo(5) 
const addTwo = function(num)     // function expression
{
    return num + 2
}



