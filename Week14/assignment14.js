/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/
let employees = {
  "members" : [
    {
      "firstName" : "Sam",
      "department" : "Tech",
      "designation" : "Manager",
      "salary" : 40000,
      "raiseEligible" : true,
    },

    {
      "firstName" : "Mary",
      "department" : "Finance",
      "designation" : "Trainee",
      "salary" : 18500,
      "raiseEligible" : true,
    },

    {
      "firstName" : "Bill",
      "department" : "HR",
      "designation" : "Executive",
      "salary" : 21200,
      "raiseEligible" : false,
    }
  ],

}
console.log("-----Problem 1------")
console.log(employees.members);
console.log(employees["members"][0]["department"]);


/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/
let company = {
  "companyName" : "Tech Stars",
  "website" : "www.techstars.site",
  "employees" : [
    {
      "firstName" : "Sam",
      "department" : "Tech",
      "designation" : "Manager",
      "salary" : 40000,
      "raiseEligible" : true,
    },

    {
      "firstName" : "Mary",
      "department" : "Finance",
      "designation" : "Trainee",
      "salary" : 18500,
      "raiseEligible" : true,
    },

    {
      "firstName" : "Bill",
      "department" : "HR",
      "designation" : "Executive",
      "salary" : 21200,
      "raiseEligible" : false,
    }
  ],
}
console.log("-----Problem 2------")
console.log(company);
console.log(company["employees"][0]["department"]);


/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/
const newEmployee = {
   "firstName" : "Anna",
   "department" : "Tech",
   "designation" : "Executive",
   "salary" : 25600,
   "raiseEligible" : false,
}
function addEmployee(obj) {
  company.employees.push(obj);
}
addEmployee(newEmployee);
console.log("-----Problem 3------")
console.log(company);

/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/
console.log("-----Problem 4------")
let totalSalary = 0 ;
  for (const index in company.employees){
    console.log(`${company.employees[index].firstName}: ${company.employees[index].salary}`);
    totalSalary += company["employees"][index]["salary"];
  }
console.log("Total Salary = " + totalSalary);

/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/
console.log("-----Problem 5------")
console.log("Couldn't figure out, so here is my final value")

for (const index in company.employees){
  if (employees.raiseEligible = true) {
    console.log();
    "salary" == ("salary"*1.1);
    console.log(company.employees["firstName"]);
    company.employees["raiseEligible"] == false
    }
    else {
      console.log("Nope")
    }
  }



/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/
console.log("-----Problem 6------")
console.log("Couldn't figure out, so here is my final value")

const workHome = {
  "wfh" : ["Anna","Sam"]
}

function wfh(obj) {
  for (const index in company.employees){
    company.employees[index].push(obj);
  }
}
wfh(workHome);
console.log(company);
