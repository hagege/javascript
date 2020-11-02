"use strict"
function trenner(ausgabe_text) {
  console.log("-".repeat(50));
  console.log(ausgabe_text);
}

let shopping = "    Apfel, Pfirsich, +++Avocado, Mango   ";
let pos_pluszeichen

// Bei einer Einkaufsliste haben sich ein paar Fehler
// eingeschlichen. Unsere Texterkennung des Scans hat ein 
// paar Leerzeichen zu viel erkannt, sowie ein paar 
// Plus-Zeichen eingelesen, die im Original gar nicht 
// existieren. Das möchten wir korrigieren!


// Aufgabe 1: Entferne die Leerzeichen links und rechts, und
// schreibe das Ergebnis zurück in die Variable "shopping"
trenner("Aufgabe 1:");
shopping = shopping.trim();
console.log(shopping);

// Aufgabe 2: Finde die Position der drei Plus-Zeichen, und
// speichere diese in einer Variablen
trenner("Aufgabe 2:");
pos_pluszeichen = shopping.indexOf("+++");
console.log(pos_pluszeichen);

// Aufgabe 3: Schneide die 3 Plus-Zeichen aus und gebe das 
// Ergebnis mit einem console.log aus.
// Verwende dazu einmal die .substr()-Funktion, und einmal
// die .slice()-Funktion
// pos_pluszeichen ist die Anfangsposition (hier 17) und 20 ist die Endposition
// d. h. hier werden
trenner("Aufgabe 3:");
console.log(shopping.slice(pos_pluszeichen,20));
// hier wird der Teilsting ab Position 17 mit einer Länge von 3 ausgegeben:
console.log(shopping.substr(pos_pluszeichen,3));
// der gesamte String ohne "+++":
console.log(shopping.substr(0,pos_pluszeichen) + shopping.substr(pos_pluszeichen + 3));
console.log(shopping.slice(0,pos_pluszeichen) + shopping.slice(pos_pluszeichen + 3));


// 
// Es soll ausgegeben werden: "Apfel, Pfirsich, Avocado, Mango"
// Tipp: Du wirst hierzu 2 Aufrufe der jeweiligen Funktionen 
// benötigen - einmal bis hin zu den +++-Zeichen, und einmal
// für das Stück danach!
console.log(shopping.substr(0,pos_pluszeichen) + shopping.substr(pos_pluszeichen+3));

// Aufgabe 4: Schneide die 3 Plus-Zeichen aus. Verwende dazu
// die .replace()-Funktion!
trenner("Aufgabe 4:");
console.log(shopping.replace("+++",""));

// Aufgabe 5: Jetzt soll die Shopping-Liste ausgegeben werden.
// Wandle die Liste in folgendes Schreibweise um. Platziere
// auch die 2 Striche über / unter der Auflistung, und verwende
// dazu die .repeat()-Funktion!
// 
// --------------------
// Einkaufsliste:
//  - Apfel
//  - Birne
//  - Avocado
//  - Mango
// --------------------
//
// Tipp: Du kannst z.B. mit Hilfe der .replace()-Funktion immer nur ein
// Komma in einen Zeilenumbruch inklusive Bindestrich umwandeln.
// 
// Jetzt hier ist es vollkommen okay, wenn du daher .replace() mehrfach
// hintereinander aufrufst, bis alle Kommas in umgewandelt wurden:
// >> shopping.replace(...).replace(...).replace(...)
// 
// Später lernst du hierfür auch noch eine "elegantere" Methode kennen.
//
// Du darfst wahlweise alles in einem console.log()-Aufruf ausgeben, 
// oder auch mehrere console.log()-Aufrufe verwenden.
trenner("Aufgabe 5:");
shopping = shopping.trim();
shopping = shopping.replace("+++", "")
shopping = shopping.replace("Pfirsich","Birne");
console.log(shopping);

console.log("-".repeat(20));
console.log("Einkaufsliste:");


let shoppingText = shopping
  .replace(", ", "\n - ")
  .replace(", ", "\n - ")
  .replace(", ", "\n - ");

console.log(" - " + shoppingText);

console.log("-".repeat(20));
