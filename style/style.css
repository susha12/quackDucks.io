// nav bar add class black
const nav = document.querySelector("nav");

// function scroll start work
// window.onscroll = function () {
//     if(window.scrollY > 500){
//         nav.classList.add("nav_black");
//     }
//     else if(window.scrollY <= 500){
//         nav.classList.remove("nav_black");
//     }
// };
// block welcom histori opasity
const welcomeButton = document.querySelector(".welcome_text__button");

const welcomeText = document.querySelectorAll(".welcome_text__max");
const sectionOneWelcome = document.querySelector(".section_one__welcome");

const welcomeTextBox = document.querySelector(".welcome_text__box");
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





// section_two_factions
const ducksImg = document.querySelectorAll(".ducks_block_one_img");
const contentTextBox = document.querySelectorAll(".content_body_textBox_one");
const ducksBlock = document.querySelectorAll(".ducks_block_one");
const contentDucks = document.querySelectorAll(".content_body_ducks");
const ducksImgBack = document.querySelector(".button_left_duck");
const ducksImgNext = document.querySelector(".button_right_duck");
function caruselBackNull (){
        if(carusel == 0){
           caruselBack = 0;     
        }
        else if(carusel == 1){
                caruselBack = 1;     
             }
        else if(carusel == 2){
        caruselBack = 2;     
        }
};
let carusel = 0;
let caruselBack = 0;
ducksImgBack.onclick = ()=>{
        if (caruselBack == 0){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }
                ducksImg[2].classList.add('active');
                contentTextBox[2].classList.add('active');
                ducksBlock[2].classList.add('active');
                ducksBlock[0].style.left = 80 +"%";
                ducksBlock[1].style.left = 0 +"%";
                ducksBlock[0].style.zIndex = "-1";
                ducksBlock[2].style.zIndex = "1";
                ducksBlock[2].style.left = 40 +"%";
                caruselBack++;
        }
        else if (caruselBack == 1){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }
                ducksImg[0].classList.add('active');
                contentTextBox[0].classList.add('active');
                ducksBlock[0].classList.add('active');
                ducksBlock[0].style.left = 40 +"%";
                ducksBlock[1].style.zIndex = "-1";
                ducksBlock[0].style.zIndex = "1";
                ducksBlock[1].style.left = 80 +"%";
                ducksBlock[2].style.left = 0 +"%";
                caruselBack++;
        }
        else if (caruselBack == 2){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }

                ducksImg[1].classList.add('active');
                contentTextBox[1].classList.add('active');
                ducksBlock[1].classList.add('active');
                ducksBlock[2].style.zIndex = "-1";
                ducksBlock[1].style.zIndex = "1";
                ducksBlock[0].style.left = 0 +"%";
                ducksBlock[1].style.left = 40 +"%";
                ducksBlock[2].style.left = 80 +"%";
                caruselBack = 0;
        }
        caruselkNull ();
}



ducksImgNext.onclick = ()=>{

        if (carusel == 0){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }
                ducksImg[carusel].classList.add('active');
                contentTextBox[carusel].classList.add('active');
                ducksBlock[carusel].classList.add('active');
                ducksBlock[0].style.left = 40 +"%";
                ducksBlock[1].style.left = 78 +"%";
                ducksBlock[2].style.zIndex = "-1";
                ducksBlock[0].style.zIndex = "1";
                ducksBlock[2].style.left = 0 +"%";
                carusel++;
        }
        else if (carusel == 1){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }
                ducksImg[carusel+1].classList.add('active');
                contentTextBox[carusel+1].classList.add('active');
                ducksBlock[carusel+1].classList.add('active');
                ducksBlock[0].style.left = 78 +"%";
                ducksBlock[1].style.zIndex = "-1";
                ducksBlock[2].style.zIndex = "1";
                ducksBlock[1].style.left = 0 +"%";
                ducksBlock[2].style.left = 40 +"%";
                carusel++;
        }
        else if (carusel == 2){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }
                ducksImg[1].classList.add('active');
                contentTextBox[1].classList.add('active');
                ducksBlock[1].classList.add('active');
                ducksBlock[0].style.zIndex = "-1";
                ducksBlock[1].style.zIndex = "1";
                ducksBlock[0].style.left = 0 +"%";
                ducksBlock[1].style.left = 40 +"%";
                ducksBlock[2].style.left = 78 +"%";
                carusel = 0;
        }
        caruselBackNull ();
}


function caruselBackNull (){


        if(carusel == 0){
           caruselBack = 0;     
        }
        else if(carusel == 1){
                caruselBack = 2;     
             }
        else if(carusel == 2){
        caruselBack = 1;     
        }
        console.log(carusel)
        console.log(caruselBack)
};

function caruselkNull (){
        if(caruselBack == 0){
           carusel = 1;     
        }
        else if(caruselBack == 1){
                carusel = 2;     
             }
        else if(caruselBack == 2){
        carusel = 1;     
        }
};
