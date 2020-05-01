"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const dateElement = document.getElementById("date-countdown")
  console.log(dateElement.innerText)

  dateElement.innerText = "<strong>24.07.2021</strong>"
  // innerHTML können Sicherheitslücken entstehen, daher möglichst vermeiden.
  // dateElement.innerHTML = "<strong onclick=\"alert('hi')\">24.07.2021</strong>"
  
})
