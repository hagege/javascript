"use strict"


let studentCount_1 = 8

if (studentCount_1 < 10) {
  console.log("Es sind noch Plätze im Sprachkurs 1 frei!")
} 
if (studentCount_1 >= 10) {
  console.log("Der Sprachkurs 1 ist schon voll!")
}


if (studentCount_1 < 10) {
  console.log("Es sind noch Plätze im Sprachkurs frei!")
} else {
  console.log("Der Sprachkurs ist schon voll!")
}


let studentCount = 9

if (studentCount < 5) {
  console.log("Es sind noch viele Plätze im Sprachkurs frei!")
} else {
  if (studentCount < 8) {
    console.log("Es sind noch wenige Plätze frei")
  } else {
    if (studentCount < 10) {
      console.log("Es sind noch kaum Plätze frei")
    } else {
      console.log("Es sind keine Plätze mehr frei")
    }
  }
}