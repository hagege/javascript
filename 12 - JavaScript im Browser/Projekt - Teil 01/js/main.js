"use strict"

// Browser hat den kompletten Objektbaum eingelesen //
document.addEventListener("DOMContentLoaded", () => {
  // die ID korrespondiert mit der ID des Elements aus der HTML-Datei:
  const ButtonKlick = document.getElementById("klick")
  const ButtonReset = document.getElementById("reset")
  const AnzahlKlick = document.getElementById("anzahl_klicks")


  // Button für die Ausgabe der Klickanzahl
  ButtonKlick.addEventListener("click", () => {
    // besser: in eine Zahl umwandeln und erst dann hochzählen, weil die Eigenschaft innerText den Typ string hat.
    const currentCounter = parseInt(AnzahlKlick.innerText, 10)
    AnzahlKlick.innerText = currentCounter + 1
    // console.log(AnzahlKlick.innerText)
  })

  // Button für Reset der Klickanzahl
  ButtonReset.addEventListener("click", () => {
    AnzahlKlick.innerText = "0"
  })

})
