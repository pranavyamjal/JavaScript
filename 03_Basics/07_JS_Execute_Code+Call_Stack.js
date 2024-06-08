// Theory (Working of js code and call stack)

// Code the below in Browser(Inspect>Console>Sources>Snippets)


function one()
{
    console.log("one")
    // two()
}

function two()
{
    console.log("two")
    // three()
}

function three()
{
    console.log("three")
}

one()
two()
three()
