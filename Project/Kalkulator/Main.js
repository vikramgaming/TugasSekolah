let output = document.getElementById("output");

function hover(n) {
  output.textContent += n;
};

function clearOutput() {
  output.textContent = "";
}

function backspace() {
  output.textContent = output.textContent.slice(0, -1);
}

function calculate() {
  let expresion = output.textContent.replace(/÷/g, "/").replace(/×/g, "*");
  try {
    output.textContent = eval(expresion);
  }
  catch(error) {
    output.textContent = "";
  }
}