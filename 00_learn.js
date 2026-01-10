// PARTICIPANTS - Our hackers
const participants = [
  { id: 1, name: "Priya Sharma", country: "UK", joinedAt: "2024-01-15" },
  { id: 2, name: "Marcus Chen", country: "USA", joinedAt: "2024-01-16" },
  { id: 3, name: "Fatima Al-Hassan", country: "IT", joinedAt: "2024-01-17" },
  { id: 4, name: "João Silva", country: "USA", joinedAt: "2024-01-18" },
  { id: 5, name: "Emma Watson", country: "IN", joinedAt: "2024-01-19" }
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

// BADGES - Achievements
const badges = [
  { odId: 1, badge: "First Workshop", earnedAt: "2024-02-01" },
  { odId: 1, badge: "Speaker", earnedAt: "2024-02-01" },
  { odId: 2, badge: "First Workshop", earnedAt: "2024-02-01" },
  { odId: 3, badge: "API Master", earnedAt: "2024-02-02" }
];

/**
  typeof participants; // 'object'
  Array.isArray(participants); // true
  typeof participants[0] // 'object'
  typeof participants[0].country // 'string'
  typeof participants[0].id // 'number'
  participants[0].id // 1
  participants[0].country // 'UK'
*/

function validateParticipant(participant) {
  const idCheck = typeof participant.id === "number";
  const nameCheck = typeof participant.name === "string";
  const countryCheck = typeof participant.country === "string";
  const joinedAtCheck = typeof participant.joinedAt === "string";

  const hasCrucialFields = participant.id !== undefined && participant.name !== undefined;

  const isValid = idCheck && nameCheck && countryCheck && joinedAtCheck && hasCrucialFields;
  return isValid;
}

console.log(validateParticipant(participants[0])); // true
console.log(validateParticipant({ id: "1", name: "Test" })); // false
console.log(validateParticipant({ id: 1, name: "Test", activeSince: "2026-01-10", country: "UK", joinedAt: "2024-01-15" })); // true (but has extra field of 'activeSince' which I don't want)

// TODO TASK: Improve validateParticipant so that it ensures that data only has id, name, country, and joinedAt. Nothing Additional!