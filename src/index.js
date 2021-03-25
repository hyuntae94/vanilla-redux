const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updatenumber = () => {
  number.innerText = count;
}

const plusEvent = () =>{
  count += 1;
  updatenumber();
}

const minusEvent = () =>{
  count -= 1;
    updatenumber();
}

plus.addEventListener("click", plusEvent);
minus.addEventListener("click", minusEvent);
