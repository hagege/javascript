'use strict';

const KEY_ENTER = 13

/* Code für das Listenelement:
<li>
	<div class="view">
		<input class="toggle" type="checkbox">
		<label>Buy a unicorn</label>
		<button class="destroy"></button>
	</div>
</li>
	*/

document.addEventListener("DOMContentLoaded", () => {
	// holt jeweils das erste Element der Klasse (new-todo) - hier gibt es auch nur ein Input, also ein Element
	const newTodoElement = document.querySelector(".new-todo")
	// holt das erste Element der Klasse (todo-list)
	const todoListElement = document.querySelector(".todo-list")


	newTodoElement.addEventListener("keypress", (event) => {
		// Enter gedrückt und Wert nicht leer:
		if (event.which === KEY_ENTER && newTodoElement.value !== "") {
			
			// Neues Buttonelement
			const newButtonElement = document.createElement("button")
			newButtonElement.classList.add("destroy")
			
			// Neues Labelelement
			const newLabelElement = document.createElement("label")
			newLabelElement.appendChild(
				// Wert des Eingabefeldes wird geholt
				document.createTextNode(newTodoElement.value)
			)

			// Neues Inputelement
			const newInputCheckbox = document.createElement("input")
			newInputCheckbox.type = "checkbox"
			newInputCheckbox.classList.add("toggle")

			// Neues DivElement
			const newDivElement = document.createElement("div")
			newDivElement.classList.add("view")
			newDivElement.appendChild(newInputCheckbox)
			newDivElement.appendChild(newLabelElement)
			newDivElement.appendChild(newButtonElement)

			// Neues Listenelement (li)
			const newLiElement = document.createElement("li")
			newLiElement.appendChild(newDivElement)
			
			// Listenelement kommt an den Anfang
			todoListElement.prepend(newLiElement)

			// Wert wieder wieder zurücksetzen:
			newTodoElement.value = ""
		}
	})
});
