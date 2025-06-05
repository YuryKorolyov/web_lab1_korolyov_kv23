const basicDisplay = document.getElementById('basic-display');
const basicButtons = document.getElementById('basic-buttons');
let basicInput = '';

basicButtons.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  const value = e.target.textContent;
  if (value === '=') {
    try {
      basicInput = eval(basicInput).toString();
    } catch {
      basicInput = 'Ошибка';
    }
  } else {
    if (basicInput === '0' || basicInput === 'Ошибка') basicInput = '';
    basicInput += value;
  }
  basicDisplay.textContent = basicInput;
});

const progDisplay = document.getElementById('prog-display');
const progButtons = document.getElementById('prog-buttons');
let progInput = '';
let base = 10;

function parseInput(str) {
  const parts = str.trim().split(' ');
  if (parts.length === 1) return parseInt(parts[0], base);
  if (parts.length === 2 && parts[0] === 'NOT') {
    return ~parseInt(parts[1], base);
  }
  if (parts.length === 3) {
    const [a, op, b] = parts;
    const x = parseInt(a, base);
    const y = parseInt(b, base);
    switch (op) {
      case 'AND': return x & y;
      case 'OR': return x | y;
      case 'XOR': return x ^ y;
    }
  }
  return 0;
}

function toBase(val, base) {
  return val.toString(base).toUpperCase();
}

progButtons.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  const value = e.target.textContent;

  if (['BIN', 'OCT', 'DEC', 'HEX'].includes(value)) {
    switch (value) {
      case 'BIN': base = 2; break;
      case 'OCT': base = 8; break;
      case 'DEC': base = 10; break;
      case 'HEX': base = 16; break;
    }
    progDisplay.textContent = toBase(parseInput(progInput), base);
    return;
  }

  if (['AND', 'OR', 'XOR', 'NOT'].includes(value)) {
    progInput += ' ' + value + ' ';
  } else {
    progInput += value;
  }

  try {
    const result = parseInput(progInput);
    progDisplay.textContent = toBase(result, base);
  } catch {
    progDisplay.textContent = 'Ошибка';
  }
});

document.getElementById('basic').addEventListener('change', () => {
  document.querySelector('.basic-content').style.display = 'block';
  document.querySelector('.prog-content').style.display = 'none';
});

document.getElementById('prog').addEventListener('change', () => {
  document.querySelector('.basic-content').style.display = 'none';
  document.querySelector('.prog-content').style.display = 'block';
});
