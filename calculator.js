let amount = document.getElementById('loan-amount');
let years = document.getElementById('loan-years');
let rate = document.getElementById('loan-rate');

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let monthlyPayment = calculateMonthlyPayment(update());
      updateMonthly(monthlyPayment);
    });
  }
});

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  amount.value = 50000.00;
  years.value = 10;
  rate.value = .055;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  return {
    amount: +(amount.value),
    years: +(years.value),
    rate: +(rate.value)
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let periodicInterest = values.rate/12;
  let principal = values.amount;
  let totalPayments = values.years*12;

  let monthlyPayment = (principal * periodicInterest) / (1 - (Math.pow(1 + periodicInterest, -totalPayments)));
  return "$" + monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  document.getElementById('monthly-payment').innerText = monthlyPayment;
}
