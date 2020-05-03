"use strict"

document.addEventListener("DOMContentLoaded", () => {
  // die ID korrespndiert mit der ID des Elements aus der HTML-Datei:
  const contactButton = document.getElementById("contact-me")

/*
  const onClick = (event) => {
    console.log(event)
    alert("Kontakt wurde geklickt!")
  }

//   onClick("Hier bin ich")

  contactButton.addEventListener("click", onClick)

*/
  contactButton.addEventListener("click", (event) => {
    event.preventDefault()
    alert("Kontakt wurde geklickt!")
  })

  /*
  contactButton.addEventListener("click", (a) => {
    console.log(a)
    alert("Kontakt wurde geklickt!")
  })
*/

})
