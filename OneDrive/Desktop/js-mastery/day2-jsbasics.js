const applicationStatus = "applied";

switch (applicationStatus) {
  case "applied":
    console.log("job applied successfully");
    break;
  case "interview":
    console.log("interview is done today");
    break;
  case "rejected":
    console.log("sorry you are rejected");
    break;
  case "hired":
    console.log("congratulation you are hired");
    break;
  default:
    console.log("unknown status");
}

// switch condition day2 ...

//for loop

for (let i = 1; i <= 5; i++) {
  console.log("job #" + i);
}

for (let n = 1; n <= 10; n++) {
  console.log(n);
}

for (let a = 1; a <= 100; a++) {
  if (a % 2 === 0) {
    console.log(a + "- Even");
  } else {
    console.log(a + "- Odd");
  }
}

for (let j = 1; j <= 5; j++) {
  console.log("Application " + j + " Submitted");
}

//while loop -----> until when ? which means to get until false
let q = 1;
while (q <= 5) {
  console.log(q);
  q++;
}

//when user trying to login to site

let isLogedIn = false;
attempt = 1;

while (attempt <= 3) {
  if (isLogedIn === true) {
    console.log("user loged in successfully");
  } else {
    console.log("failed login attempt");
  }
  attempt++;
}

//

let lightOn = false;
let buttonOn = 1;
while (buttonOn <= 4) {
  if (lightOn === true) {
    console.log("light is ON");
  } else {
    console.log("OFF");
  }
  buttonOn++;
}

//
let s = 1;
while (s <= 5) {
  console.log("Checking application #" + s);
  s++;
}
//

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
skills.forEach(function (skill) {
  console.log(skill);
});

//

const salaries = [30000, 50000, 45000, 25000, 60000];
salaries.forEach(function (salary) {
  if (salary >= 40000) {
    console.log("Good " + salary);
  } else {
    console.log("Low " + salary);
  }
});

//

const jobs = [
  { title: "React Developer", location: "Hyderabad" },
  { title: "Node.js Developer", location: "Bangalore" },
  { title: "Frontend Developer", location: "Hyderabad" },
  { title: "Backend Developer", location: "Remote" },
];
// Print only Hyderabad jobs

jobs.forEach(function (job) {
  if (job.location === "Hyderabad") {
    console.log(job.title + " Hyderabad");
  } else if (job.location === "Bangalore") {
    console.log(job.title + " Bangalore");
  } else {
    console.log(job.title + " Remote");
  }
});
