
const inputEl = document.querySelector('#name-input');

const inputspn = document.querySelector("#name-output");

const copiepaas = () => {
  inputspn.textContent = inputEl.value;
};

inputEl.addEventListener("input", copiepaas)


































