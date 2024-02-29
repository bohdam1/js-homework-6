const textInput = document.querySelector("#validation-input");

const makeValidation = (event) => 
{   const textlist = textInput.classList ;
    if (event.currentTarget.value.length === 6) {
        textlist.remove('invalid');
        textlist.add('valid');
    } else {
        textlist.remove('valid');
        textlist.add('invalid');
    }
};

textInput.addEventListener('blur', makeValidation);
