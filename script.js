'use strict';

// *** variables ***
const range = document.querySelector("#range");
const e_btn = document.getElementById("e_btn");
const btn = document.getElementById("btn");
const rangeSpan = document.getElementById("range-span");
const kvd = document.querySelector("#square");
//const inpText = document.querySelector('input [type="text"]');
const inpText = document.querySelector("#text")
const pi = document.getElementById("circle");

//  *** function ***
function click() {
   let valueInp = inpText.value;
   kvd.style.backgroundColor = `${valueInp}`;
   inpText.value = "";
   e_btn.style.display = "none";
   // pi.style.display = "none";
}


function change() {
   let rangeValue = range.value;
   pi.style.width = `${rangeValue}%`;
   pi.style.height = `${rangeValue}%`;
   rangeSpan.textContent = rangeValue;
}

//  *** events ***
btn.addEventListener('click', click);
range.addEventListener('change', change);