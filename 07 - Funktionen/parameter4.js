"use strict"


const message = "Test!"

function sayHello(name) {
  // Hier ist die Variable message lokal in der function definiert:
  const message = "Hallo " + name + "!"
  console.log(message)
}

sayHello("Max")
console.log(message)


console.log("-".repeat(40))


let message2 = "Test!"


function sayHello2(name) {
  // Hier Weiterverwendung der Variablen message2 in der function (global)
  message2 = "Hallo " + name + "!"
  console.log(message2)
}


sayHello2("Max")
console.log(message2)
