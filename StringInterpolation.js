

/*  String Concatenation:
String concatenation is the process of joining two or more strings together to create a new string. This is typically done using a concatenation operator or function.

Example of String Concatenation: */

const fName = "Harsh";
const lName = "Yaduvanshi";
let flName = fName + " " + lName;

console.log(flName); 


/*

String Interpolation:
String interpolation is a technique that allows you to embed expressions or variables directly within a string, making it more readable and easier to work with. The values of the expressions or variables are automatically inserted into the string.
*/

// Example of String Interpolation:


const firstName = "aagman";
const lastName = "Mehto";
const fullName = `${firstName} ${lastName}`;

console.log(fullName); 

// In this example, the ${} syntax is used to interpolate the values of the firstName and lastName variables directly within the string, creating the fullName.

// String interpolation is often considered more modern and convenient, especially when dealing with complex string formatting, as it allows you to embed variables and expressions within a string template without the need for explicit concatenation operators.