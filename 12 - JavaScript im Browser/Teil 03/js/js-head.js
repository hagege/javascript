"use strict"

// alert blockiert den Browser, bis man ok klickt
// Javascript im head: erst nach Ausführung des gesamten Codes im head erfolgt die weitere Verarbeitung
// deswegen wird noch gar keine Seite angezeigt, daher Javascript möglichst weit nach unten
alert("js-head")

const result = 5 + 6
console.log(result)