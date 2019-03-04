var MyCurrentAge = 31;
console.log("myCurrentAge: ", MyCurrentAge);
console.log("myCurrentAge has type: ", typeof MyCurrentage);

var name = "Alexandra";
console.log("my name: ", name);
console.log("name has type: ", typeof name);

var student = true;
console.log("I am student: ", student);
console.log("student has type: ", typeof student);

var x;
console.log("x value: ", x);
console.log("x has type: ", typeof x);

var y = null;
console.log("y value: ", y);
console.log("y has type: ", typeof y);

var person = {
  name: "Alexandra",
  age: "31",
  student: true
};
console.log("person value: ", person);
console.log("person has type: ", typeof person);

var myArray = [31, "woman", true];
console.log("myArray value: ", myArray);
console.log("myArray has type: ", typeof myArray);

var myVar = function() {};

var myAge = 31;

if (myAge <= 25) {
  console.log("I am under 25 years old");
} else if (myAge >= 25) {
  console.log("I am over 25 years old");


var stringage = MyCurrentAge <= 25? "I am under 25 " : "I am over 25";

console.log("stringage",stringage);
}