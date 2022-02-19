'use strict';
const adv = document.querySelector(".adv");
adv.remove();
const body = document.body;
body.style.backgroundImage = "url(./image/adv.jpg)";

const titleTree = document.querySelector("h1");
const books = document.querySelectorAll(".book");
books[0].before(books[1]);
books[2].before(books[4]);
books[3].after(books[2]);
books[2].before(books[5]);

let titleLink = books[4].querySelector("a");
titleLink.innerHTML = "Книга 3. this и <b>Прототипы</b> Объектов";


let book_2 = books[0].querySelectorAll("li");
book_2[3].after(book_2[8]);
book_2[5].after(book_2[6]);
book_2[3].after(book_2[6]);

let book_5 = books[5].querySelectorAll("li");
book_5[10].after(book_5[5]);
book_5[1].after(book_5[9]);
book_5[6].before(book_5[2]);

let book_6 = books[2].querySelectorAll("li");
let li = document.createElement("li", "Глава 8: За пределами ES6");
li.textContent = "Глава 8: За пределами ES6";
book_6[8].append(li);
