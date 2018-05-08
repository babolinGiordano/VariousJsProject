var tot = 0;
var selected = '';

calculator.onclick = function(event) {

  switch (event.target.textContent) {
    case '0':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '1':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '2':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '3':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '4':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '5':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '6':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '7':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '8':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '9':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case '.':
      var presente = document.getElementById("result").textContent;
      presente += event.target.textContent;
      document.getElementById("result").innerText = presente;
      break;
    case 'C':
      var presente = '';
      document.getElementById("result").innerText = presente;
      break;

    case '+':
      tot = document.getElementById("result").textContent;
      selected = event.target.textContent;
      var presente = '';
      document.getElementById("result").innerText = presente;
      break;
    case '-':
      tot = document.getElementById("result").textContent;
      selected = event.target.textContent;
      var presente = '';
      document.getElementById("result").innerText = presente;
      break;
    case '*':
      tot = document.getElementById("result").textContent;
      selected = event.target.textContent;
      var presente = '';
      document.getElementById("result").innerText = presente;
      break;
    case '/':
      tot = document.getElementById("result").textContent;
      selected = event.target.textContent;
      var presente = '';
      document.getElementById("result").innerText = presente;
      break;

    case '=':
      var presente = document.getElementById("result").textContent;
      var res = calcola();
      document.getElementById("result").innerText = res;
      break;

    default:
      break;
  }
};

function calcola() {
  switch (selected) {
    case '+':
      var presente = document.getElementById("result").textContent;
      tot = Number(tot) + Number(presente);
      return tot;
      break;
    case '-':
      var presente = document.getElementById("result").textContent;
      tot = Number(tot) - Number(presente);
      return tot;
      break;
    case '*':
      var presente = document.getElementById("result").textContent;
      tot = Number(tot) * Number(presente);
      return tot;
      break;
    case '/':
      var presente = document.getElementById("result").textContent;
      tot = Number(tot) / Number(presente);
      return tot;
      break;

    default:
      break;
  }
}