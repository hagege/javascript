"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")

  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(nameInput.value)
  })

  // wenn Wert geändert wird und man aus dem Feld auf eine andere Stelle des Formulars klickt:
  nameInput.addEventListener("change", (event) => {
    console.log("change:", nameInput.value)
  })

  // wenn Taste losgelassen wird, wird Event geworfen
  nameInput.addEventListener("keyup", (event) => {
    console.log("keyup:", nameInput.value)
  })
}) 