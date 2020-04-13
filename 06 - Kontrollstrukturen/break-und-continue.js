"use strict"


// continue überspringt den weiteren Ablauf, d. h. die Zeilen nach 7 werden übersprungen
for (let i = 1; i <= 10; i++) {
  // continue: keine Ausgabe
  if (i === 7) {
    continue
  }

  if (i === 9) {
    break
  }

  console.log("i:", i)
}



