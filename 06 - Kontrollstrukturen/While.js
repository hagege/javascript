"use strict"


let counter = 0
while (counter < 5) {
  // counter = counter + 1
  counter++
  console.log("Counter: " + counter)
}

// Aufpassen! Endlosschleife
/*
while (true) {
  console.log("Hallo Welt!")
}
*/
/*
let students = ["Max"]
while (students.length < 4) {
  console.log("Hallo Welt!")
}
*/

counter = 0
do {
  counter++
  console.log(counter)
} while (counter < 5)