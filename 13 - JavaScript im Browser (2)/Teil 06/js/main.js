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

  const cardElements = document.getElementsByClassName("card")
  for(const cardElement of cardElements) {
    console.log(cardElement.style)
    console.log(cardElement.style["background-color"])
    
    if (cardElement.style["background-color"] === "") {
      cardElement.style["background-color"] = "lightblue"
    }
    
    if (cardElement.style.backgroundColor === "") {
      cardElement.style.backgroundColor = "lightblue"
    }

    cardElement.addEventListener("click", () => {
      // Karte wird ausgeblendet
      cardElement.style.display = "none"
    })
    

  }

}) 