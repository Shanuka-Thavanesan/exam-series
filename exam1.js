// 1
let empty={

};
console.log(empty);
//  2
var person = {
  name: "Shanuka",
  age: 21,
  introduceYou: function() {
    console.log("Hello, my name is " + this.name );
  }
};
person.introduceYou();


 // 3
//  method1
// function greetStudent(student) {
//     console.log("Hello " + student.name + " Welcome to the Coding School.");
//   }
//   var student = {
//     name: "Shanuka"
//   };
//   greetStudent(student);

// method2
// function greetStudent() {
//       console.log("Hello " + person.name + " Welcome to the Coding School.");
//     };
    
//     greetStudent();

// method 3
var object={
  greetStudent:function(student){
    console.log(`hello${student.name}welcome to the Coding School`);
  }
};
  object.greetStudent({name:"Shanu"})

  

 // 4
console.log("Using dot notation:");
console.log( person.name);
console.log( person.age);
console.log("Using bracket notation:");
console.log( person["name"]);
console.log( person["age"]);

// 5
person.email = "shanuka@example.com";
console.log( person ["email"]);

// 6
delete person.email;
console.log(person);

// 7
  if (person.hasOwnProperty('email')) {
    console.log("The 'email' property exists in the object.");
  } else {
    console.log("The 'email' property  doesn't exist in the object.");
  }

//   8
var student = {
    name: "Shanu",
    age: 21,
  };

  var course = {
    courseName: "ict",
  };
  var studentCourse = Object.assign({}, student, course);
  
  console.log(studentCourse);
  
// 9
if (person.hasOwnProperty('address')) {
  console.log("Address is there");
} else {
  console.log("Address not found");
}

// 10
var book = {
  title: "titanic",
  author: "James Cameron",
  year: 1997
};

var bookJSON = JSON.stringify(book);

console.log(bookJSON);

// 11
var students = [
  { name: 'Preethi', age: 20, gpa: 3.5 },
  { name: 'Shanu', age: 21, gpa: 3.2 },
  { name: 'Kamshi', age: 15, gpa: 3.8 },

];
console.log(students);

  