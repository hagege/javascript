"use strict"

/**
 * Mit einem Array können wir z.B. eine komplette Teilnehmerliste
 * speichern!
 */

 function ausgabe(ausgabetext){
  console.log(ausgabetext);
 }


let students = [
  "Max Müller",
  "Erika Mustermann",
  "Annika Müller",
  "Max Mustermann"
]

// Art der Variable
console.log(typeof students);
ausgabe("Art der Variable");

// ist das ein Array?
console.log(students instanceof Array);

// Prüfen: Ist ein Element im Array vorhanden?
ausgabe("Prüfen: Ist ein Element im Array vorhanden?");
console.log(students.indexOf("Max Müller"))

// Wenn ein Element nicht existiert -> -1!
console.log(students.indexOf("Max Müller!"))

// Elemente sortieren
console.log(students.sort);
console.log(students);

// Wie viele Elemente sind in dem Array?
console.log("Anzahl:", students.length);

// Elemente anzeigen:
console.log("Erstes Element [0]:", students[0]);
// zeigt Fehler, weil das Element nicht existiert:
console.log("Fünftes Element [5]:", students[5]);

// zusätzliche Elemente anlegen:
students.push("Joker", "Joker 2");
console.log(students);

// Elemente löschen:
// entfernt das letzte eingegebene Element:
const lastElement = students.pop();
console.log(students);
console.log("Letztes Element: ", lastElement);

// Element überschreiben:
students[0] = "Maximilian Müller";

// entfernt ein spezielles Element:
students.pop("Joker");
console.log(students);

// Arrays sortieren
students.sort()
console.log(students)

// Sortierung umdrehen
students.reverse()
console.log(students)

// Wichtig: Sparse Arrays!
// students[30] = "Joker"
console.log(students)

// Die .splice()-Funktion zum Entfernen von Elementen
students.splice(0, 2)
console.log(students)

// Die .splice()-Funktion zum Hinzufügen von Elementen
students.splice(1, 0, "Joker")
console.log(students)

