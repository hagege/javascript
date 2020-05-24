"use strict"

const printStudentName = function() {
  // in dem Fall wird das this durch students (das ist vor dem Punkt) ersetzt
  console.log(this.lastname + ", " + this.firstname)
}

const students = [
  {
    firstname: "Max", 
    lastname: "Mustermann",
    printName: printStudentName
  },
  {
    firstname: "Erika", 
    lastname: "Mustermann",
    printName: printStudentName
  }
]

let student = ""
for (student of students){
  student.printName()  
}
// students[0].printName()
// students[1].printName()