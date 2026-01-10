# Module 1: Foundations & Types

## 1.1 The Specification: TC39 & ECMAScript

Have you ever wondered who decides what JavaScript features exist, or why certain things work the way they do?

```javascript
// TC39 = Technical Committee 39 of Ecma International
// They maintain the ECMAScript specification

// The specification is the "source of truth"
// When in doubt, read the spec: https://tc39.es/ecma262/

// ECMAScript = The SPECIFICATION (the rulebook)
// JavaScript = An IMPLEMENTATION of that specification

// Think of it like:
// - ECMAScript = Recipe for chocolate cake
// - JavaScript (V8, SpiderMonkey, JavaScriptCore) = Actual cakes made from the recipe
```

### What's in ECMAScript vs What's Not

```javascript
// What's IN ECMAScript:
// - Language syntax (how you write code)
// - Types (string, number, boolean, etc.)
// - Built-in objects (Array, Object, Promise, etc.)

// What's NOT in ECMAScript (but in JavaScript environments):
// - DOM APIs (document.getElementById) - Browser only
// - fetch() - Browser & modern Node.js
// - console.log() - Runtime-specific
// - Node.js modules (fs, http) - Node.js only
```

### The TC39 Process: How Features Are Born

```javascript
// Stage 0: Strawperson - "Hey, what if we had this?"
// Stage 1: Proposal - "Let's formally explore this idea"
// Stage 2: Draft - "Here's the spec text"
// Stage 2.7: Testing - "Let's write Test262 tests"
// Stage 3: Candidate - "Implementations, please try this"
// Stage 4: Finished - "It's in the next ECMAScript edition!"

// This process ensures features are well-designed before becoming official
```

---

## 1.2 Values and Primitive Types

In JavaScript, variables don't have types - VALUES do.

Every piece of data in JavaScript is a value. Before we learn how to store values in variables, let's understand what kinds of values exist.

### The Seven Primitive Types

```javascript
// ECMAScript defines these primitive types:

// 1. undefined - absence of a value
//    When something doesn't have a value yet, it's undefined

// 2. null - intentional absence of a value
//    When you deliberately want to say "nothing here"

// 3. boolean - true or false
//    Used for yes/no decisions

// 4. number - numeric values
//    Includes integers (42), decimals (3.14), Infinity, and NaN

// 5. bigint - very large integers
//    For numbers bigger than 9007199254740991

// 6. string - text
//    Sequences of characters like "Hello, World!"

// 7. symbol - unique identifiers
//    Advanced feature for creating unique property keys
```

### The typeof Operator

To check what type a value is, we use `typeof`:

```javascript
// typeof tells us the type of a value

typeof undefined    // "undefined"
typeof true         // "boolean"
typeof 42           // "number"
typeof "hello"      // "string"
typeof 9007199254740993n  // "bigint"
typeof Symbol()     // "symbol"

// The famous quirk:
typeof null         // "object" (this is a historical bug!)

// For objects and arrays:
typeof {}           // "object"
typeof []           // "object" (arrays are objects in JS!)
typeof function(){} // "function"
```

### Special Numeric Values

```javascript
// NaN - "Not a Number" (but it's still type number!)
typeof NaN          // "number"

// NaN appears when math goes wrong:
0 / 0               // NaN
Number("hello")     // NaN

// The weird part: NaN doesn't equal itself!
NaN === NaN         // false

// To check for NaN:
Number.isNaN(NaN)   // true (the correct way)

// Infinity
1 / 0               // Infinity
-1 / 0              // -Infinity

// Negative Zero (yes, it exists!)
-0 === 0            // true (they look equal)
1 / 0               // Infinity
1 / -0              // -Infinity (but behave differently!)
```

---

## 1.3 Variables: let, const, var

Variables are like labeled boxes where you store values.

Now that we know what values are, let's learn how to store them so we can use them later.

### Declaring Variables

```javascript
// There are three ways to declare variables in JavaScript:

// 1. let - for values that will change
let score = 0;
score = 10;        // OK - we can reassign
score = score + 5; // OK - now it's 15

// 2. const - for values that won't change
const maxScore = 100;
// maxScore = 200;  // ERROR! Cannot reassign a const

// 3. var - the old way (still used, but avoid!!!)
var oldStyle = "legacy";
```

### let vs const: Which to Use?

```javascript
// Use const by default - it prevents accidental reassignment
const eventName = "JavaScript Workshop";
const capacity = 50;

// Use let when the value needs to change
let registrationCount = 0;
registrationCount = 1;  // Someone registered!
registrationCount = 2;  // Another person!

// Common pattern: counters need let
let total = 0;
total = total + 10;
total = total + 20;
// total is now 30
```

### Variable Naming Rules

```javascript
// Valid variable names:
let userName = "Priya";
let user_name = "Marcus";
let $price = 99;
let _private = "hidden";
let camelCase = "preferred style";

// Invalid variable names:
// let 123abc = "nope";     // Can't start with number
// let my-variable = "no";  // No hyphens allowed
// let let = "no";          // Can't use reserved words
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

// Convention: Use camelCase for variables and functions
let firstName = "Priya";
let lastName = "Sharma";
let isRegistered = true;
```

### Understanding undefined

```javascript
// A variable declared but not assigned has the value undefined
let futureEvent;
typeof futureEvent  // "undefined"

// This is different from a variable that doesn't exist at all
// console.log(nonExistent);  // ReferenceError!

// You can check if something is undefined
let status;
if (status === undefined) {
  // The variable exists but has no value yet
}
```

## 1.4 Operators and Expressions

### Arithmetic Operators

```javascript
// Basic math
let sum = 10 + 5;        // 15 (addition)
let difference = 10 - 5; // 5 (subtraction)
let product = 10 * 5;    // 50 (multiplication)
let quotient = 10 / 5;   // 2 (division)
let remainder = 10 % 3;  // 1 (modulo - remainder after division)
let power = 2 ** 3;      // 8 (exponentiation - 2 to the power of 3)

// Increment and decrement
let count = 0;
count++;
console.log(count);  // count is now 1
count++;
console.log(count); // count is now 2
count--;
console.log(count); // count is now 1

// Compound assignment
let score = 100;
score += 10;  // same as: score = score + 10 (now 110)
console.log(score);
score -= 20;  // same as: score = score - 20 (now 90)
console.log(score);
score *= 2;   // same as: score = score * 2 (now 180)
console.log(score);
```

### Comparison Operators

```javascript
// These produce boolean values (true or false)

// Equality
5 === 5      // true (strict equality)
5 === "5"    // false (different types)
5 == "5"     // true (allows type coercion)

// Inequality
5 !== 3      // true
5 != "5"     // false

// Greater/Less than
10 > 5       // true
10 >= 10     // true
5 < 10       // true
5 <= 5       // true

// Comparing strings (alphabetical order)
"apple" < "banana"  // true
"a" < "b"           // true
```

### Logical Operators

```javascript
// AND (&&) - both must be true
true && true    // true
true && false   // false
false && true   // false

// OR (||) - at least one must be true
true || false   // true
false || true   // true
false || false  // false

// NOT (!) - flips the value
!true           // false
!false          // true

// Practical example:
let age = 25;
let hasTicket = true;

// Can enter if 18 or older AND has a ticket
let canEnter = age >= 18 && hasTicket;  // true
```

### String Concatenation

```javascript
// The + operator joins strings
let firstName = "P";
let lastName = "S";
let fullName = firstName + " " + lastName;  // "P S"

// Template literals (modern way - use backticks)
let greeting = `Hello, ${firstName}!`;  // "Hello, P!"

// NOTE: ${...} also allows you to evaluate values!

// Template literals can span multiple lines
let message = `
  Welcome to Global Hack Week!
  Your name: ${fullName}
`;
```

---

## 1.5 Control Flow

"Control flow determines which code runs and when."

### if/else Statements

```javascript
let temperature = 25;

// Simple if
if (temperature > 30) {
  console.log("It's hot outside!");
}

// if/else
if (temperature > 30) {
  console.log("It's hot!");
} else {
  console.log("It's not too hot.");
}

// if/else if/else
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's pleasant.");
} else if (temperature > 10) {
  console.log("It's cool.");
} else {
  console.log("It's cold!");
}
```

### Truthy and Falsy Values

```javascript
// In conditions, values are converted to boolean
// These are "falsy" - they become false:
// - false
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN

// Everything else is "truthy"

let userName = "";

if (userName) {
  console.log("Has a name");
} else {
  console.log("No name provided");  // This runs
}

let count = 0;

if (count) {
  console.log("Has count");
} else {
  console.log("Count is zero or missing");  // This runs
}
```

### Loops

```javascript
// while loop - runs while condition is true
let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast off!");

// for loop - when you know how many times
for (let i = 1; i <= 5; i++) {
  console.log("Iteration " + i);
}

// Practical example: Counting from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);  // 55

// break - exit the loop early
for (let i = 1; i <= 100; i++) {
  if (i === 5) {
    break;  // Stop when we reach 5
  }
  console.log(i);
}
// Prints: 1, 2, 3, 4

// continue - skip to next iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;  // Skip 3
  }
  console.log(i);
}
// Prints: 1, 2, 4, 5
```

## 1.6 Functions

"Functions are reusable blocks of code that perform a specific task."

### Function Declarations

```javascript
// Declaring a function
function greet() {
  console.log("Hello, World!");
}

// Calling (invoking) a function
greet();  // Prints: Hello, World!

// Functions with parameters
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

greetPerson("P");   // Hello, P!
greetPerson("M");  // Hello, M!
greetPerson(2); // Hello, 2! (coercion to string and then concatenation)
greetPerson(); // Hello, undefined! (absence of value, so name variable undefined)

// Multiple parameters
function add(a, b) {
  console.log(a + b);
}

add(5, 3);  // 8
add(10, 20);  // 30
```

### Return Values

```javascript
// Functions can return values
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);  // 20

// Practical example: Calculate registration fee
function calculateFee(basePrice, isEarlyBird) {
  if (isEarlyBird) {
    return basePrice * 0.8;  // 20% discount
  }
  return basePrice;
}

let fee1 = calculateFee(100, true);   // 80
let fee2 = calculateFee(100, false);  // 100
```

### Function Expressions and Arrow Functions

```javascript
// Function expression - store function in a variable
const square = function(n) {
  return n * n;
};

console.log(square(4));  // 16

// Arrow function - shorter syntax (ES6+)
const cube = (n) => {
  return n * n * n;
};

console.log(cube(3));  // 27

// Even shorter for single expressions
const double = n => n * 2;

console.log(double(5));  // 10

// Arrow function with multiple parameters
const addNumbers = (a, b) => a + b;

console.log(addNumbers(3, 4));  // 7

// Difference b/w regular function and arrow function

const events = {
    owner: "GHW",
    normalFunc: function() { // function expression
        console.log(this.owner) // this refers to the events object, key-value pair
    },
    arrowFunc: () => {
        console.log(this.owner)
    }
};

events.normalFunc() // "GHW"
events.arrowFunc() // undefined
```

## References

- [ECMA International Committees](https://ecma-international.org/technical-committees/)
- [TC39 ECMAScript Specification](https://tc39.es/ecma262/)
- [How to Read ECMAScript Spec](https://timothygu.me/es-howto/)
- [ES Proposals](https://www.proposals.es/)
- [Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
- [TC39, ECMAScript, and the Future of JavaScript (from 2017)](https://ponyfoo.com/articles/tc39-ecmascript-proposals-future-of-javascript)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Info](https://javascript.info/)

---

[Previous Module: README.md](README.md) |
[Next Module: 02_data_structures.md](02_data_structures.md)
