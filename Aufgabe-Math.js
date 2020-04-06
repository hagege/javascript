"use strict"

// Aufgabe 1:
// 
// Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert
// werden. Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.
//
// Wandle zuerst den Betrag in die englische Schreibweise um (15.37). Ersetze
// dazu mit Hilfe von .replace() das Komma durch einen Punkt.
//
// Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und
// rechne ihn in Cent um. 
// 
// Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann. Der 
// Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt
// (vereinfacht den Code etwas).
// 
// Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den 
// Rest. Versuche, zuerst große Münzen auszugeben!
//
// Tipp: Rechne den Betrag am besten zuerst in Cents um. Sonst treten leicht
// Rundungsfehler auf, die das Programm unnötig kompliziert machen!
//
// Natürlich soll das Programm so geschrieben werden, dass jeder
// Beliebige Betrag zurückgegeben werden kann.
// 
// Beispielausgabe: 
//  - 7x 2€ Münze
//  - 1x 1€-Münze
//  - 0x 50 Cent-Münze
//  - 1x 20 Cent-Münze
//  - 1x 10 Cent-Münze
//  - 1x 5 Cent-Münze
//  - 1x 2 Cent-Münze
//  - 0x 2 Cent-Münze

let amountStr = "15,37";
amountStr = amountStr.replace(",", ".");
console.log(amountStr);
amountStr = parseFloat(amountStr);
console.log(amountStr);
amountStr = amountStr * 100;
console.log(amountStr);
// 2€ Münzen
let anzahl = Math.floor(amountStr / 200);
let rest = amountStr % 200;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 2€ Münze; Rest:" + rest);
amountStr = amountStr - anzahl*200
// console.log(amountStr);
// 1€ Münzen
anzahl = Math.floor(amountStr / 100);
rest = amountStr % 100;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 1€ Münze; Rest:" + rest);
amountStr = amountStr - anzahl*100
// console.log(amountStr);
// 50Cent Münzen
anzahl = Math.floor(amountStr / 50);
rest = amountStr % 50;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 50 Cent Münze; Rest:" + rest);
amountStr = amountStr - anzahl*50
// console.log(amountStr);
// 20Cent Münzen
anzahl = Math.floor(amountStr / 20);
rest = amountStr % 20;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 20 Cent Münze; Rest:" + rest);
amountStr = amountStr - anzahl*20
// console.log(amountStr);
// 10 Cent Münzen
anzahl = Math.floor(amountStr / 10);
rest = amountStr % 10;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 10 Cent Münze; Rest:" + rest);
amountStr = amountStr - anzahl*10
// console.log(amountStr);
// 5 Cent Münzen
anzahl = Math.floor(amountStr / 5);
rest = amountStr % 5;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 5 Cent Münze; Rest:" + rest);
amountStr = amountStr - anzahl*5
// console.log(amountStr);
// 2 Cent Münzen
anzahl = Math.floor(amountStr / 2);
rest = amountStr % 2;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 2 Cent Münze; Rest:" + rest);
amountStr = amountStr - anzahl*2
// console.log(amountStr);
// 1 Cent Münzen
anzahl = Math.floor(amountStr / 1);
rest = amountStr % 1;
// console.log("Anzahl: " + anzahl);
console.log(" - " + anzahl + "x 1 Cent Münze; Rest:" + rest);
amountStr = amountStr - anzahl*1
// console.log(amountStr);



/////////////////////////////////////////////////////////////////////////////

// Aufgabe 2
// 
// In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben. 
// Schreibe ein Programmn welches ca. 15-20% Tringeld auf eine Restaurant-
// Rechnung aufschlägt. 
//
// Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht 
// zu krumm ist.
//
// Kombiniere dazu geschickt die Rundungsfunktionen, Divisionen oder 
// Multiplikationen.
//
// Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen
// ausgegeben wird. Beispiel: "Der Gesamtbetrag beträgt 20.00$"
//
// - Beispiel: Rechungsbetrag 17.00$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 16.50$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 10.00$    -> Der Gesamtbetrag beträgt 12.50$
//
// Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr 
// funktioniert!
let rechnungsbetrag = 17.00;
let gesamt = Math.ceil(rechnungsbetrag * 1.1 / 2.5);
console.log(gesamt);
gesamt =  gesamt * 2.5;
console.log("Der Gesamtbetrag beträgt " + gesamt.toFixed(2) + "$");