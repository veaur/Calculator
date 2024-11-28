// HTML Vars
var input1El = document.getElementById("input1");
var input2El = document.getElementById("input2");
var input3El = document.getElementById("input3");
var avgbtnEl = document.getElementById("avg-btn");
var avgoutEl = document.getElementById("avg-out");

// Event Listener
avgbtnEl.addEventListener("click", calcAverage);

// Event Function
function calcAverage() {
  //input
  let num1 = Number(input1El.value);
  let num2 = Number(input2El.value);
  let num3 = Number(input3El.value);
  //Process
  let average = (num1 + num2 + num3) / 3;
  average = average.toFixed(2);
  //output
  avgoutEl.innerHTML = average;

  //clear inputs
  input1El.value = "";
  input2El.value = "";
  input3El.value = "";

  input1El.style.backgroundColor = "lightgreen";
  input2El.style.backgroundColor = "orange";
  input3El.style.backgroundColor = "red";
  avgoutEl.style.border = "3px solid Black";
}
