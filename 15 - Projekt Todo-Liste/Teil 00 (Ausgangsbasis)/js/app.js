'use strict';
const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    // hier fehlt noch die richtige Klasse (bei Klick auf ENTER):
    const addToDoButton = document.getElementById("add-student")
    // const fieldInput = document.querySelectorAll("[class='new-todo']")
    const fieldInputs = document.getElementsByClassName("new-todo")
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
    // eigentlich unsinnig, weil nur ein Input besteht:
    for (const fieldInput of fieldInputs) {
      fieldInput.addEventListener("keypress", (event) => {
        // console.log("fieldInputs: ", fieldInputs)
        console.log(event)
        if (event.keyCode === KEY_ENTER) {
          alert("Enter wurde gedrückt!")
          // Erst das Listenelement komplett erstellen
          // Listenelement erstellen (<li>):
          const liElement = document.createElement("li")
          // liElement.appendChild(strongElement)
          // ul-Gruppe der Todo-Liste
          liElement.classList.add("completed")
          /*
          const ulElement = document.querySelector("todo-list")
          ulElement.appendChild(liElement)
          */
        }
      })
}

    // klappt nicht (hier ist der Fehler: 0)
    // auf ENTER soll die neue ToDo-Karte angehängt werden
    /*
    addToDoButton.addEventListener("click", (event) => {
            event.preventDefault()
              
            const text = fieldInput.value
        
            if (text === "") {
              return
            }
            
            // Erst das Listenelement komplett erstellen
            // Listenelement erstellen (<li>):
                        const liElement = document.createElement("li")
            liElement.appendChild(strongElement)
            // ul-Gruppe der Todo-Liste
            liElement.classList.add("todo-list")
            const ulElement = document.querySelector("todo-list")
            ulElement.appendChild(liElement)
        
            fieldInput.value = ""
          })
        

    if (text === "") {
      return
    }

    // Nach der Eingabe und Enter soll eine neue ToDo erstellt werden
    // das hier ist zur Abfrage, wenn ENTER gedrückt wurde
    fieldInput.addEventListener("keydown", (event) => {
        console.log(event)
        
        if (event.keyCode === KEY_ENTER) {
        alert("Enter wurde gedrückt!")
        }
    })
*/
});
