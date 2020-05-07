'use strict';
const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    // hier fehlt noch die richtige Klasse (bei Klick auf ENTER):
    const addToDoButton = document.getElementById("add-student")
    const nameInput = document.getElementById("nameInput")
        // über "X" wird das jeweilige Element gelöscht.
    const closeButtons = document.querySelectorAll("[class='destroy']")
    // das funktioniert schon (Remove Todo):  
    for (const closeButton of closeButtons) {
          closeButton.addEventListener("click", () => {
            // console.log("Closebuttons: ", closeButtons)
            // besser das hier (weil das (Eltern-)Element komplett gelöscht wird):
            closeButton.parentElement.remove()
          })
    }
    // klappt nicht (hier ist der Fehler: 0)
    addToDoButton.addEventListener("click", (event) => {
            event.preventDefault()
              
            const text = nameInput.value
        
            if (text === "") {
              return
            }
        
            const strongElement = document.createElement("strong")
            strongElement.appendChild(document.createTextNode(text))
        
            const liElement = document.createElement("li")
            liElement.appendChild(strongElement)
            liElement.classList.add("list-group-item")
        
            studentList.appendChild(liElement)
        
            nameInput.value = ""
          })
        

    if (text === "") {
      return
    }

    // Nach der Eingabe und Enter soll eine neue ToDo erstellt werden
    // das hier ist zur Abfrage, wenn ENTER gedrückt wurde
    nameInput.addEventListener("keydown", (event) => {
        console.log(event)
        
        if (event.keyCode === KEY_ENTER) {
        alert("Enter wurde gedrückt!")
        }
    })

});
