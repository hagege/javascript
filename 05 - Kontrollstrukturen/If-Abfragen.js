"use strict"


let a = false

if (a) {
  console.log("Hallo Welt!")
}



let zahl1 = 7
let zahl2 = 6

if (zahl1 <= zahl2) {
  console.log("Zahl1 ist kleiner gleich Zahl2!")
}


let students = ["Max", "Moritz"]
if (students.indexOf("Erika") === -1) {
  console.log("Erika nimmt noch nicht am Kurs teil!")
}
let teilnehmer = "Moritz";
let position = students.indexOf(teilnehmer)
let anzahl = students.length;
console.log(anzahl + " Teilnehmer")
// console.log(position);
if (position >= 0 ) {
  console.log(teilnehmer + " nimmt am Kurs teil!")
}else{
  console.log(teilnehmer + " nimmt nicht am Kurs teil!")
}

