document.addEventListener("DOMContentLoaded", function() {
  const addBtn = document.getElementById("add");
  const subtractBtn = document.getElementById("subtract");
  const multiplyBtn = document.getElementById("multiply");
  const resetButton = document.getElementById('resetButton');
  


  addBtn.addEventListener("click", performOperation("add"));
  subtractBtn.addEventListener("click", performOperation("subtract"));
  multiplyBtn.addEventListener("click", performOperation("multiply"));

  resetButton.addEventListener('click', () => {
    const matrixInputs = document.querySelectorAll('.matrix-input input' );
    matrixInputs.forEach(input => {
      input.value = '';
      
    });
    const resultCells = document.querySelectorAll('.matrix-result td input');
  resultCells.forEach(cell => {
    cell.value = '';
  });
});
  
    
  });
 



function performOperation(operation) {
  return function() {
    const resultMatrix = [];
    for (let i = 0; i < 3; i++) {
      resultMatrix.push([]);
      for (let j = 0; j < 3; j++) {
        const a = parseFloat(document.getElementById(`a${i}${j}`).value);
        const b = parseFloat(document.getElementById(`b${i}${j}`).value);
        let result = 0;
        if (operation === "add") {
          result = a + b;
        } else if (operation === "subtract") {
          result = a - b;
        } else if (operation === "multiply") {
          result = a * b;
        }
        resultMatrix[i].push(result);
      }
    }

    displayResultMatrix(resultMatrix);
  };
}

function displayResultMatrix(resultMatrix) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const resultCell = document.getElementById(`result${i}${j}`);
      resultCell.value = resultMatrix[i][j];
    }
  }
}

