// PARTICIPANTS - Our hackers
// Each participant has a unique id, their full name, country code (ISO 3166-1 alpha-2),
// and the date they joined the platform
const participants = [
  { id: 1, name: "Priya Sharma", country: "IN", joinedAt: "2025-01-15" },
  { id: 2, name: "Marcus Chen", country: "US", joinedAt: "2025-01-16" },
  { id: 3, name: "Fatima Al-Hassan", country: "IT", joinedAt: "2025-01-17" },
  { id: 4, name: "João Silva", country: "BR", joinedAt: "2025-01-18" },
  { id: 5, name: "Emma Williams", country: "UK", joinedAt: "2025-01-19" },
  { id: 6, name: "Alex Kim", country: "US", joinedAt: "2025-02-09" },
];

// EVENTS - What hackers can attend
// Each event has a unique id, a title describing the topic, hostId referencing
// the participant who hosts it, the date of the event, and maximum capacity
const events = [
  { id: 101, title: "Intro to JavaScript", hostId: 1, date: "2025-03-01", capacity: 50 },
  { id: 102, title: "Building APIs with Node", hostId: 2, date: "2025-03-02", capacity: 30 },
  { id: 103, title: "React Fundamentals", hostId: 1, date: "2025-03-03", capacity: 40 },
  { id: 104, title: "TypeScript Deep Dive", hostId: 3, date: "2025-03-04", capacity: 25 },
];

// REGISTRATIONS - Who signed up for what
// Each registration links a userId to an eventId, with a Unix timestamp (milliseconds)
// recording when they registered. A user can register for multiple events.
const registrations = [
  { userId: 1, eventId: 101, timestamp: 1740000000000 }, // Feb 19, 2025
  { userId: 2, eventId: 101, timestamp: 1740000100000 }, // Feb 19, 2025
  { userId: 3, eventId: 102, timestamp: 1740086400000 }, // Feb 20, 2025
  { userId: 4, eventId: 101, timestamp: 1740000200000 }, // Feb 19, 2025
  { userId: 5, eventId: 103, timestamp: 1740172800000 }, // Feb 21, 2025
  { userId: 1, eventId: 104, timestamp: 1740259200000 }, // Feb 22, 2025
  { userId: 2, eventId: 103, timestamp: 1740172900000 }, // Feb 21, 2025
  { userId: 6, eventId: 102, timestamp: 1740300000000 }, // Feb 23, 2025
  { userId: 6, eventId: 104, timestamp: 1740305000000 }, // Feb 23, 2025
];


// TASKS
// Try to solve each task before looking at the solutions below.

// TASK 1: Get Event Titles with map()
// Use map() with a traditional function to extract all event titles into an array.
// Then do the same thing using arrow function syntax.
// HINT: map() transforms each element - return just the title property.

// TASK 2: Transform Events into Display Strings
// Use map() to create an array of objects with id and a display string.
// The display string should be formatted as: "Title (Date)"
// HINT: Return a new object with id and display properties.

// TASK 3: Filter Large Events
// Use filter() to find only events with capacity of 40 or more.
// HINT: filter() keeps elements where the callback returns true.

// TASK 4: Filter Participants by Country
// Use filter() to find all participants from the US.
// HINT: Check if country equals "US".

// TASK 5: Count Registrations for an Event
// Use filter() to get all registrations for event 101, then get the count.
// HINT: Filter by eventId, then use .length on the result.

// TASK 6: Find a Single Event with find()
// Use find() to locate the event that includes "JavaScript" in its title.
// HINT: find() returns the first match, use .includes() to check the title.

// TASK 7: Find Participant by ID
// Use find() to get the participant with id 3, then log their name.
// HINT: find() returns one object or undefined.

// TASK 8: Understand find() vs filter()
// Demonstrate the difference between find() and filter() when searching for event 101.
// HINT: find() returns ONE object, filter() returns an ARRAY.

// TASK 9: Check with some()
// Use some() to check if ANY event has capacity greater than 40.
// HINT: some() returns true if at least one element passes the test.

// TASK 10: Check with every()
// Use every() to check if ALL events have capacity greater than 0.
// Then check if ALL events have capacity greater than 40.
// HINT: every() returns true only if all elements pass the test.

// TASK 11: Sum with reduce()
// Use reduce() to calculate the total capacity across all events.
// HINT: Start with 0 and add each event's capacity to the accumulator.

// TASK 12: Count with reduce()
// Use reduce() to count how many registrations each event has.
// Return an object where keys are event IDs and values are counts.
// HINT: Start with an empty object {} and increment counts.

// TASK 13: Chain Methods to Get Participant Names
// Get the names of all participants registered for event 101.
// Chain filter(), map(), and find() together.
// HINT: Filter registrations, map to userIds, map to participants, map to names.

// TASK 14: Closures & Private Variables
// Create a registration manager that tracks how many registrations have been made.
// The count should be private (not accessible from outside).
// Provide methods to: register a user, get the current count, and reset the count.
// HINT: Use a function that returns an object with methods. The methods can access
// variables from the outer function's scope because of closures.

// TASK 15: The 'this' Keyword
// Create an object with a method that returns information about who is hosting events.
// The method should:
// - Accept a hostId parameter
// - Filter events by that hostId
// - Return an object with the organizer name (using 'this'), event count, and event titles
// HINT: Use 'this.name' to access the organizer's name property from the object.

// TASK 16: Reduce for Aggregation
// Use reduce to create a report object where:
// - Keys are event titles
// - Values are objects containing: capacity, registered count, spotsLeft, and fullPercentage
// HINT: Start with an empty object {} and for each event, calculate how many people
// registered and the percentage full.

// TASK 17: Combining Multiple Transformations
// Transform the registrations array into a list of objects with participant names,
// countries, event titles, dates, and registration times (formatted as a date string).
// Each object should have: participantName, participantCountry, eventTitle, eventDate, registrationTime
// HINT: Use map to transform each registration. Find the participant and event for each registration.

// TASK 18: Scope & Private Data
// Create an event tracker that maintains private statistics for each event.
// It should track both views and registrations.
// Provide methods to: track a view, track a registration, get stats for one event,
// and get all stats.
// HINT: Similar to Task 14, use a function that returns an object with methods.
// The methods access a private variable (eventStats) through closure.

// TASK 19: Filtering & Sorting
// Create a function that returns a list of events that still have available spots.
// For each event, calculate spotsLeft and whether it's available.
// Only return events with available spots, sorted by most spots available first.
// HINT: Use map to calculate spotsLeft, filter to find available events,
// and sort to order them.

// TASK 20: Type Coercion and Validation
// Create a function that registers a participant for an event.
// It receives inputData with userId and eventId (as strings, like from a form).
// - Convert them to numbers
// - Validate that both are valid numbers
// - Check that the user and event exist
// - Check that the user isn't already registered
// - If all checks pass, register them and return success
// Otherwise, return an error message
// HINT: Use Number() to convert, Number.isNaN() to check, and array methods
// like some() and find() to check existence.

// TASK 21: Using 'this' with bind for Callbacks
// Create an event scheduler object with:
// - A scheduleReminder method that takes minutesBefore and logs a message using 'this.eventName'
// - A setupEventReminders method that:
//   - Has an array of reminder objects with minutes and labels
//   - For each reminder, uses bind to ensure 'this' is preserved
//   - Creates a callback that calls scheduleReminder with the minutes
//   - Logs a setup message
// HINT: Use this.scheduleReminder.bind(this, minutes) to create a callback
// where both 'this' and the minutes argument are pre-set.


// -------------------- SOLUTIONS --------------------

// SOLUTION 1: Get Event Titles with map()
const titles = events.map(function (event) {
  return event.title;
});
console.log(titles);

const eventTitles = events.map(event => event.title);
console.log(eventTitles);

// SOLUTION 2: Transform Events into Display Strings
const eventSummaries = events.map(event => {
  return {
    id: event.id,
    display: event.title + " (" + event.date + ")"
  };
});
console.log(eventSummaries);

// SOLUTION 3: Filter Large Events
const largeEvents = events.filter(event => event.capacity >= 40);
console.log(largeEvents);

// SOLUTION 4: Filter Participants by Country
const usParticipants = participants.filter(p => p.country === "US");
console.log(usParticipants);

// SOLUTION 5: Count Registrations for an Event
const event101Registrations = registrations.filter(r => r.eventId === 101);
console.log(event101Registrations.length);

// SOLUTION 6: Find a Single Event with find()
const jsEvent = events.find(event => event.title.includes("JavaScript"));
console.log(jsEvent);

// SOLUTION 7: Find Participant by ID
const participant = participants.find(p => p.id === 3);
console.log(participant.name);

// SOLUTION 8: Understand find() vs filter()
const found = events.find(e => e.id === 101);
const filtered = events.filter(e => e.id === 101);
console.log(found);    // One object
console.log(filtered); // Array with one object

// SOLUTION 9: Check with some()
const hasLargeEvent = events.some(event => event.capacity > 40);
console.log(hasLargeEvent);

// SOLUTION 10: Check with every()
const allHaveCapacity = events.every(event => event.capacity > 0);
console.log(allHaveCapacity);

const allLarge = events.every(event => event.capacity > 40);
console.log(allLarge);

// SOLUTION 11: Sum with reduce()
const totalCapacity = events.reduce((sum, event) => {
  return sum + event.capacity;
}, 0);
console.log(totalCapacity);

// SOLUTION 12: Count with reduce()
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

// SOLUTION 13: Chain Methods to Get Participant Names
const event101ParticipantNames = registrations
  .filter(r => r.eventId === 101)
  .map(r => r.userId)
  .map(id => participants.find(p => p.id === id))
  .map(p => p.name);
console.log(event101ParticipantNames);

// SOLUTION 14: Closures & Private Variables
function createRegistrationManager() {
  let registrationCount = 0;

  return {
    register: function (userId, eventId) {
      registrationCount++;
      registrations.push({ userId, eventId, timestamp: Date.now() });
      console.log(`Registration #${registrationCount}: User ${userId} registered for event ${eventId}`);
      return registrationCount;
    },
    getRegistrationCount: function () {
      return registrationCount;
    },
    reset: function () {
      registrationCount = 0;
    }
  };
}

const manager = createRegistrationManager();
manager.register(1, 101);
manager.register(2, 102);
console.log("Total registrations:", manager.getRegistrationCount());

// SOLUTION 15: The 'this' Keyword
const eventOrganizer = {
  name: "GHW Team",

  getHostInfo: function (hostId) {
    const hostEvents = events.filter(event => event.hostId === hostId);
    return {
      organizer: this.name,
      eventCount: hostEvents.length,
      events: hostEvents.map(e => e.title)
    };
  }
};

console.log("Host 1 info:", eventOrganizer.getHostInfo(1));

// SOLUTION 16: Reduce for Aggregation
const registrationReport = events.reduce((report, event) => {
  const eventRegistrations = registrations.filter(r => r.eventId === event.id);
  const spotsLeft = event.capacity - eventRegistrations.length;

  report[event.title] = {
    capacity: event.capacity,
    registered: eventRegistrations.length,
    spotsLeft: spotsLeft,
    fullPercentage: Math.round((eventRegistrations.length / event.capacity) * 100)
  };

  return report;
}, {});

console.log("Registration Report:", registrationReport);

// SOLUTION 17: Combining Multiple Transformations
const detailedRegistrations = registrations
  .map(registration => {
    const participant = participants.find(p => p.id === registration.userId);
    const event = events.find(e => e.id === registration.eventId);

    return {
      participantName: participant.name,
      participantCountry: participant.country,
      eventTitle: event.title,
      eventDate: event.date,
      registrationTime: new Date(registration.timestamp).toLocaleDateString()
    };
  });

console.log("Detailed Registrations:", detailedRegistrations.slice(0, 3));

// SOLUTION 18: Scope & Private Data
function createEventTracker() {
  let eventStats = {};

  return {
    trackEventView: function (eventId) {
      if (!eventStats[eventId]) {
        eventStats[eventId] = { views: 0, registrations: 0 };
      }
      eventStats[eventId].views++;
    },

    trackRegistration: function (eventId) {
      if (!eventStats[eventId]) {
        eventStats[eventId] = { views: 0, registrations: 0 };
      }
      eventStats[eventId].registrations++;
    },

    getStats: function (eventId) {
      return eventStats[eventId] || null;
    },

    getAllStats: function () {
      return eventStats;
    }
  };
}

const tracker = createEventTracker();
tracker.trackEventView(101);
tracker.trackEventView(101);
tracker.trackEventView(101);
tracker.trackRegistration(101);
tracker.trackRegistration(101);
tracker.trackEventView(102);
tracker.trackRegistration(102);

console.log("Event 101 stats:", tracker.getStats(101));
console.log("Event 102 stats:", tracker.getStats(102));

// SOLUTION 19: Filtering & Sorting
function getAvailableEvents() {
  return events
    .map(event => {
      const registrationCount = registrations.filter(r => r.eventId === event.id).length;
      const spotsLeft = event.capacity - registrationCount;

      return {
        ...event,
        spotsLeft,
        isAvailable: spotsLeft > 0
      };
    })
    .filter(event => event.isAvailable)
    .sort((a, b) => b.spotsLeft - a.spotsLeft);
}

console.log("Available Events:", getAvailableEvents());

// SOLUTION 20: Type Coercion and Validation
function registerParticipant(inputData) {
  const userId = Number(inputData.userId);
  const eventId = Number(inputData.eventId);

  if (Number.isNaN(userId) || Number.isNaN(eventId)) {
    return { success: false, error: "Invalid user ID or event ID" };
  }

  const userExists = participants.some(p => p.id === userId);
  if (!userExists) {
    return { success: false, error: "User not found" };
  }

  const eventExists = events.some(e => e.id === eventId);
  if (!eventExists) {
    return { success: false, error: "Event not found" };
  }

  const alreadyRegistered = registrations.some(
    r => r.userId === userId && r.eventId === eventId
  );
  if (alreadyRegistered) {
    return { success: false, error: "Already registered for this event" };
  }

  registrations.push({ userId, eventId, timestamp: Date.now() });
  return { success: true, message: "Successfully registered!" };
}

console.log(registerParticipant({ userId: "3", eventId: "104" }));
console.log(registerParticipant({ userId: "invalid", eventId: "101" }));

// SOLUTION 21: Using 'this' with bind for Callbacks
const eventScheduler = {
  eventName: "JavaScript Workshop",

  scheduleReminder: function (minutesBefore) {
    console.log(`Reminder set for ${minutesBefore} minutes before ${this.eventName}`);
  },

  setupEventReminders: function () {
    const reminders = [
      { minutes: 60, label: "1 hour before" },
      { minutes: 15, label: "15 minutes before" }
    ];

    reminders.forEach(reminder => {
      const callback = this.scheduleReminder.bind(this, reminder.minutes);
      console.log(`Setting up ${reminder.label} reminder...`);
      callback();
    });
  }
};

eventScheduler.setupEventReminders();