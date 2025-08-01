
 //your JS code here. If required.
document.getElementById('btn').addEventListener('click', function () {
  const input = document.getElementById('ip').value;
  const outputDiv = document.getElementById('output');
  const num = Number(input);

  // Clear previous output
  outputDiv.textContent = '';

  // First Promise: resolves with input number after 2s
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = ⁠ Result: ${num} ⁠;
      resolve(num);
    }, 2000);
  })
    .then((result1) => {
      // Multiply by 2, wait 2s
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = result1 * 2;
          outputDiv.textContent = ⁠ Result: ${multiplied} ⁠;
          resolve(multiplied);
        }, 2000);
      });
    })
    .then((result2) => {
      // Subtract 3, wait 1s
      return new Promise((resolve) => {
        setTimeout(() => {
          const subtracted = result2 - 3;
          outputDiv.textContent = ⁠ Result: ${subtracted} ⁠;
          resolve(subtracted);
        }, 1000);
      });
    })
    .then((result3) => {
      // Divide by 2, wait 1s
      return new Promise((resolve) => {
        setTimeout(() => {
          const divided = result3 / 2;
          outputDiv.textContent = ⁠ Result: ${divided} ⁠;
          resolve(divided);
        }, 1000);
      });
    })
    .then((result4) => {
      // Add 10, wait 1s
      return new Promise((resolve) => {
        setTimeout(() => {
          const finalResult = result4 + 10;
          outputDiv.textContent = ⁠ Final Result: ${finalResult} ⁠;
        }, 1000);
      });
    })
    .catch((err) => {
      outputDiv.textContent = 'An error occurred: ' + err;
    });
});