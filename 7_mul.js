
const btnMul = document.getElementById("btnMul")
const ResultTheShow = document.querySelectorAll("#show")

const multiplication = function() {
  const mul = parseFloat(document.getElementById("inputMul").value)

  for (let i = 1; i < 11; i++) {
      let result = mul * i;
      const info = [mul, i, result];
    
      for(let r = 0; r < 30; r++) {
      
        for (let v = 0; v < 3; v++) {
          const elementShow = ResultTheShow[r];
          const elementInfo = info[v]
          
          elementShow.textContent = elementInfo
     }
    }
    
  }
}

btnMul.addEventListener("click", multiplication)
