'use strict';
const KEY_ENTER = 13


/* Probleme derzeit:
1. Neue Elemente können nicht gelöscht werden
2. Click auf ein Element funktioniert nicht
*/


document.addEventListener("DOMContentLoaded", () => {
    const fieldInputs = document.getElementsByClassName("new-todo")
          // über "X" wird das jeweilige Element gelöscht.
    const closeButtons = document.querySelectorAll("[class='destroy']")

    /* funktioniert: */
    const liElements = document.getElementsByTagName("li")

    const removeLiElement = (liElement) => {
        liElement.remove()
    }

    for (const liElement of liElements) {
        liElement.addEventListener("click", () => {
          removeLiElement(liElement)
      })      
    }
    
    /* das funktioniert auch, aber nicht bei neuen Todos (Remove Todo):  
    for (const closeButton of closeButtons) {
          closeButton.addEventListener("click", () => {
            // besser das hier (weil das (Eltern-)Element komplett gelöscht wird):
            closeButton.parentElement.remove()
          })
    }
    */
    // eigentlich unsinnig, weil nur ein Input besteht:
    for (const fieldInput of fieldInputs) {
      fieldInput.addEventListener("keypress", (event) => {
        // console.log("fieldInputs: ", fieldInputs)
        // console.log(event)
        if (event.keyCode === KEY_ENTER) {
          // alert("Enter wurde gedrückt!")
          // Erst das Listenelement komplett erstellen
          // Listenelement erstellen (<li>):
          console.log(fieldInput.value)
          const liElement = document.createElement("li")
          const divElement = document.createElement("div")
          const InputElement = document.createElement("input")
          const LabelElement = document.createElement("label")
          const ButtonElement = document.createElement("button")
          const strongElement = document.createElement("strong")
          liElement.appendChild(strongElement)
          const ulElement = document.querySelector("ul.todo-list")
          // dem div eine Klasse zuordnen:
          divElement.classList.add("view")
          InputElement.classList.add("toggle")
          console.log("InputElement:", InputElement.checked)
          if (InputElement.checked === false){
            InputElement.checked = true
          }
          // ("checkbox")
          ButtonElement.classList.add("destroy")
          
          // Elemente dem liElement zuordnen
          liElement.appendChild(divElement)
          liElement.appendChild(InputElement)
          liElement.appendChild(LabelElement)
          liElement.appendChild(ButtonElement)
          LabelElement.appendChild(document.createTextNode(fieldInput.value))
          
          // ul-Gruppe der Todo-Liste
          // liElement.classList.add("completed")
          
          // strongElement.appendChild(document.createTextNode("Hallo Welt"))
          
          ulElement.appendChild(liElement)

          /* das funktioniert: */
          liElement.addEventListener("click", () => {
            removeLiElement(liElement)
          }) 
                
        }
      })
  }
});
