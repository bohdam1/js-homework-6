

const menuEl = document.querySelector("#categories");
const elementEl = menuEl.children.length;
console.log(
    `
    -----------------------------------------
    Number of categories: ${elementEl}
    -----------------------------------------
    `
   
    );

const itemEl = document.querySelectorAll(".item");
const itemData = [...itemEl];
itemData.forEach(element => {
    const first = element.firstElementChild;
    const last = element.lastElementChild;
    
    const elementList = last.children.length; // Виправлено children замість child
    console.log(
    `
    ------------------------------------------
    Category: Animals : ${first.textContent}`,
    `Elements: ${elementList}
    ------------------------------------------
    `
    );
    
});
