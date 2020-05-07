"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const closeButtons = document.querySelectorAll("[data-dismiss='alert']")

  for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", () => {

      // nicht so gut ist (weil das Element weiterhin existiert):
      // closeButton.parentElement.style.display = "none"
      // besser das hier (weil das Element komplett gelöscht wird):
      closeButton.parentElement.remove()
    })
  }
}) 