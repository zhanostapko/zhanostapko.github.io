let x = '';
let y = '';
let sign = '';
let result = '';

const buttons = document.querySelector('.buttons');
const screenValue = document.querySelector('.calc-screen p');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['-', 'X', '+', '÷'];

buttons.addEventListener('click', (e) => {
  // Dont pushed on button
  if (!e.target.classList.contains('btn')) return;
  //   Clear values
  if (e.target.classList.contains('ac')) {
    x = '';
    y = '';
    sign = '';
    screenValue.textContent = '0';
    return;
  }
  // Detect pushed key type
  screenValue.textContent = '';
  const key = e.target.textContent;
  if (digits.includes(key)) {
    if (y === '' && sign === '') {
      x += key;
      screenValue.textContent = x;
    } else if (x !== '' && sign !== '') {
      y += key;
      screenValue.textContent = y;
    }
  }

  if (signs.includes(key)) {
    sign = key;
    screenValue.textContent = sign;
  }

  // Sign change
  if (e.target.textContent === '+/-') {
    x = x * -1;
    screenValue.textContent = x;
  }
  // Result output
  if (e.target.textContent === '=') {
    if (x !== '' && sign !== '' && y == '') {
      y = x;
    }
    switch (sign) {
      case '+':
        result = +x + +y;
        screenValue.textContent = result;
        break;
      case '-':
        result = +x - +y;
        screenValue.textContent = result;
        break;
      case 'X':
        result = +x * +y;
        screenValue.textContent = result;
        break;
      case '÷':
        result = +x / +y;
        if (result == Infinity) {
          screenValue.textContent = 'Error!!';
          return;
        }
        screenValue.textContent = result;
        break;
    }
    x = result;
    y = '';
    sign = '';
    result = '';
  }
});
