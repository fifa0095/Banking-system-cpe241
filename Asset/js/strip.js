let pin = '';

function addPinNumber(number) {
  if (pin.length < 4) {
    pin += number;
    updatePinDisplay();
  }
}

function clearPin() {
  pin = '';
  updatePinDisplay();
}

function submitPin() {
  // Replace this with your own code to submit the PIN and check if it's correct
  alert(`Submitted PIN: ${pin}`);
  clearPin();
}

function updatePinDisplay() {
  const pinDisplay = document.querySelector('.pin-display');
  pinDisplay.value = pin;
}
