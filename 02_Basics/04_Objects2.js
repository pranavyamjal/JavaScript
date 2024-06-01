// Const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Pranav"
tinderUser.isLoggedIn = true

console.log(tinderUser)

const regularUser = {
    email: "pranav@gmail",
    fullname: {
        username: 
                    {
        firstname: "Pranav",
        lastname: "Yamjal"
    }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)
//const obj3 = {obj1, obj2}

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = 
[
    {
    id: 1,
    email: "pranav@gmail"
    },

    {
        id: 2,
        email: "Om@gmail"
    },

    {
        id: 3,
        email: "sai@gmail"
    },
]

users[1].email
console(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))