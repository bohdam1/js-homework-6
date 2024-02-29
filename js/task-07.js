const inputEl = document.querySelector("#font-size-control");
const texEl = document.querySelector("#text");


const makeValidation = (event) => 
{ const valueEl = event.currentTarget.value 
   
    
   texEl.style.fontSize = `${valueEl}px`;
}

inputEl.addEventListener('input', makeValidation);

