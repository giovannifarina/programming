const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const buttonToF = document.getElementById('ctof');
const buttonToC = document.getElementById('ftoc');

function convertFtoC() {
  let fTemp = fahrenheitEl.value;
  let cTemp = (fTemp - 32)/ 1.8;
  celsiusEl.value = cTemp;
}

function convertCtoF() {
  let cTemp = celsiusEl.value;
  let fTemp = cTemp * 1.8 + 32;
  fahrenheitEl.value = fTemp;
}

buttonToF.addEventListener('click',convertCtoF);
buttonToC.addEventListener('click',convertFtoC);