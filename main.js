function billWithTip() {
  // all inputs needed
  let inputOfBill = document.querySelector("input.bill");
  let inputOfPercent = document.querySelectorAll(".calc-left .numbers span");
  let inputOfPeople = document.querySelector("input.number-people");

  // outputs to display
  let billOutput = document.querySelector(".tip-result");
  let totalOutput = document.querySelector(".total-result");

  // switchers that will switch to true if all inputs has been given
  let switcherB = false;
  let switcherP = false;
  let switcherN = false;

  // this function will excute when the 3 previous becomes true as cue that all inputs all given
  function checker() {
    if (switcherB == true && switcherP == true && switcherN == true) {
      billOutput.innerHTML = `$${(
        ((percentValue / 100) * billValue) /
        peopleValue
      ).toFixed(2)}`;

      totalOutput.innerHTML = `$${(
        ((percentValue / 100) * billValue) / peopleValue +
        billValue / peopleValue
      ).toFixed(2)}`;
    }
  }

  // preventing anything except numbers and adding active class when focused (validating)
  let allInputs = [inputOfBill, inputOfPeople];
  allInputs.forEach((ele) => {
    ele.addEventListener("keydown", function (e) {
      if (!isNaN(Number(e.key)) || e.key === "Backspace" || e.key === ".") "";
      else e.preventDefault();
    });
    ele.addEventListener("focus", () => ele.classList.add("active"));
    ele.addEventListener("blur", () => ele.classList.remove("active"));
  });

  // getting the value of Bill
  let billValue = 0;
  inputOfBill.oninput = function () {
    billValue = Number(inputOfBill.value);
    switcherB = true;
    checker();
  };

  // getting the value of number of people
  let peopleValue = 0;
  inputOfPeople.oninput = function () {
    peopleValue = Number(inputOfPeople.value);
    switcherN = true;
    checker();
  };

  // getting the value of percentage
  let percentValue = 0;
  inputOfPercent.forEach((ele) => {
    ele.onclick = function () {
      inputOfPercent.forEach((e) => e.classList.remove("active"));
      this.classList.add("active");
      percentValue = Number.parseInt(this.innerHTML);
      switcherP = true;
      checker();
    };
  });

  // when reseting

  document.querySelector(".reset").onclick = function () {
    document.forms[0].reset();
    billOutput.innerHTML = `$0.00`;
    totalOutput.innerHTML = `$0.00`;
  };
}
billWithTip();

document.links[0].href =
  "https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX";
//
