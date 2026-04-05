// =============================
// DAY 1 - JavaScript Basics
// =============================

// --- Variables ---
let score = 0;
const PI = 3.14;

let myAge = 25;
console.log(myAge);
myAge = 26;
console.log(myAge); // 26

let city = "Hyderabad";
city = "Mumbai"; // ✅ let allows reassignment

// const cannot be reassigned — TypeError:
// const myCity = "Hyderabad";
// myCity = "Mumbai"; ❌

// --- Data Types ---
const jobTitle = "Frontend Developer";
const salary = 50000;
const isAvailable = true;
const profilePic = null; // null bug: typeof → "object"
let resumeLink; // undefined

console.log(typeof jobTitle); // string
console.log(typeof salary); // number
console.log(typeof isAvailable); // boolean
console.log(typeof profilePic); // object ← JS bug
console.log(typeof resumeLink); // undefined

// --- Conditionals ---
const minSalary = 40000;

if (salary >= minSalary) {
  console.log("This job meets your requirement");
} else {
  console.log("Salary too low, skip this job");
}

// --- Operators + Job Filter Logic ---
const location = "Hyderabad";
const isRemote = false;

if (salary >= 40000 && location === "Hyderabad") {
  console.log("✅ Job matches your profile");
} else if (salary >= 40000 && isRemote === true) {
  console.log("✅ Remote job, good salary");
} else {
  console.log("❌ Job doesn't match");
}
