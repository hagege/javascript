"use strict"

// 1. Art
// Man sagt: function declaration
function sayHello() {
  const a = 5
  const b = 10
  console.log("sayHello!", a*b)
}
sayHello()

// 2. Art, anonyme Funktion
// Man sagt: function expression
// wir weisen dieser Variablen eine (anonyme) Funktion (Wert) zu, die in diesem Fall die Ausgabe eines Textes über console.log enthält:
const sayHello2 = function() {
  const a = 5
  const b = 20
  console.log("sayHello2!", a*b)
}
sayHello2()

// 3. Art, anonyme Funktion
// Man sagt: function expression
const sayHello3 = () => {
  const a = 5
  const b = 30
  console.log("sayHello3!", a*b)
}
sayHello3()