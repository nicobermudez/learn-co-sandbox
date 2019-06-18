// const person = {

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isLegalDriver = function() {if(age >= 16){return true} return false}
}

/* Do not modify code below this line */

const youngPerson = new Person('Jane', 15);
console.log(youngPerson.isLegalDriver(), '<-- should be false');

const olderPerson = new Person('Joan', 16);
console.log(olderPerson.isLegalDriver(), '<-- should be true');

