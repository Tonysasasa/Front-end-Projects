// Select all ButtonClick class in html
const buttonclick = document.querySelectorAll(".ButtonClick");

function display(id) {
    const content = document.querySelector(`#text${id}`);
    content.style.display = content.style.display === "block" ? "none" : "block";
    const Icon = document.querySelector(`#button${id}`);
    Icon.src = Icon.src.includes('icon-plus') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
};

// For each buttonclick object, enable the even listener since they are defined as div class
buttonclick.forEach((div, index) => {
    div.addEventListener('click', () => {
        display(index)
    })
});