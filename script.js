"use strict"

///////////////////////////////////////
// ===== getElementById ===============
// console.log(document.getElementById('list')); // return the ul element which is assign an id="list"
// let element = document.getElementById('list');
// console.log(element); // return the ul element which is assign an id="list"
// console.log(typeof element); //object

//////getElementByID with the properties textContent
//console.log(element.textContent = "Hello Dexter"); 
//const heading = document.getElementById('heading').textContent;
//console.log(heading); //Note Manager
//assign the ul to new value as heading
// const ulElement = document.getElementById('list');
// ulElement.textContent = heading;

//////getElementByID with the properties innerHTML
let element = document.getElementById('list');
console.log(element.innerHTML);
console.log(element.innerHTML ="Hello Dexter");
console.log(element.innerHTML ="<h2>Hello Dexter</h2>");
//console.log(element.textContent ="<h2>Hello Dexter</h2>");

////////////////////////////////////////////////////////////////
                          


