
let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let date = new Date();
const day2 = document.getElementById('fordays');
let day = date.getDay() -1;

week.forEach(function (item,i) {
   let newdiv = document.createElement('div');
   console.log(item,i);
   if(i === day){
      newdiv.classList.add('today');
      newdiv.textContent = week[i];
   }
   if (item == "Saturday" || item == "Sunday") { // Если выходные то
      newdiv.classList.add('italic'); // Делаем дополнительно курсивом (Даже если уже жирным выделено)
      newdiv.textContent = week[i]; // Вставляем текст
  } else{
      newdiv.textContent = week[i]; // Если не текущий день и не выходные, то просто вставляем текст без стилей
  }
  day2.appendChild(newdiv);
  
});



//document.write(" Day: "+ week[date.getDay()] + "<br>");