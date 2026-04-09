//object destructuring ---- key name must be uses for destructuring 
const developer = {
  name: "Vijay",
  age: 25,
  city: "Hyderabad",
  skill: "React"
};

// Destructure all 4 properties
// Print each one
const {name, age, city, skill} = developer;
console.log(name);
console.log(age);
console.log(city);
console.log(skill);


//array destructuring --- any meaningfull name can be uses for array destructuring
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// Destructure first 3 skills
// use meaningful names
// print each one
const [firstSkill, secondSkill, thirdSkill] = skills 
console.log(firstSkill);
console.log(secondSkill);
console.log(thirdSkill);


//spread operator 
const webSkills = ["HTML", "CSS", "JavaScript"];

// 1. Copy skills array using spread
// 2. Add "React" and "Node.js" to copied array
// 3. Print both arrays
const newSkills = [...webSkills]
console.log(newSkills);
const updatedWebSkills = [...webSkills, "React", "Node.js"];
console.log(updatedWebSkills);

//spread operator with object 
const WebDeveloper = {
  name: "Vijay",
  skill: "React"
};

// Copy object + add new property
const updatedWebDeveloper = {
  ...WebDeveloper,
  salary: 60000,
  location: "Hyderabad"
};

console.log(updatedWebDeveloper);
// { name: "Vijay", skill: "React", salary: 60000, location: "Hyderabad" }