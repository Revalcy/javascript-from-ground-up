# Module 3: Coercion & Equality

## 3.1 Type Coercion

Coercion is type conversion. JavaScript does it automatically in certain situations.

### Explicit Coercion

```javascript
// USER controls the conversion - this is explicit

// To String
String(42);          // "42"
String(true);        // "true"
String(null);        // "null"
String(undefined);   // "undefined"

// To Number
Number("42");        // 42
Number("3.14");      // 3.14
Number("");          // 0
Number("hello");     // NaN
Number(true);        // 1
Number(false);       // 0
Number(null);        // 0
Number(undefined);   // NaN

// To Boolean
Boolean(1);          // true
Boolean(0);          // false
Boolean("");         // false
Boolean("hello");    // true
Boolean(null);       // false
Boolean(undefined);  // false
Boolean({});         // true (objects are truthy!)
Boolean([]);         // true (arrays are truthy!)
```

### Implicit Coercion

```javascript
// JavaScript does the conversion automatically

// String concatenation with +
"The answer is " + 42;    // "The answer is 42"
"Count: " + 3 + 2;        // "Count: 32" (left to right!)
"Count: " + (3 + 2);      // "Count: 5"

// Numeric operations
"6" - 1;                  // 5 (string converted to number)
"6" * 2;                  // 12
"6" / 2;                  // 3

// BUT + with strings concatenates
"6" + 1;                  // "61" (number converted to string)

// In conditions (to boolean)
if ("hello") { }          // truthy, runs
if (0) { }                // falsy, doesn't run
if ([]) { }               // truthy (empty array is truthy!)
```

### Examples

```javascript
// Parsing user input
function parseCapacity(input) {
  const capacity = Number(input);

  if (Number.isNaN(capacity)) {
    return { success: false, error: "Invalid number" };
  }

  if (capacity <= 0) {
    return { success: false, error: "Must be positive" };
  }

  return { success: true, value: capacity };
}

parseCapacity("50");    // { success: true, value: 50 }
parseCapacity("fifty"); // { success: false, error: "Invalid number" }

// Building display strings
function formatEvent(event) {
  return event.title + " (Capacity: " + event.capacity + ")";
}

// Modern way with template literals
function formatEventModern(event) {
  return `${event.title} (Capacity: ${event.capacity})`;
}
```

## 3.2 Understanding == vs ===

== allows coercion when types differ. === disallows coercion. That's the ONLY difference.

### The Truth About Equality

```javascript
// Common misconception:
// "== checks value, === checks value AND type"

// Reality:
// Both check value AND type!
// == allows coercion when types differ
// === returns false immediately if types differ

// When types are the same, == and === are IDENTICAL:
42 === 42           // true
42 == 42            // true
"hello" === "hello" // true
"hello" == "hello"  // true

// When types differ:
42 == "42"          // true (string coerced to number)
42 === "42"         // false (different types, no coercion)
```

### The null == undefined Special Case

```javascript
// null == undefined is true!

null === undefined  // false (different types)
null == undefined   // true (special case in the spec)

// This helps check for "no value"
function findParticipant(id) {
  return participants.find(p => p.id === id);
  // Returns undefined if not found
}

const result = findParticipant(999);

// Check for null OR undefined in one comparison
if (result == null) {
  console.log("Not found");
}

// Same as:
if (result === null || result === undefined) {
  console.log("Not found");
}
```

### When to Use == vs ===

```javascript
// Recommendations:

// USE === by default (safer)
if (participant.id === 1) { }
if (event.title === "Workshop") { }

// USE == for null/undefined check (idiomatic)
if (value == null) { }  // Catches both null and undefined

// AVOID these patterns:
if (value == true) { }   // Just use: if (value)
if (value == false) { }  // Just use: if (!value)
if (count == 0) { }      // Risky: "" == 0 is true!

// Be explicit about type conversion
const inputId = "101";
const numericId = Number(inputId);
if (numericId === 101) { }
```

---

[Previous Module: 02_data_structures.md](02_data_structures.md) | [Next Module: 04_scope_hoisting_and_closures.md](04_scope_hoisting_and_closures.md)
