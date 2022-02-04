const amount = document.getElementById("amount");
const cover = document.getElementById("cover");
const select = document.querySelector(".select");
const calc = document.querySelector(".calulate");
const result = document.querySelector("h3");
let tip;

const calcTip = function () {
  calc.addEventListener("click", function (e) {
    e.preventDefault();
    tip = ((+amount.value * +select.value) / +cover.value).toFixed(2);
    if (tip === "NaN") {
      result.textContent = `Tip $0 Each`;
      showTip();
    } else {
      result.textContent = `Tip $${tip} Each`;
      showTip();
    }
  });
};
calcTip();
const showTip = function () {
  result.className = "show";
  amount.value = "";
  cover.value = "";
  setTimeout(() => {
    result.classList.remove("show");
  }, 2000);
};
