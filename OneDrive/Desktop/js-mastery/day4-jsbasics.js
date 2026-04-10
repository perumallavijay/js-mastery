// 1. Print first skill
// 2. Print last skill
// 3. Print total number of skills
// 4. Add "MongoDB" to the end
// 5. Remove last skill
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.log(skills[0]);
console.log(skills[4]);
console.log(skills.length);
skills.push('MongoDB');
console.log(skills);
skills.pop();
console.log(skills);
//

const jobs = [
  { title: "React Developer", salary: 60000, location: "Hyderabad" },
  { title: "Node.js Developer", salary: 35000, location: "Bangalore" },
  { title: "Frontend Developer", salary: 50000, location: "Hyderabad" },
  { title: "Backend Developer", salary: 25000, location: "Remote" },
];

const titles = jobs.map(job => job.title)
console.log(titles);

const goodJobs = jobs.filter(job => job.salary >= 40000);
console.log(goodJobs);

const jobLocation = jobs.find(job => job.location === "Hyderabad");
console.log(jobLocation);



///map concept 
const products = [
  { name: "phone", price: 10000},
  { name: "laptop", price: 50000},
  { name: "tablet", price: 20000}
];

const newProduct = products.map(product => {
  return { name:product.name,
    price:product.price * 1.18,
    category: product.category
   } 
  });

console.log(newProduct)


