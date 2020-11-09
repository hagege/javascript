"use strict"

const students = ["Max", "Erika", "Monika"]

/*
for (let i = 0; i < students.length; i++) {
  console.log("i:", i)
  console.log(students[i])
}
*/
// gehe die durch und packe die Variable in i -> for in
for (let i in students){
  console.log("Student-Nr.: ", i, "Student ", students[i])
}

/*
for (const i in students) {
  console.log("i:", i)
  console.log(students[i])
}
*/

// alle Werte eines Arrays durchgehen - beste Lösung in diesem Fall -> for of
for (const student of students) {
  console.log(student)
}