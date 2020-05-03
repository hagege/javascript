"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  /*
  console.log(helpElements)
  */
  for(const helpElement of helpElements) {
    /*
    // ähnlich wie die untere IF-Schleife ist aber schneller, weil der Ablauf dann unterbrochen wird.
    // mir gefällt aber die andere Schreibweise besser.
    if (!helpElement.attributes["data-help"]) {
      continue
    }
    */
    helpElement.addEventListener("click", (event) => {
      // alert("HelpElement wurde geklickt")
      // nur ausführen, wenn das Attribut existiert, weil sonst eine Fehlermeldung in der developer console erscheint (undefined):
      if (helpElement.attributes["data-help"]){
        // die folgende Zeile dient dazu, dass der Browser nicht immer nach oben springt
        event.preventDefault()

        const helpText = helpElement.attributes["data-help"].value
        alert(helpText)
      }
    })
  }

}) 