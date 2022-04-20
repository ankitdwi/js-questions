var obj = {
  name: "xyz",
  getName: function () {
    return this.name;
  },
};
var getNameCopy = obj.getName;

console.log(obj.getName()); // xyz
console.log(getNameCopy()); // undefined as this will become window and window doesn't have name value

// ------------------------------------------------------------------------------------------------
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = Person("abc", 22); // return person1 = undefined and name and age value be defined in window object with value name = 'abc' and age =22
var person2 = new Person("xyz", 25); //return person2 = Person {name: "xyz", age: 25}
