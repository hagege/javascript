"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      event.stopPropagation()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }
  const cardHeaders = document.getElementsByClassName("card-header")
  for(const cardHeader of cardHeaders) {

    const cardBody = cardHeader.nextElementSibling
    // nicht so elegant:
    // const cardIcon = cardHeader.children[0].children[0]
    // die Klasse .card-toggle-icon befindet sich nur in der HTML-Datei index.html und nicht in der style.css:
    const cardIcon = cardHeader.querySelector(".card-toggle-icon")

    // Cursor uf Hand einschalten:
    cardHeader.style.cursor = "pointer"

    // erst mal alles eingeklappt:
    cardBody.classList.toggle("d-none")
    cardIcon.classList.remove("fa-angle-double-down")   
    cardIcon.classList.add("fa-angle-double-right") 

    cardHeader.addEventListener("click", () => { 
    

      // einfach den style ändern:
      // cardBody.style.display = "none"
      // oder besser: damit wird die Klasse ein- und ausgeschaltet
      cardBody.classList.toggle("d-none")


      // ist cardBody ausgeschaltet?
      if (cardBody.classList.contains("d-none")){
        cardIcon.classList.remove("fa-angle-double-down")   
        cardIcon.classList.add("fa-angle-double-right") 
      } else {
        cardIcon.classList.remove("fa-angle-double-right") 
        cardIcon.classList.add("fa-angle-double-down")   
      }
      

      console.log("CardBody wurde geklickt: ", cardBody)
    })  
  }

  // Lösung, um bei Click auf Alert (i) zu verhindern, das der Body ausgeklappt wird.
  // durch die folgenden Zeilen wird realisiert, dass nur auf das "i" geklickt wurde
  // siehe oben:  event.stopPropagation()
  document.addEventListener("click", (event) => {
    console.log("Dokument wurde geklickt", event)
  })
}) 





/* das hat leider nicht geklappt, aber die Idee war grundsätzlich richtig.
  // Karte komplett ausschalten (display = "none")
  const cardHeaderElements = document.getElementsByClassName("card")
  let schalter = 1
  for(const cardHeaderElement of cardHeaderElements) {
      console.log(cardHeaderElement.style)
    
      cardHeaderElement.addEventListener("click", () => {
      // Karte wird ausgeblendet
      // cardHeaderElement.style.display = "none"
      // .add() fügt eine Klasse hinzu (bg-success stammt aus bootstrap)
      if (schalter === 1){
        cardHeaderElement.classList.add("fa-angle-double-right")
        cardHeaderElement.classList.remove("fa-angle-double-down")
        schalter = 0
      } else {
        cardHeaderElement.classList.add("fas fa-angle-double-down")
        cardHeaderElement.classList.remove("fas fa-angle-double-remove")
        schalter = 1
      }

      if (cardHeaderElement.style.display === "none"){
        cardHeaderElement.style.display = "visible"
      } else {
        cardHeaderElement.style.display = "none"
      }
    })
  }

*/
