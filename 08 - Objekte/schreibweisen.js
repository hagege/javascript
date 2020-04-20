"use strict"

const student = {
  name: "Max Mustermann",
  age: 21,
  //2019_2020: "Ungarisch",
  "2019-2020": "Ungarisch",
  gewuenschter_Kurs: "Bulgarisch"
  // "gewünschter Kurs": "Bulgarisch"
}


console.log(student.age)
console.log(student["age"])

console.log(student["na" + "me"])
// console.log(student["gewünschter Kurs"])
console.log(student.gewuenschter_Kurs)