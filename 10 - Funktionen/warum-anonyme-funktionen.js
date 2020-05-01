"use strict"

// Warum benötigen wir anomye Funktionen?

// Zugriff über diese Funktion auf das Dateisystem
/*
const fs = require("fs")
fs.readdir(__dirname, (err, files) => {
  console.log(files)
})
*/

const sayHello = () => {
  console.log("sayHello")
}
// in der Variablen ist die Funktion gespeichert, wird aber nicht ausgeführt
// console.log("sayHello:", sayHello)
// in der Variablen ist die Funktion gespeichert, wird ausgeführt wegen () am Schluss
// console.log("sayHello:", sayHello())


// hier wird der Variablen der Wert von der Variablen sayHello zugewiesen, die aber eine Funktion enthält
const a = sayHello

a()