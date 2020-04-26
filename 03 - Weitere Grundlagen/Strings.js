"use strict"

let greeting = " ---Hallo Welt!--- "

// Die Anzahl der Zeichen in einem String
console.log(greeting.length);

// Ein einzelnes Zeichen abfragen
console.log(greeting.charAt(0));
console.log(greeting[4]);

// Wo findet sich ein Zeichen in einem String?
// wichtig: Groß- und Kleinschreibung der Funktionen!
console.log(greeting.indexOf("!"));
console.log(greeting.indexOf("---",10));

// Großbuchstaben bzw. Kleinbuchstaben
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// Text ersetzen
console.log(greeting.replace("!", "!\n!!"));

// Zeichen rechts und links vom String entfernen
console.log(greeting.trim());

console.log(greeting.trim().length);