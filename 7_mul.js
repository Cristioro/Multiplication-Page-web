const mul = parseFloat(document.getElementById("inputMul").value)
const btnMul = document.getElementById("btnMul")
const ResultTheShow = document.querySelectorAll("#show")

const multiplication = function() {

  for (let i = 1; i < 11; i++) {
      let result = mul * i;
      let info = [mul, i, result];
    
      for(let r = 0; r < 30; r++) {
      
      for (let v = 0; v < 2; v++) {
        const elementShow = ResultTheShow[r];
        const elementInfo = info[v]
        console.log(mul)
        
        elementShow.innerHTML = elementInfo
     }
    }
    
  }
}

btnMul.addEventListener("click", multiplication)
