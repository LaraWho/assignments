function Employee(name, jobTitle, salary, status="full time") {
  this.name = name
  this.jobTitle = jobTitle
  this.salary = salary
  this.status = status
  // this.printInfo = function() {
  //   console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
  // }
}

Employee.prototype.printInfo = function() {
  console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
}

var employees = [];

employees.push(new Employee('Amy', 'Queen', 'millions'));
var veronica = new Employee('Veronica', 'Queen Two', 'millions', 'part time');
employees.push(veronica);

console.log(employees);

console.log(veronica.printInfo());

console.log(employees[0].printInfo())
