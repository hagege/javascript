"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")
    // wichtig erst alle Elemente konfigurieren und dann erst in das ul-Element einfügen

    // erste Option: //
    /* 
    const strongElement = document.createElement("strong")
    //nicht elegant, weil Textknoten verändert wird
    strongElement.innerText = "Hallo Welt"
    liElement.appendChild(strongElement)
    */
    /*
    // zweite Option: //
    // eleganter, aber noch nicht so kompakt
    const strongElement = document.createElement("strong")
    const textNode = document.createTextNode("Hallo Welt")
    strongElement.appendChild(textNode)
    liElement.appendChild(strongElement)
    */
    
    // dritte Option: //
    // Verbindung von Zeile 20 und 21
    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode("Hallo Welt"))
    liElement.appendChild(strongElement)
   
    const ulElement = document.querySelector("ul.list-group")
    ulElement.appendChild(liElement)
  })
}) 