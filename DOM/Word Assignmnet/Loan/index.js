function calculate() {
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  let emi = document.getElementById("emi").value;
  // Calculating interest per month
  const interest =(amount * (rate * 0.01)) / emi;

  // Calculating total payment
  const total = (amount / emi + interest);
  const values = total*emi;
  let span1 = document.getElementById("span1");
  let span2 = document.getElementById("span2");
  span1.innerHTML = total;
  span2.innerHTML = values;
}
