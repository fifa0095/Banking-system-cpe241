// let pin = '';

// function addPinNumber(number) {
//   if (pin.length < 4) {
//     pin += number;
//     updatePinDisplay();
//   }
// }

// function clearPin() {
//   pin = '';
//   updatePinDisplay();
// }

// function submitPin() {
//   // Replace this with your own code to submit the PIN and check if it's correct
//   alert(`Submitted PIN: ${pin}`);
//   clearPin();
// }

// function updatePinDisplay() {
//   const pinDisplay = document.querySelector('.pin-display');
//   pinDisplay.value = pin;
// }



// const pinInput = document.getElementById('pin-input');
// const pinButtons = document.querySelectorAll('.pin-button');
// const clearButton = document.getElementById('clear-button');
// const submitButton = document.getElementById('submit-button');
// const message = document.getElementById('message');
// let pin = '';

// pinButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     pin += button.innerText;
//     pinInput.value = '*'.repeat(pin.length);
//   });
// });

// clearButton.addEventListener('click', () => {
//   pin = '';
//   pinInput.value = '';
// });

// submitButton.addEventListener('click', () => {
//   if (pin === '1234') {
//     message.innerText = 'Pin correct! Access granted.';
//   } else {
//     message.innerText = 'Pin incorrect! Try again.';
//   }
// });


const pinInput = document.getElementById('pin-input');
const pinButtons = document.querySelectorAll('.pin-button');
const clearButton = document.getElementById('clear-button');
const submitButton = document.getElementById('submit-button');
const message = document.getElementById('message');
let pin = '';

pinButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (pin.length < 6) {
      pin += button.innerText;
      pinInput.value = '*'.repeat(pin.length);
    }
  });
});

clearButton.addEventListener('click', () => {
  pin = '';
  pinInput.value = 99999;
  console.log(pinInput.value)
});

pinInput.addEventListener('keydown', (event) => {
  if (event.key >= 0 && event.key <= 9 && pin.length < 6) {
    pin += event.key;
    pinInput.value = '*'.repeat(pin.length);
  }
});

submitButton.addEventListener('click', () => {
  if (pin === '1234') {
    message.innerText = 'Pin correct! Access granted.';
  } else {
    message.innerText = 'Pin incorrect! Try again.';
  }
});
