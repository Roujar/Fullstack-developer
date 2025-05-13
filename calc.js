function initCalculator() 
{
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        if (value) {
          display.value += value;
        } else if (button.id === 'clear') {
          display.value = '';
        } else if (button.id === 'equal') {
          calculate(display);
        }
      });
    });
  }
  
  function calculate(display) {
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (e) {
      display.value = 'Error';
    }
  }
  document.addEventListener('DOMContentLoaded', initCalculator);
  