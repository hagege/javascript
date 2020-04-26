"use strict"

// https://www.json.org/

// JSON = JavaScript Object Notation

// Von JavaScript nach JSON
// bei JSON muss die property (Eigenschaft) immer in Anführungstrichen geschrieben werden (bei Javascript ist das nicht notwendig)
// hinter der letzten Eigenschaft kommt kein Komma. Das ist bei Javascript an sich egal
const data = [
  {
    "firstname": "Max", 
    "age": 21, 
    "enrolled": true
  },
  {"firstname": "Laura", "age": 35, "enrolled": false}
]

console.log(data)