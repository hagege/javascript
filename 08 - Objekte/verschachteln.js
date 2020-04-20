"use strict"

const students = [
  {firstname: "Max", lastname: "Mustermann"},
  {firstname: "Erika", lastname: "Mustermann"}
]

console.log("students:", students)

// ... in ... liefert den Index
for (const student in students) {
  console.log("student:", student)
}

// ... of ... liefert das Objekt an der Stelle Index
for (const student of students) {
  console.log("student:", student)
}

const obj = {
  items: ["Apfel", "Orange"]
}
console.log("obj:", obj)