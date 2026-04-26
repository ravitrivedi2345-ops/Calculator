const display = document.querySelector('#display');

// Sine function
function sinf() {
  try {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = Math.sin(value * Math.PI / 180);
    }
  } catch (error) {
    display.value = 'Error';
  }
}

// Cosine function
function cosf() {
  try {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = Math.cos(value * Math.PI / 180);
    }
  } catch (error) {
    display.value = 'Error';
  }
}

// Tangent function
function tanf() {
  try {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = Math.tan(value * Math.PI / 180);
    }
  } catch (error) {
    display.value = 'Error';
  }
}

// Square root function
function sqrf() {
  try {
    const value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0) {
      display.value = Math.sqrt(value);
    } else {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}
