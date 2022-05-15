// nav bar add class black
let nav = document.querySelector("nav");

// function scroll start work
window.onscroll = function () {
    if(window.scrollY > 500){
        nav.classList.add("nav_black");
    }
    else if(window.scrollY <= 500){
        nav.classList.remove("nav_black");
    }
};
// block welcom histori opasity
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
    console.log(a);
        welcomeText[a].classList.add("active");

}
function clickEventOut (a) {
    console.log(a);
        welcomeText[a].classList.remove("active");

}
