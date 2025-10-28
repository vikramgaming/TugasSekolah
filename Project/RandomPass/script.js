const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = 1234567890;
let input = ""
let output = ""
const text = document.getElementById("output");

function submit() {
  const lowerCheck = document.getElementById("addLower").checked;
  const upperCheck = document.getElementById("addUpper").checked;
  const numberCheck = document.getElementById("addNumber").checked;
  const salin = document.getElementById("salin");
  let lengthPass = document.getElementById("lengthPass").value;
  salin.style.display = "block";
  
  if(!lowerCheck && !upperCheck && !numberCheck) {
     text.textContent = "Minimal pilih salah satu";
     salin.style.display = "none";
     return;
  }
  if (lengthPass <= 0) {
    text.textContent = "Harus lebih dari 0 Maksimal 12";
    salin.style.display = "none";
    return;
  }
  
  if (lowerCheck) {
    input += lower;
  }
  if (upperCheck) {
    input += upper;
  }
  if (numberCheck) {
    input += number;
  }
  
  if (lengthPass > 12) {
    lengthPass = 12;
  }
  for (i=0;i<lengthPass;i++){
    const random = Math.floor(Math.random() * input.length - 1) + 1;
    output += input[random];
  }
  text.textContent = output;
    
  input = ""
  output = ""
};

function copy() {
  navigator.clipboard.writeText(text.innerText);
}