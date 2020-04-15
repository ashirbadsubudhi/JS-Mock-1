//Explain the concept of prototypes in JS. How is it related to Classes in ES6

/*
Answer:   Prototypes is a simple way to share behaviour and data between multiple objects. 
The prototypes are property of the Object constructor.
We use it to add new properties to all the existing objects of a given type. 
When an object is created,  JS engine adds a __proto__ property to the newly created object. 
This _proto_ property is equal to the Object's prototype property.
 
*/


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
        return this.firstName + " " + this.lastName;
      };
  }
  
//   Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName;
//   };

var p = new Person("abc","xyz",20,'black');
console.log(p.name());