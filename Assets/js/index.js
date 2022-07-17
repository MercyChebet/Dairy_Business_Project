const shedA = 510;
const shedB = 308;
const shedC = 486;
const shedD = 572;

let totalProduce = 0;



var no = "Litres Per Shed : <br>"; 
var items= document.getElementsByName('shed'); 
function chebet() {  for (var i = 0; i < items.length; i++) { 
    var a = items[i]; 
    no = no +  a.value + " " +"<br>"; 
} 
document.getElementById("input").innerHTML = no; 
document.getElementById("milk").innerHTML = "Productions"; 
} 
var totalLitres = 0;
function totalCapacity(){
for(var i = 0; i < items.length; i++)
{
    totalLitres = totalLitres + items[i];
}
}

var dailyIncome;
var rate = 45;
dailyIncome = totalCapacity() * 45;
  weeklyIncome = dailyIncome * 7;
  yearlyIncome = dailyIncome * 366;