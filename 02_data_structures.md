# Module 2: Data Structures

## 2.1 Objects

Objects are collections of related properties. They let us group data together.

### Creating Objects

```javascript
// An object is a collection of key-value pairs
const participant = {
  id: 1,
  name: "Priya Sharma",
  country: "IN",
  isActive: true
};

// Keys are called "properties"
// Values can be any type
```

### Accessing Properties

```javascript
const event = {
  id: 101,
  title: "JavaScript Workshop",
  capacity: 50,
  "data-id": 1234
};

// Dot notation (preferred when you know the property name)
console.log(event.title);     // "JavaScript Workshop"
console.log(event.capacity);  // 50

// Bracket notation (when property name is dynamic or has special characters)
console.log(event["data-id"]);  // 1234

let propertyName = "capacity";
console.log(event[propertyName]);  // 50
```

### Modifying Objects

```javascript
const participant = {
  id: 1,
  name: "MLH"
};

// Change a property
participant.name = "GHW";

// Add a new property
participant.country = "UK";
participant.isActive = true;

console.log(participant);
// { id: 1, name: "GHW", country: "UK", isActive: true }

// Delete a property
delete participant.isActive;

console.log(participant);
// { id: 1, name: "GHW", country: "UK" }

// Note: Even with const, you can modify object contents
// const only prevents reassigning the variable itself
// participant = {};  // ERROR - can't reassign
participant.name = "New Name";  // OK - modifying contents

// NOTE: deep copy / deep clone of objects
const a = {}
const b = a; // this references the same object in same memory location
// so modifying b will also modify a
b.id = "123"
b // {id: '123'}
a // {id: '123'}
a.name = "GHW"
a // {id: '123', name: 'GHW'}
b // {id: '123', name: 'GHW'}
const c = window.structuredClone(a) // allows to create a deep clone of object, so they end up in different memory locations - https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
c // {id: '123', name: 'GHW'}
a.email = "abc@example.com"
a // {id: '123', name: 'GHW', email: 'abc@example.com'}
c // {id: '123', name: 'GHW'}
c.age = 45
c // {id: '123', name: 'GHW', age: 45}
a // {id: '123', name: 'GHW', email: 'abc@example.com'}
b // {id: '123', name: 'GHW', email: 'abc@example.com'}
```

### Objects with Methods

```javascript
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6

// Shorthand method syntax (ES6+)
const calc = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};
```

### Nested Objects

```javascript
const event = {
  id: 101,
  title: "JavaScript Workshop",
  host: {
    id: 1,
    name: "PS",
    contact: {
      email: "p@example.com"
    }
  }
};

// Accessing nested properties
console.log(event.host.name);           // "PS"
console.log(event.host.contact.email);  // "p@example.com"

const event2 = {
  id: 101,
  title: "JavaScript Workshop",
  "host-1": {
    id: 1,
    name: "PS",
    contact: {
      email: "p@example.com"
    }
  }
};

event["host-1"].contact.email // square bracket notation to access keys inside "host-1" obj
```

## 2.2 Arrays

Arrays are ordered lists of values. Use them when order matters.

### Creating Arrays

```javascript
// An array is an ordered list of values
const numbers = [1, 2, 3, 4, 5];
const names = ["GHW", "Marcus", "Fatima"];
const mixed = [1, "hello", true, null];

// Empty array
const empty = [];
```

### Accessing Array Elements

```javascript
const participants = ["GHW", "Marcus", "Fatima", "João", "Emma"];

// Arrays are zero-indexed (first element is at index 0)
console.log(participants[0]);  // "GHW"
console.log(participants[1]);  // "Marcus"
console.log(participants[4]);  // "Emma"

// Last element
console.log(participants[participants.length - 1]);  // "Emma"

// Using .at() for negative indices (ES2022)
console.log(participants.at(-1));  // "Emma" (last element)
console.log(participants.at(-2));  // "João" (second to last)

// Array length
console.log(participants.length);  // 5
```

### Modifying Arrays

```javascript
const events = ["Workshop", "Hackathon"];

// Add to end
events.push("Webinar");
console.log(events);  // ["Workshop", "Hackathon", "Webinar"]

// Remove from end
const removed = events.pop();
console.log(removed);  // "Webinar"
console.log(events);   // ["Workshop", "Hackathon"]

// Add to beginning
events.unshift("Meetup");
console.log(events);  // ["Meetup", "Workshop", "Hackathon"]

// Remove from beginning
const first = events.shift();
console.log(first);   // "Meetup"
console.log(events);  // ["Workshop", "Hackathon"]

// Change an element
events[0] = "New Workshop";
console.log(events);  // ["New Workshop", "Hackathon"]
```

### Iterating Over Arrays

```javascript
const scores = [85, 92, 78, 90, 88];

// for loop (traditional)
for (let i = 0; i < scores.length; i++) {
  console.log("Score " + (i + 1) + ": " + scores[i]);
}

// for...of loop (preferred for values)
for (const score of scores) {
  console.log(score);
}

// forEach method
scores.forEach(function(score, index) {
  console.log("Score " + (index + 1) + ": " + score);
});

// forEach with arrow function
scores.forEach((score, index) => {
  console.log(`Score ${index + 1}: ${score}`);
});
```

### Arrays of Objects

```javascript
// This is very common - combining arrays and objects
const participants = [
  { id: 1, name: "PS", country: "IN" },
  { id: 2, name: "Marcus Chen", country: "US" },
  { id: 3, name: "Fatima Al-Hassan", country: "IT" }
];

// Access object properties in array
console.log(participants[0].name);  // "PS"
console.log(participants[1].country);  // "US"

// Loop through array of objects
for (const participant of participants) {
  console.log(participant.name + " from " + participant.country);
}
```

---

## 2.3 Array Methods

Array methods are how you think in JavaScript.

### The GHW Event System Dataset

```javascript
// PARTICIPANTS - Our hackers
const participants = [
  { id: 1, name: "PS", country: "IN", joinedAt: "2024-01-15" },
  { id: 2, name: "Marcus Chen", country: "US", joinedAt: "2024-01-16" },
  { id: 3, name: "Fatima Al-Hassan", country: "IT", joinedAt: "2024-01-17" },
  { id: 4, name: "João Silva", country: "UK", joinedAt: "2024-01-18" },
  { id: 5, name: "Emma Watson", country: "BR", joinedAt: "2024-01-19" }
];

// EVENTS - What hackers can attend
const events = [
  { id: 101, title: "Intro to JavaScript", hostId: 1, date: "2024-02-01", capacity: 50 },
  { id: 102, title: "Building APIs with Node", hostId: 2, date: "2024-02-02", capacity: 30 },
  { id: 103, title: "React Fundamentals", hostId: 1, date: "2024-02-03", capacity: 40 },
  { id: 104, title: "TypeScript Deep Dive", hostId: 3, date: "2024-02-04", capacity: 25 }
];

// REGISTRATIONS - Who signed up for what
const registrations = [
  { odId: 1, eventId: 101, timestamp: 1706745600000 },
  { odId: 2, eventId: 101, timestamp: 1706745700000 },
  { odId: 3, eventId: 102, timestamp: 1706832000000 },
  { odId: 4, eventId: 101, timestamp: 1706745800000 },
  { odId: 5, eventId: 103, timestamp: 1706918400000 },
  { odId: 1, eventId: 104, timestamp: 1707004800000 },
  { odId: 2, eventId: 103, timestamp: 1706918500000 }
];
```

### map() - Transform Every Element

```javascript
// map() creates a NEW array by transforming each element

// Get all event titles
const titles = events.map(function(event) {
  return event.title;
});
console.log(titles);
// ["Intro to JavaScript", "Building APIs with Node", "React Fundamentals", "TypeScript Deep Dive"]

// Shorter with arrow function
const eventTitles = events.map(event => event.title);

// Transform to a different shape
const eventSummaries = events.map(event => {
  return {
    id: event.id,
    display: event.title + " (" + event.date + ")"
  };
});

// IMPORTANT: map always returns a new array of the same length
```

### filter() - Select Elements That Match

```javascript
// filter() returns elements that pass a test

// Get events with capacity >= 40
const largeEvents = events.filter(event => event.capacity >= 40);
console.log(largeEvents);
// [{ id: 101, title: "Intro to JavaScript", ... }, { id: 103, title: "React Fundamentals", ... }]

// Get participants from the US
const usParticipants = participants.filter(p => p.country === "US");

// Get registrations for event 101
const event101Registrations = registrations.filter(r => r.eventId === 101);
console.log(event101Registrations.length);  // 3
```

### find() - Get First Match

```javascript
// find() returns the FIRST element that passes the test (or undefined)

// Find the JavaScript event
const jsEvent = events.find(event => event.title.includes("JavaScript"));
console.log(jsEvent);
// { id: 101, title: "Intro to JavaScript", hostId: 1, date: "2024-02-01", capacity: 50 }

// Find participant by ID
const participant = participants.find(p => p.id === 3);
console.log(participant.name);  // "Fatima Al-Hassan"

// find vs filter:
// find() returns ONE object (or undefined)
// filter() returns an ARRAY (possibly empty)

const found = events.find(e => e.id === 101);     // { id: 101, ... }
const filtered = events.filter(e => e.id === 101); // [{ id: 101, ... }]
```

### some() and every() - Testing Arrays

```javascript
// some() - returns true if ANY element passes the test
const hasLargeEvent = events.some(event => event.capacity > 40);
console.log(hasLargeEvent);  // true

// every() - returns true if ALL elements pass the test
const allHaveCapacity = events.every(event => event.capacity > 0);
console.log(allHaveCapacity);  // true

const allLarge = events.every(event => event.capacity > 40);
console.log(allLarge);  // false
```

### reduce() - Combine Into Single Value

```javascript
// reduce() transforms an array into a single value

// Sum all capacities
const totalCapacity = events.reduce((sum, event) => {
  return sum + event.capacity;
}, 0);  // 0 is the starting value
console.log(totalCapacity);  // 145

// Count registrations per event
const registrationsPerEvent = registrations.reduce((counts, reg) => {
  const eventId = reg.eventId;
  if (counts[eventId]) {
    counts[eventId]++;
  } else {
    counts[eventId] = 1;
  }
  return counts;
}, {});
console.log(registrationsPerEvent);
// { 101: 3, 102: 1, 103: 2, 104: 1 }
```

### Chaining Methods

```javascript

// Get names of participants registered for event 101
const event101ParticipantNames = registrations
  .filter(r => r.eventId === 101)              // Get registrations for event 101
  .map(r => r.odId)                            // Get participant IDs
  .map(id => participants.find(p => p.id === id))  // Get participant objects
  .map(p => p.name);                           // Get names

console.log(event101ParticipantNames);
// ["PS", "Marcus Chen", "João Silva"]
```

---

[Previous Module: 01_foundations_and_types.md](01_foundations_and_types.md) | [Next Module: 03_coercion_and_equality.md](03_coercion_and_equality.md)
