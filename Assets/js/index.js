const shedA = 510;
const shedB = 308;
const shedC = 486;
const shedD = 572;

let totalProduction = shedA + shedB + shedC + shedD;
let selling_price = totalProduction * 45;
let time = 7;



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
    var userIncome = prompt("Please provide amount of income in ksh");
    alert("Your weekly income is " + " " + userIncome + " dollars");
};
function promptWeeklyIncome() {
    var userIncome = prompt("Please provide amount of income in ksh");
    alert("Your weekly income is" + " " + userIncome + " dollars");
};
function promptMonthlyIncome() {
    var userInput = prompt("Please provide amount of income in ksh");
    alert("Your monthly income is" + " " + userIncome + " dollars");
};
function YearlyIncome() {
    var userIncome = prompt("Please provide amount of income in ksh");
    alert("Your yealry income is" + " " + userIncone + " dollars");
};
var incomeOverTime = function (selling_price, time) {
    console.log("Your weekly income is Ksh. " + (selling_price * time));
    console.log("Your yearly income is Ksh. " + (selling_price * (time * 52)));
}
incomeOverTime(selling_price, time);