"use strict"

// Randfälle beachten!

// Ganze Zahl, größer als 0
let numberOfStudents = 5

if (numberOfStudents === 1) {
  console.log("Der Sprachkurs kostet 40€ / Stunde / Teilnehmer")
}
else {
  // numberOfStudents ist eine ganze Zahl, größer als 1 
  // numberOfStudents ist eine ganze Zahl, größer gleich 2
  // else if (numberOfStudents >= 2 && numberOfStudents <= 5) ist nicht mehr notwendig, weil es ja auf jeden Fall >= 2 ist, daher reicht:
  if (numberOfStudents <= 5) {
    console.log("25€ / Stunde / Teilnehmer")
  }
  else {
    // numberOfStudents ist eine ganze Zahl, größer als 5
    // numberOfStudents ist eine ganze Zahl, größer gleich 6
    // else if (numberOfStudents >= 6 ) ist nicht meehr notwendig, weil es ja auf jeden Fall >= 6 sein muss, sonst wären wir nicht in diesem Zweig:
    console.log("Der Sprachkurs kostet 15€ / Stunde / Teilnehmer")
  }
}