/* 
Filters
-more efficient, less repetitve
--> no longer need for, for of loops
-keep functions pure
-easier to debug

filter does not take into account comparison logic
    -logic is abstracted into separate function
    -takes in callback and console logs every object that makes callback true
    -useful when you want more than one condition
    */
   function filter(array, callback) {
    for (const object of array) {
        if (callback(object)) {
            console.log(object.nestedObject)
        }
    }
   }
/*
Pure v. Impure Functions

pure
-returns same result each time if repeatedly invoked with same set of arguments
-predictable
invoking has no side effects (i.e. network call, altering object)
*/

// Ex 1 (return is predictable)
function multiplyAndFloor(num) {
    return Math.floor(num * 100);
  }
  
  const randNum = Math.random();
  
  randNum;
  // => 0.9123939589869237
  
  multiplyAndFloor(randNum);
  // => 91
  multiplyAndFloor(randNum);
  // => 91



// Ex 2 (object no longer altered)
const adaAge202 = {
    name: "Ada Lovelace",
    age: 202,
  };
  
  function happyBirthday(person) {
    const newPerson = Object.assign({}, person, { age: person.age + 1 });
  
    console.log(
      `Happy birthday, ${newPerson.name}! You're ${newPerson.age} years old!`
    );
  
    return newPerson;
  }
  
  const adaAge203 = happyBirthday(adaAge202);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
  adaAge202;
  // => {name: "Ada Lovelace", age: 202}
  
  adaAge203;
  // => {name: "Ada Lovelace", age: 203}

/*
impure
-return value is not predictable
-invoking may have external side effects (i.e. network call, altering obj)
-should be avoided if possible
*/

// Ex 1 (return value not predictable)
function randomMultiplyAndFloor() {
    return Math.floor(Math.random() * 100);
  }
  
  randomMultiplyAndFloor();
  // => 53
  randomMultiplyAndFloor();
  // => 66
  const ada = {
    name: "Ada Lovelace",
    age: 202,
  };

//   Ex 2 (alters passed in object)
  function happyBirthday(person) {
    console.log(
      `Happy birthday, ${person.name}! You're ${++person.age} years old!`
    );
  }
  
  happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
  happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 204 years old!
  
  ada;
  // => {name: "Ada Lovelace", age: 204}