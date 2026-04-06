

//Functons
function greeting(name) {
  console.log("hello " + name);
}

greeting("vijay");
greeting("paul");

//return

function checkSalary(salary) {
  return "salary is " + salary;
}
checkSalary(50000);


//
function myData(data){
  return data;
}
let myDataResult = myData("he is a data analyst from hsbc")
console.log(myDataResult);

// takes name as input
// returns "Welcome Vijay to Job Portal!"

function greetUser(name) {
  return `Welcome ${name} to Job Portal`;
}

console.log(greetUser("Vijay"));
console.log(greetUser("Ravi"));
console.log(greetUser("Priya"));

//
// takes salary as input
// if above 40000 → return "✅ Good salary: 50000"
// if below       → return "❌ Low salary: 30000"

function checkSalary(salary) {
  if (salary >= 40000){
  return `Good salary: ${salary}`;
}
else{
  return `Low salary: ${salary}`
}
}

console.log(checkSalary(50000));
console.log(checkSalary(30000));
console.log(checkSalary(45000));

//
// takes experience (years) as input
// 0 years       → return "Fresher"
// 1 to 2 years  → return "Junior Developer"
// 3 to 5 years  → return "Mid-level Developer"
// above 5 years → return "Senior Developer"

function checkExperience(experience) {
  // your code here — use if, else if, else!
  if(experience === 0){
    return  "Fresher";
  }
  else if(experience <= 2){
    return "Junior Developer";
  }
  else if(experience <=5){
    return "Mid level Developer";
  }
  else{
    return "Senior Developer"
  }
}

console.log(checkExperience(0)); // Fresher
console.log(checkExperience(2)); // Junior Developer
console.log(checkExperience(4)); // Mid-level Developer
console.log(checkExperience(7)); // Senior Developer

//

let greetUser =(name) => `Welcome ${name} to Job Portal!`;
console.log(greetUser("Vijay"));
console.log(greetUser("Ravi"));
console.log(greetUser("Priya"));

//


let addNumbers = (a,b) => a + b;
console.log(addNumbers(4,6))


//
const checkExperience =(experience) => {
  if(experience === 0){
    return  "Fresher";
  }
  else if(experience <= 2){
    return "Junior Developer";
  }
  else if(experience <=5){
    return "Mid level Developer";
  }
  else{
    return "Senior Developer"
  }
}

console.log(checkExperience(0)); // Fresher
console.log(checkExperience(2)); // Junior Developer
console.log(checkExperience(4)); // Mid-level Developer
console.log(checkExperience(7)); // Senior Developer