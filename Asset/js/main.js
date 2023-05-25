
let money = 0;
function addmoneyNumber(number) {
    money = addNumbers(money, number);
    updatemoneyDisplay();
}
function addNumbers(num1, num2) {
    return num1 + num2;
  }
function clearmoney() {
money = 0;
  updatemoneyDisplay();
}
function updatemoneyDisplay() {
  const pinDisplay = document.querySelector('.money-display');
  pinDisplay.value = money;
}
  

// pin
function submitPin(nextpage) {
  // const pin-acc = document.getElementById("account-pin").value;

  const pin = document.getElementById("pin").value;

  if (pin.length == 6) {
    //if(pin == 
    console.log("Submitting pin:", pin);
    window.location.href = nextpage;
  } else {
 
    const message = document.getElementById("message");
    message.innerText = "Please enter a 6-digit pin.";
    message.style.display = "block";
  }
}






/*==================== ACCORDION LOAN ====================*/
const loanContent = document.getElementsByClassName('loan__content');
const loanHeader = document.querySelectorAll('.loan__header');

function toggleLoan() {
  let itemClass = this.parentNode.className;

  if (itemClass === 'loan__content loan__close') {
    this.parentNode.className = 'loan__content loan__open';
    const circularProgress = this.parentNode.querySelector(".circular-progress");
    const progressValue = this.parentNode.querySelector(".progress-value");
    let progressStartValue = 0;
    const speed = 3;
    const spanText = progressValue.textContent;
    const progressEndValue = parseInt(spanText, 10);
    console.log(progressEndValue);
    
    let progress = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  } else if (itemClass === 'loan__content loan__open') {
    this.parentNode.className = 'loan__content loan__close';
  }
}

loanHeader.forEach(el => {
  el.addEventListener('click', toggleLoan);
});


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i ) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalCloses)=> {
    modalCloses.addEventListener('click', () =>{
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove("active-modal")
        })
    })
})

const loanAmountInput = document.getElementById('loan-amount');
const loanAmountValue = document.getElementById('loan-amount-value');

loanAmountInput.addEventListener('input', function() {
  loanAmountValue.textContent = this.value;
});

  
  