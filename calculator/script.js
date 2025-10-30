const dispaly = document.getElementById("display");
function appendToDisplay(input){
  dispaly.value += input;
}
function clearDisplay(){
  dispaly.value = "";
}
function calculate(){
  try{
     dispaly.value = eval(dispaly.value);
  }
  catch(error){
     dispaly.value = "Error";
  } 
}

function calculatePercentage() {
  const display = document.getElementById('display');
  let currentValue = parseFloat(display.value);
  
  if (!isNaN(currentValue)) {
    display.value = currentValue / 100;
  }
}


