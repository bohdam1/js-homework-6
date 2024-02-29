
const btnDecrement =  document.querySelector( 'button[data-action="decrement"]');
const btnIncrement =  document.querySelector( 'button[data-action="increment"]');

const spnvalue =  document.querySelector( '#value');


let counterValue = 0;

const increase = () => {
    counterValue +=1;
    spnvalue.textContent = counterValue;
}

const reduce = () => {
    counterValue -=1;
    spnvalue.textContent = counterValue;
}

btnIncrement.addEventListener( "click", increase)
btnDecrement.addEventListener( "click", reduce)









