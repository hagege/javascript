"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const helpElements = document.querySelectorAll("[data-help]")
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }

  // die DOM navigieren
  // Die schnelle Problembehandlung ... Vorschauproblem
  const cardElement = document.querySelector(".card")

  console.log("parentElement: ", cardElement.parentElement)
  console.log("children: ", cardElement.children)
  console.log("nextElementSibling: ", cardElement.nextElementSibling)
  console.log("previousElementSibling: ", cardElement.previousElementSibling)


}) 