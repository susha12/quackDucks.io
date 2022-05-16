let welcomeButton = document.querySelector(".welcome_text__button");

let welcomeText = document.querySelectorAll(".welcome_text__max");
let sectionOneWelcome = document.querySelector(".section_one__welcome");

let welcomeTextBox = document.querySelector(".welcome_text__box");
welcomeButton.onclick = ()=>{
    welcomeTextBox.classList.toggle("active");
    welcomeButton.classList.toggle("active");
    sectionOneWelcome.classList.toggle("active");
}

function clickEvent (a) {
        welcomeText[a].classList.add("active");
}
function clickEventOut (a) {
        welcomeText[a].classList.remove("active");
}
