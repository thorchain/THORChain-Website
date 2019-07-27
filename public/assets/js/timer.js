
var targetDate = new Date("July 20 2019 08:00 UTC"); // target date

function calcDays()
{
  var currentDate = new Date();
  var day  = (targetDate - currentDate) / (1000 * 60 * 60 * 24);

   return day;
}

function calcHours(day)
{
   var hour = (day  - Math.floor(day)) * 24;

   return hour;
}

function calcMin(hour)
{
   var min  = (hour  - Math.floor(hour)) * 60;

   return min;
}

function calcSec(min)
{
   var sec  = (min  - Math.floor(min)) * 60;
   return sec;
}

function worldcup()
{
   targetDate = worldCup;
}

function christmas()
{
   targetDate = xMas;
}

function newYears()
{
   targetDate = newYrs;
}

 function countdown()
{
   var day  = calcDays();
   var hour = calcHours(day);
   var min  = calcMin(hour);
   var sec  = calcSec(min);

   document.getElementById("fday").innerHTML  = Math.floor(day);
   document.getElementById("fhour").innerHTML = Math.floor(hour);
   document.getElementById("fmin").innerHTML  = Math.floor(min);
   document.getElementById("fsec").innerHTML  = Math.floor(sec);
}
