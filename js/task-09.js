function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changebtn =  document.querySelector('.change-color');
const changespn =  document.querySelector('.color');

const handleClick = () => {
 const randomclr =  getRandomHexColor()
 document.body.style.backgroundColor = randomclr;
 changespn.textContent = randomclr;
};

changebtn.addEventListener("click", handleClick);
