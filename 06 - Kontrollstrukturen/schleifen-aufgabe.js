"use strict"

// Aufgabe 1:
//
// Strafaufgabe für einen Schüler an der Sprachschule!
// Er soll 25x schreiben: "Ich soll im Unterricht nicht stören".
// 
// Schreibe ein kleines Programm, was dies für den Schüler 
// erledigt ;)

let anzahl = 25
for (let zaehler = 1; zaehler <= anzahl; zaehler++ ){
  console.log(zaehler, ".: Ich soll im Unterricht nicht stören")
}

// Aufgabe 2: Sprachschule
//
// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich 
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo!
let students = [
  "Max", 
  "Monika", 
  "Franziska", 
  "Bernd", 
  "Tobias", 
  "Andreas",
  "Tatjana",
  "Willi",
  "Heinz"
]

let studentsAnzahl = students.length
console.log(studentsAnzahl)
let students1 = []
let students2 = []
for (let zaehler = 0; zaehler < studentsAnzahl; zaehler++ ){
   if (zaehler%2 === 1){
     students1.push(students[zaehler])
   } else {
    students2.push(students[zaehler])
   }
}
console.log("students1:", students1)
console.log("students2:", students2)

// Aufgabe 3
// 
// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
// 

let levels = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2"
]

let prices = [
  400,
  500,
  550,
  600,
  650,
  700
]


// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.

let summe = 0
let chooseLevel = "A2"
for (let zaehlLevel = 0; zaehlLevel < levels.length; zaehlLevel++){
  if (levels[zaehlLevel] <= chooseLevel){
    summe = summe + prices[zaehlLevel]
  }
}
console.log("Summe: ", summe)

//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?

summe = 0
let LevelBegin = "B1"
let LevelEnd = "C2"
for (let zaehlLevel = 0; zaehlLevel < levels.length; zaehlLevel++){
  if (levels[zaehlLevel] >= LevelBegin && levels[zaehlLevel] <= LevelEnd){
    summe = summe + prices[zaehlLevel]
  }
}
console.log("Summe 2: ", summe)


// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?


summe = 0
LevelBegin = "A1"
LevelEnd = "C2"
let maxPreis = 1500
let MaxLevel = "A1"
for (let zaehlLevel = 0; zaehlLevel < levels.length; zaehlLevel++){
  if (summe + prices[zaehlLevel] > 1500){
      MaxLevel = levels[zaehlLevel - 1]
      break
  }
  summe = summe + prices[zaehlLevel]
}
console.log("Summe 3: ", summe, "Max. Level: ", MaxLevel)


// Aufgabe 4
//
// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
// 
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3. 
// Kurs hinzugefügt werden:
let studentsPerCourse = [
  ["Max", "Monika"], // Erster Kurs
  ["Erik", "Erika"] // Zweiter Kurs
]
// Aufgaben:
// 
//  a) Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!

debugger

let AnzStudents = 0
for (const course of studentsPerCourse){
    AnzStudents += course.length
}
console.log("Anzahl Studenten: ", AnzStudents)

// 
//  b) Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
//     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
//     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
//     Kurs entfernen zu können.
// 
//     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen 
//     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
//     werden konnte, da er ja gar nicht eingeschrieben ist.
//
// Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
// Sprachkursen zurechtkommt!

let NameStudent = "Jens"
for (const course of studentsPerCourse){
    if  (course.indexOf(NameStudent) === -1){
      console.log ("Student " + NameStudent + " ist nicht in Kurs " + course)
    }
    if (course.indexOf(NameStudent) !== -1){
      let position = course.indexOf(NameStudent)
      course.splice(position, 1)
      console.log ("Student " + NameStudent + " ist aus dem Kurs " + course + " ausgetragen worden.")
    }
}

AnzStudents = 0
for (const course of studentsPerCourse){
    AnzStudents += course.length
}
console.log("Anzahl Studenten: ", AnzStudents)


//
// Bonus-Aufgabe:
// 
//  c) Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein 
//     Programm, welches diesen neuen Teilnehmern in den Sprachkurs 
//     platziert, der bisher noch am wenigsten Teilnehmer hat.
// 
//     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
//     genau gleich viele Teilnehmer haben? Ist das Verhalten
//     für eine Sprachschule akzeptabel?


let AnzStudents1 = 0
let AnzStudents2 = 0
let course1 = studentsPerCourse[0]
let course2 = studentsPerCourse[1]
console.log(course1)
console.log(course2)

for (const course of course1){
  AnzStudents1 = AnzStudents1 + 1
}
for (const course of course2){
  AnzStudents2 = AnzStudents2 + 1
}
console.log("Anzahl Studenten 1: ", AnzStudents1, course1)
console.log("Anzahl Studenten 2: ", AnzStudents2, course2)

NameStudent = "Jens"
if (AnzStudents1 > AnzStudents2) {
  studentsPerCourse[0].push(NameStudent)
} else {
  studentsPerCourse[1].push(NameStudent)
}
console.log(studentsPerCourse[0])
console.log(studentsPerCourse[1])

/*
for (const course of studentsPerCourse){
    if  (course.indexOf(NameStudent) === -1){
      console.log ("Student " + NameStudent + " ist nicht in Kurs " + course)
    }
    if (course.indexOf(NameStudent) !== -1){
      let position = course.indexOf(NameStudent)
      course.splice(position, 1)
      console.log ("Student " + NameStudent + " ist aus dem Kurs " + course + " ausgetragen worden.")
    }
}
*/