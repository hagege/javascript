"use strict"

const students = ["Max", "Erika", "Monika"]

/*
for (let i = 0; i < students.length; i++) {
  console.log("i:", i)
  console.log(students[i])
}
*/

for (let i in students){
  console.log("Student-Nr.: ", i, "Student ", students[i])
}

/*
for (const i in students) {
  console.log("i:", i)
  console.log(students[i])
}
*/

/* alle Werte eines Arrays durchgehen - beste Lösung in diesem Fall*/
for (const student of students) {
  console.log(student)
}