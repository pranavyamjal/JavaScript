// Objects literals

const jsUser = 
{
    name: "Pranav",
    "full name": "Pranav Yamjal",
    age: 21,
    location: "Pune",
    email: "pranav@gmail",
    isLoggedIn : true,
    LastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser."full name") 

//symbols

/*
Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.
*/

const mySym = Symbol("key1")

const JsUser1 = 
{
    name: "Pranav",
    "full name": "Pranav Yamjal",
    [mySym]: "key1",
    age: 21,
    location: "Pune",
    email: "pranav@gmail",
    isLoggedIn : true,
    LastLoginDays : ["Monday", "Saturday"],
}

console.log(typeof JsUser1[mySym])



JsUser.email = "pranav@yamjal"
Object.freeze(JsUser)
JsUser.email = "pranav@gmail.com"
console.log(JsUser)


JsUser.greeting = function()
{
    console.log("Hello")
}

JsUser.greeting2 = function()
{
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())




