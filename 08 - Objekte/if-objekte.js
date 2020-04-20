"use strict"

const student = {
  name: "Max Mustermann",
  age: 21,
  enrolled: false,
  numberOfCourses: 0
}

if (student.numberOfCourses) {
  console.log("Hallo Welt!")
}


if (!student.enrolled) {
  console.log("nicht eingeschrieben!")
}

// gibt es den Schlüssel bzw. die Eigenschaft?
if ("numberOfCourses" in student) {
  console.log("numberOfCourses in student")
}
student.numberOfCourses++
console.log(student.numberOfCourses)