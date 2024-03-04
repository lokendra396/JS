const accountId  = 15566;
let accountEmail = "abc@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur";
let accountState;


// accountId = 2 (not allowed)
/* prefer not  to use var
because of issue in block scope and functional scope
*/
accountEmail = "pqrs@gmail.com";
accountPassword = "22222";
accountCity = "Dehli";

console.table([accountEmail,accountPassword, accountState, accountId, accountCity]);
