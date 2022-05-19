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
let numberZero = 0 +"%";
let numberOne = 40 +"%";
let numberTwo = 80 +"%";
let permissionBig = 1880;
let permissionLarge = 1400;
let permissionMedium = 1000;
let permissionSmall = 880;
let newNumber = 0;
let newNumberOne = 0;
ducksImgBack.onclick = ()=>{

        newNumberNull ();
        ducksImgBack.style.display = "none";
        setTimeout(function () {  ducksImgBack.style.display = "flex"; }, 1000);
        if(window.outerWidth > permissionLarge &&  window.outerWidth < permissionBig){

                numberZero = 0 +"%";
                numberOne = 37 +"%";
                numberTwo = 74 +"%";
        }
        else if(window.outerWidth <= permissionLarge &&  window.outerWidth >= permissionMedium){
                console.log(window.outerWidth);
                 numberZero = 0 +"%";
                 numberOne = 34 +"%";
                 numberTwo = 77 +"%";

        }
        else if(window.outerWidth < permissionMedium  &&  window.outerWidth > permissionSmall){
                console.log(window.outerWidth);
                 numberZero = 0 +"%";
                 numberOne = 33 +"%";
                 numberTwo = 77 +"%";
                 console.log(window.outerWidth);
        }
        else if(window.outerWidth <= permissionSmall){
                if (newNumber == 0){
                        numberZero = -21 +"%";
                        numberOne = 65 +"%";
                        numberTwo = 129 +"%";
                        newNumber ++;
                }
                else if (newNumber == 1){
                        numberZero = -5 +"%";
                        numberOne = 59 +"%";
                        numberTwo = 139 +"%";
                        newNumber ++;
                }
                else if(newNumber == 2){
                        numberZero = -10 +"%";
                        numberOne = 59 +"%";
                        numberTwo = 135 +"%";
                        newNumber = 0;
                }    
        }

        if (caruselBack == 0){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }
                ducksImg[2].classList.add('active');
                contentTextBox[2].classList.add('active');
                ducksBlock[2].classList.add('active');
                ducksBlock[0].style.left = numberTwo;
                ducksBlock[1].style.left = numberZero;
                ducksBlock[0].style.zIndex = "-1";
                ducksBlock[2].style.zIndex = "1";
                ducksBlock[2].style.left = numberOne;
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
                ducksBlock[0].style.left = numberOne;
                ducksBlock[1].style.zIndex = "-1";
                ducksBlock[0].style.zIndex = "1";
                ducksBlock[1].style.left = numberTwo;
                ducksBlock[2].style.left = numberZero;
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
                ducksBlock[0].style.left = numberZero;
                ducksBlock[1].style.left = numberOne;
                ducksBlock[2].style.left = numberTwo;
                caruselBack = 0;
        }
        numberZero = 0 +"%";
        numberOne = 40 +"%";
        numberTwo = 80 +"%";
        caruselkNull ();

}

ducksImgNext.onclick = ()=>{
        newNumberOneNull ();
            ducksImgNext.style.display = "none";
        setTimeout(function () { ducksImgNext.style.display = "flex"; }, 1000);
        if(window.outerWidth > permissionLarge &&  window.outerWidth < permissionBig){

                numberZero = 0 +"%";
                numberOne = 37 +"%";
                numberTwo = 74 +"%";
        }
        else if(window.outerWidth <= permissionLarge &&  window.outerWidth >= permissionMedium){
                console.log(window.outerWidth);
                 numberZero = 0 +"%";
                 numberOne = 34 +"%";
                 numberTwo = 77 +"%";

        }
        else if(window.outerWidth < permissionMedium  &&  window.outerWidth > permissionSmall){
                console.log(window.outerWidth);
                 numberZero = 0 +"%";
                 numberOne = 33 +"%";
                 numberTwo = 77 +"%";
                 console.log(window.outerWidth);
        }
        else if(window.outerWidth <= permissionSmall){
                if (newNumberOne == 0){
                        numberZero = -5 +"%";
                        numberOne = 58 +"%";
                        numberTwo = 137 +"%";
                        newNumberOne ++;
                }
                else if (newNumberOne == 1){
                        numberZero = -21 +"%";
                        numberOne = 64 +"%";
                        numberTwo = 129 +"%";
                        newNumberOne ++;
                }
                else if(newNumberOne == 2){
                        numberZero = -10 +"%";
                        numberOne = 60 +"%";
                        numberTwo = 135 +"%";
                        newNumberOne = 0;
                }    
        }

        if (carusel == 0){
                for(let i = 0; i < 3; i++){
                        ducksImg[i].classList.remove('active');
                        contentTextBox[i].classList.remove('active');
                        ducksBlock[i].classList.remove('active');
                }
                ducksImg[carusel].classList.add('active');
                contentTextBox[carusel].classList.add('active');
                ducksBlock[carusel].classList.add('active');
                ducksBlock[0].style.left = numberOne;
                ducksBlock[1].style.left = numberTwo;
                ducksBlock[2].style.zIndex = "-1";
                ducksBlock[0].style.zIndex = "1";
                ducksBlock[2].style.left = numberZero;
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
                ducksBlock[0].style.left = numberTwo;
                ducksBlock[1].style.zIndex = "-1";
                ducksBlock[2].style.zIndex = "1";
                ducksBlock[1].style.left = numberZero;
                ducksBlock[2].style.left = numberOne;
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
                ducksBlock[0].style.left = numberZero;
                ducksBlock[1].style.left = numberOne;
                ducksBlock[2].style.left = numberTwo;
                carusel = 0;
        }
        numberZero = 0 +"%";
        numberOne = 40 +"%";
        numberTwo = 80 +"%";
        caruselBackNull ();

}


function newNumberNull (){
        if(newNumber == 0){
                newNumberOne = 2;

                console.log(newNumber)  
                console.log(newNumberOne)     
        }
        else if(newNumber == 1){
                newNumberOne = 1; 
 
                console.log(newNumber) 
                console.log(newNumberOne)    
             }
        else if(newNumber == 2){
                newNumberOne = 1;

                console.log(newNumber) 
                console.log(newNumberOne)      
        }
};

function newNumberOneNull (){
        if(newNumberOne == 0){
           newNumber = 2;    
           console.log(newNumberOne) 
           console.log(newNumber) 
        }
        else if(newNumberOne == 1){
                newNumber = 2; 
                console.log(newNumberOne) 
                console.log(newNumber)     
             }
        else if(newNumberOne == 2){
        newNumber = 0; 
        console.log(newNumberOne) 
        console.log(newNumber)     
        }
};

function caruselBackNull (){
        if(carusel == 0){
           caruselBack = 0;     
        }
        else if(carusel == 1){
                caruselBack = 2;     
             }
        else if(carusel == 2){
        caruselBack = 2;     
        }
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
