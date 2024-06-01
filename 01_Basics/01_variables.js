const accountId = 12345
let accountEmail = "py@gmail.com"
var accountPassword = "54321"
accountCity = "Pune"

let accountState;   // undefined

// accountId = 2 // not allowed

/*

Prefer not to use var keyword
because of issue in block scope and function scope

*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
