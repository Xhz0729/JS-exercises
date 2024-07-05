// Hello, obj
// Write the code, one line for each action:

// Create an empty object user.
let user = new Object();

// Add the property name with the value John.
user.name = 'John';
// Add the property surname with the value Smith.
user.surname = 'Smith';
// Change the value of the name to Pete.
user.name = 'Pete'
// Remove the property name from the object.
delete user.name;

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//Sum object properties
// We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
function sum(obj) {
    let sum = 0;
    for (key in obj) {
        sum += obj[key];
    }
    return sum;
}
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
console.log(sum(salaries)); //390

// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// For instance:
// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu); 
console.log(menu);
// menu = {
    //   width: 400,
    //   height: 600,
    //   title: "My menu"
    // };