"use strict"

const items = [15, 25, 30, 12, 45, -5, 3, 99, 2]
let anzahl = items.length

items.sort()
console.log("Sortierte Liste ", items)

/*
function sortiere(items, anzahl) {
  let sortierte_items = []
  let unsortierte_items = items
  // for (const i in unsortierte_items) {}
  let element = Math.min(...unsortierte_items)
  let position = items.indexOf(element)
  // element in sortierte Liste zufügen
  sortierte_items.push(element)
  console.log("Sortierte Liste: ", sortierte_items)
  // element aus unsortierter Liste entfernen
  console.log("Unsortierte Liste vorher: ", unsortierte_items)
  unsortierte_items.splice(0, position)
  console.log("Unsortierte Liste nachher: ", unsortierte_items)
  return element
}

console.log(sortiere(items, anzahl))
/*
console.log("Unsortierte Liste ", items, ": ", sortiere(items, anzahl))
*/