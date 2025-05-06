// Function to initialize the calculator
function initCalculator() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
  
    // Event listeners
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        if (value) {
          display.value += value;
        } else if (button.id === 'clear') {
          display.value = '';
        } else if (button.id === 'equals') {
          calculate(display);
        }
      });
    });
  }
  
  // Function to perform calculation
  function calculate(display) {
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (e) {
      display.value = 'Error';
    }
  }
  
  // Initialize calculator when DOM is loaded
  document.addEventListener('DOMContentLoaded', initCalculator);
  