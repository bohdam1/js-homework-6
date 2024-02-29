
const form =  document.querySelector('#form1')

const input =  document.querySelector('input')

const formregistr = (event) => {
    event.preventDefault();
    const formvalue = event.target;
    // const name = formvalue.elements.fname.value
    // const lastname = formvalue.elements.fname.value
    console.log(`Login: ${formvalue.elements.fname.value}, Password: ${formvalue.elements.fname.value}`);

}
form.addEventListener('submit', formregistr)
