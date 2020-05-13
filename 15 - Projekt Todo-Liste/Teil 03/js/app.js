'use strict';

const KEY_ENTER = 13

/*
<li>
	<div class="view">
		<input class="toggle" type="checkbox">
		<label>Buy a unicorn</label>
		<button class="destroy"></button>
	</div>
</li>
	*/

document.addEventListener("DOMContentLoaded", () => {
	const newTodoElement = document.querySelector(".new-todo")
	const todoListElement = document.querySelector(".todo-list")
	const footerElement = document.querySelector(".footer")

	// soll ausschließlich für dieses Element wirken (daher zusätzlich strong)
	const todoCountElement = document.querySelector(".todo-count strong")

	// Funktion für Fußzeile einblenden, wenn Todo-Elemente da sind
	const refreshFooter = () => {
		// es sind keine Todos da:
		if (todoListElement.children.length === 0) {
			footerElement.style.display = "none"
		} else {
			footerElement.style.display = ""
		}

		/*
		let todoCounter = 0
		for (const todoListItem of todoListElement.children) {
			// enthält nicht die Klasse completed
			if (!todoListItem.classList.contains("completed")) {
				todoCounter++
			}
		}
		*/

		// kompkater für die FOR-Schleife ist das hier in einer Zeile:
		let todoCounter = todoListElement.querySelectorAll("li:not(.completed)").length
		todoCountElement.innerText = todoCounter
	}

	// Funktion für Fußzeilen direkt am Anfang ausführen
	refreshFooter()

	const addCallbacksForLi = (liElement) => {
		const checkboxElement = liElement.querySelector(".toggle")
		const destroyButtonElement = liElement.querySelector(".destroy")

		checkboxElement.addEventListener("change", () => {
			if (checkboxElement.checked) {
				liElement.classList.add("completed")
			} else {
				liElement.classList.remove("completed")
			}

			refreshFooter()
		})

		destroyButtonElement.addEventListener("click", () => {
			liElement.remove()

			refreshFooter()
		})
	}


	newTodoElement.addEventListener("keypress", (event) => {
		if (event.which === KEY_ENTER && newTodoElement.value !== "") {

			const newButtonElement = document.createElement("button")
			newButtonElement.classList.add("destroy")
			
			const newLabelElement = document.createElement("label")
			newLabelElement.appendChild(
				document.createTextNode(newTodoElement.value)
			)

			const newInputCheckbox = document.createElement("input")
			newInputCheckbox.type = "checkbox"
			newInputCheckbox.classList.add("toggle")

			const newDivElement = document.createElement("div")
			newDivElement.classList.add("view")
			newDivElement.appendChild(newInputCheckbox)
			newDivElement.appendChild(newLabelElement)
			newDivElement.appendChild(newButtonElement)

			const newLiElement = document.createElement("li")
			newLiElement.appendChild(newDivElement)

			addCallbacksForLi(newLiElement)

			todoListElement.prepend(newLiElement)

			newTodoElement.value = ""

			refreshFooter()
		}
	})
});
