const accountId = 14453
let accountEmail = "kailash@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity = "Delhi"

// accountId = 2     not allowed
accountEmail = "kailash1@gmail.com"
accountPassword = "12121"
accountCity ="Rohtak"

/*
Prefer not to use var
because of issue in block scope and functional scope.

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])