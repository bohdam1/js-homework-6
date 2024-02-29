const paragraf =  document.querySelector('#text')
const changeBtn =  document.querySelector('#jsstyle')

const changecolor = ()=> {
    const text = paragraf.style;
    text.color= "teal"; 
    text.fontSize = "24px";
    text.textAlign = "center";
}

changeBtn.addEventListener("click", changecolor)


