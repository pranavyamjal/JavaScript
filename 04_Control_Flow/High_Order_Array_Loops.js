// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (const num of arr)
    {
        console.log(num)
    }

const greetings = "Hello World"
for(const greet of greetings)
    {
        console.log(`Each char is ${greet}`)
    }

// Maps
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
*/

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")

console.log(map)

for(const [key, value] of map )
    {
        console.log(key, ':-', value)
    }


const myObject = 
{
    'game1': 'NFS',
    'game2': 'Fifa',
}

for(const [key, value] of myObject)
{
    console.log(key, ':-', value)    // Output - not iterable
}


const myObject1 = 
{
    js: 'JavaScript',
    py: 'Python',
    java: 'Java',
    c: 'C',
}

for(const key in myObject)
    {
        console.log(`${key} shortcut is for ${myObject[key]}`)
    }



const programming = ["js", "py", "java", "c"]

for(const key in programming)
    {
        console.log(programming[key])
    }


    const map1 = new Map()
    map.set('IN', "India")
    map.set('US', "United States")
    map.set('UK', "United Kingdom")

    for(const key in map)
        {
            console.log(key)
        }