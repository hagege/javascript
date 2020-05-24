"use strict"

const data = {
  todos: ["JavaScript lernen", "Node.JS lernen"],
  // Funktion innerhalb der Variablen data
  addTodo: function(todo) {
    // Context der Funktion:
    // data landet als "this" in dieser Funktion
    this.todos.push(todo)

    this.printTodos()
  },
  printTodos: function() {
    console.log(this.todos)
  }
}
// Ausgabe von der Variablen data
console.log(data)
data.printTodos()
data.addTodo("3. Todo")
data.addTodo("4. Todo")
// Ausgabe von der Variablen data
console.log(data)
// Ausgabe der todos von data über die Function printTodos()
data.printTodos()

// console.log(data)