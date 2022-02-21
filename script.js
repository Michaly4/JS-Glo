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


const btns = document.querySelectorAll('button')
btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    if(e.target.id == "btn"){
      let valueInp = inpText.value;
  kvd.style.backgroundColor = `${valueInp}`;
  inpText.value = "";
    }
    else if(e.target.id == "e_btn"){
      e_btn.style.display = "none";
    }
  })
});
range.addEventListener('input', change);
function change() {
  let rangeValue = range.value;
  pi.style.width = `${rangeValue}%`;
  pi.style.height = `${rangeValue}%`
  rangeSpan.textContent = rangeValue + "%";
};












/*
//  *** function ***
function click() {
   let valueInp = inpText.value;
   kvd.style.backgroundColor = `${valueInp}`;
   inpText.value = "";
   e_btn.style.display = "none";
   pi.style.display = "none";
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
*/
