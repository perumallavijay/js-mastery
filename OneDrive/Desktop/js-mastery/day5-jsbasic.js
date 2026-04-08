/* 
// objects 
//dot notation
const job ={
    title: "React Developer",
    salary: 45000,
    employee : "Vijay Perumalla",
    location :"Banglore",
    isRemote: false
}

console.log(job.employee);
console.log(job.salary);
console.log(job.title);

job.salary = 60000;// to update the value of an item to the key
console.log(job.salary );

job.experience = 2;
console.log(job.experience);

job.location = "Hyderabad"; // to update an item to object 
console.log(job.location);

delete job.location; // to delete an item in object
console.log(job.location)

console.log(job) // to print all object 

// 1. Print current salary
// 2. Update salary to 60000, print again
// 3. Add new property "experience" with value 2
// 4. Delete location
// 5. Print full object at end


// bracket notation
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  "1": "value1",   // keeping quotes to key is valid 
  "my choice": "value2",
};

console.log(person["age"]);
console.log(person["1"]);

*/

//practice 2 
const developer = {
  name: "Vijay",
  "current role": "React Developer",
  salary: 60000
};
console.log(developer.name);

console.log(developer["current role"]);

developer.experience = 2;
developer.salary = 80000;
delete developer["current role"];

console.log(developer);

const salaryOfDeveloper = "salary";
console.log(developer[salaryOfDeveloper])

// 1. Print name using dot notation
// 2. Print "current role" using bracket notation
// 3. Store "salary" in a variable, print using bracket notation


const company = {
    employee : "Paul",
    salaryPay : 50000,
    healthInsurence : 800000,
    joinDate : new Date("2026-05-03")

}
console.log(company)