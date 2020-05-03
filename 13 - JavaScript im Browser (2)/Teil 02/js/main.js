"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".container h1")
  console.log(heading)

  const cardHeadings = document.querySelectorAll(".card div.card-header")
  console.log(cardHeadings)

  // nur h1 innerhalb container durchsuchen:
  const container = document.querySelector(".container")
  const containerHeading = container.querySelectorAll("h1")

  console.log(containerHeading)

}) 