"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const dateElement = document.getElementById("date-countdown")
  console.log(dateElement.innerText)
  // funktioniert nicht, weil die tags als Texte umgesetzt werden
  // dateElement.innerText = "<strong>24.07.2021</strong>"
  // daher (sollte aber vermieden werden)
  dateElement.innerHTML = "<strong>24.07.2021</strong>"
  
})
