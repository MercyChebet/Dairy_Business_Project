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
  function dayAdd(){
    console.log(dailyIncome);
  }
  function weekAdd(){
    console.log(weeklyIncome);
  }
  function yearAdd(){
    console.log(yearlyIncome);
  }
  document.getElementById('daily').addEventListener('click',dayAdd());
  document.getElementById('weekly').addEventListener('click',weekAdd());
  document.getElementById('yearly').addEventListener('click',yearAdd());
  var mon = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayOfMonth= [ 31,29,31,30,31,30,31,31,30,31,30,31];
  for (i = 0; i<mon.length; i++){
    var sum = dayOfMonth[i] *dailyIncome;
    document.getElementById('monthly')= 'Your income for ' + mon[i] +  ' is  Ksh' + sum;
}
function promptDailyIncome() {
    var userIncome = prompt("Please provide amount of milk in litres");
    alert("Your production for shed A is" + " " + userInput + " litres");
};
function promptWeeklyIncome() {
    var userIncome = prompt("Please provide amount of milk in litres");
    alert("Your production for shed B is" + " " + userInput + " litres");
};
function promptMOnthlyIncome() {
    var userInput = prompt("Please provide amount of milk in litres");
    alert("Your production for shed C is" + " " + userInput + " litres");
};
function YearlyIncome() {
    var userIncome = prompt("Please provide amount of milk in litres");
    alert("Your production for shed D is" + " " + userInput + " litres");
};