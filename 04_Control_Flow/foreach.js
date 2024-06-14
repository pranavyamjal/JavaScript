const coding = ["js", "ruby", "python"]

coding.forEach(
    function (val)
    {
        console.log(val)
    })

coding.forEach( (item) => console.log(item) )

function printMe(item)
{
    console.log(item)
}

coding.forEach(printMe)


coding.forEach( (item, index) => 
    {console.log(index, item) 
    })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})