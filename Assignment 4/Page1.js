var todayDate = new Date();

var month = todayDate.getMonth()+1
var day = todayDate.getDate();
var year = todayDate.getFullYear();

console.log(day+"/"+month+"/"+year);
console.log(todayDate);
console.log(day);
console.log(month);
console.log(year);

document.getElementById('output').innerHTML=day+"/"+month+"/"+year;


var todayDate = new Date();

var hours = todayDate.getHours();
var minutes = todayDate.getMinutes();
var seconds = todayDate.getSeconds();

console.log (hours+"/"+minutes+"/"+seconds);
console.log(todayDate);
console.log(hours);
console.log(minutes);
console.log(seconds);

document.getElementById('time').innerHTML=hours+":"+minutes+":"+seconds;
