"use strict"


const message = ["Hallo Welt!"]
console.log(__filename)


debugger
// continue überspringt den weiteren Ablauf, d. h. die Zeilen nach 7 werden übersprungen
for (let i = 1; i <= 10; i++) {
  // continue: keine Ausgabe
  if (i === 4) {
    continue
  }

  if (i === 9) {
    break
  }

  console.log("i:", i)
}



