// page null coordinats
// window.onload = function () { 
//         window.scrollTo(0, 0);
//         // setTimeout(startfive, 1000);
//     };


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


// header display:none
const displayNone= document.querySelector(".display_none");
const vision = document.querySelector(".vision");
const visionScroll= document.querySelector(".vision_small__window");
window.onscroll = function () { 
        visionStart ();
        // console.log(sectionOneWelcome.getBoundingClientRect());
        if (window.outerWidth <= 880 && sectionOneWelcome.getBoundingClientRect().y <= -48){
                displayNone.style.display = "none";
                
        }
        else{
                displayNone.style.display = "block";
        }
    };
function visionStart (){
        console.log(vision.getBoundingClientRect());
        if (window.outerWidth <= 880 && vision.getBoundingClientRect().y <= 35){
                visionScroll.classList.add("active");
                console.log("yes")
                
        }
        else{
                visionScroll.classList.remove("active");
                console.log("no")
        }
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
// ducksImgBack.onclick = ducksImgSliderBack ();
ducksImgBack.addEventListener("click", ducksImgSliderBack);
function ducksImgSliderBack () {

        newNumberNull ();
        ducksImgBack.style.display = "none";
        setTimeout(function () {  ducksImgBack.style.display = "flex"; }, 1000);
        if(window.outerWidth > permissionLarge &&  window.outerWidth < permissionBig){

                numberZero = 0 +"%";
                numberOne = 37 +"%";
                numberTwo = 74 +"%";
        }
        else if(window.outerWidth <= permissionLarge &&  window.outerWidth >= permissionMedium){
                 numberZero = 0 +"%";
                 numberOne = 34 +"%";
                 numberTwo = 77 +"%";
        }
        else if(window.outerWidth < permissionMedium  &&  window.outerWidth > permissionSmall){
                 numberZero = 0 +"%";
                 numberOne = 33 +"%";
                 numberTwo = 77 +"%";
        }
        else if(window.outerWidth <= permissionSmall){
                        numberZero = -12 +"%";
                        numberOne = 58 +"%";
                        numberTwo = 128 +"%";
   
        }
        newNumber ++; 
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
        // numberZero = 0 +"%";
        // numberOne = 40 +"%";
        // numberTwo = 80 +"%";
        caruselkNull ();

}

ducksImgNext.addEventListener("click", ducksImgSliderNext);
// ducksImgNext.onclick = ducksImgSliderNext ();
function ducksImgSliderNext () {
        newNumberOneNull ();
            ducksImgNext.style.display = "none";
        setTimeout(function () { ducksImgNext.style.display = "flex"; }, 1000);
        if(window.outerWidth > permissionLarge &&  window.outerWidth < permissionBig){

                numberZero = 0 +"%";
                numberOne = 37 +"%";
                numberTwo = 74 +"%";
        }
        else if(window.outerWidth <= permissionLarge &&  window.outerWidth >= permissionMedium){
                 numberZero = 0 +"%";
                 numberOne = 34 +"%";
                 numberTwo = 77 +"%";

        }
        else if(window.outerWidth < permissionMedium  &&  window.outerWidth > permissionSmall){
                 numberZero = 0 +"%";
                 numberOne = 33 +"%";
                 numberTwo = 77 +"%";
        }
        else if(window.outerWidth <= permissionSmall){
                numberZero = -12 +"%";
                numberOne = 58 +"%";
                numberTwo = 128 +"%";

        }
        newNumberOne ++;
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
        // numberZero = 0 +"%";
        // numberOne = 40 +"%";
        // numberTwo = 80 +"%";
        caruselBackNull ();

}


function newNumberNull (){
        if(newNumber == 0){
                newNumberOne = 2;
                // console.log(newNumber)
                // console.log(newNumberOne)    
        }
        else if(newNumber == 1){
                newNumberOne = 1;
                // console.log(newNumber)
                // console.log(newNumberOne)    
             }
        else if(newNumber == 2){
                newNumberOne = 0;
                // console.log(newNumber)
                // console.log(newNumberOne)     
        }
};

function newNumberOneNull (){
        if(newNumberOne == 0){
           newNumber = 2; 
        //    console.log(newNumberOne)
        //    console.log(newNumber)   
        }
        else if(newNumberOne == 1){
                newNumber = 1;   
                // console.log(newNumberOne)
                // console.log(newNumber)   
             }
        else if(newNumberOne == 2){
                newNumber = 0; 
                // console.log(newNumberOne)
                // console.log(newNumber)
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



// Вешаем на прикосновение функцию handleTouchStart
const tuchScreen = document.querySelector(".faction_content_body");
tuchScreen.addEventListener('touchstart', handleTouchStart, false);  
// А на движение пальцем по экрану - handleTouchMove      
tuchScreen.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            ducksImgSliderBack ();

        } else {
            /* right swipe */
            ducksImgSliderNext ();
        }                       
    } 
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


// section_three_vision 


// five block img ducks 
const dusksAbsolute = document.querySelector(".dusks_smallBox__absolute");
const dusksClose = document.querySelector(".smallBox_absolute__close");
const ducksAllImg = document.querySelectorAll(".small_box__img");
const absoluteBigImg = document.querySelector(".smallBox_absolute__bigImg");



function duckAbsolute (a) {

        let img = ducksAllImg[a].src;
        absoluteBigImg.src = ducksAllImg[a].src;
        console.log(ducksAllImg[a].src);
        dusksAbsolute.style.display = "flex";
}
function duckClose () {
        dusksAbsolute.style.display = "none";
}


// six block faq
const sectionSmallPlus = document.querySelectorAll(".sectionSmall_box__plus");
const sectionSmallText = document.querySelectorAll(".sectionSmall_box__text");

 function faqPluse (a){
        if (sectionSmallText[a].style.display === "flex"){
                for (let i = 0; i < sectionSmallText.length; i++){
                        sectionSmallText[i].style.display="none";
                }
                sectionSmallText[a].style.display="none";
        }       

        else{
                for (let i = 0; i < sectionSmallText.length; i++){
                        sectionSmallText[i].style.display="none";
                }
                sectionSmallText[a].style.display="flex";   
        } 
}  

const faqDusksSection = document.querySelector(".faq_dusks__sectionBig");
const smallBoxImg = document.querySelector(".img_dusks__smallBox");
const faqDusksSmallBox = document.querySelector(".faq_dusks__smallBox");

// faqDusksSmallBox.onmouseover =
function sliderUp () {
        faqDusksSection.classList.add("active");
        smallBoxImg.style.zIndex = "1";
        console.log("yes");
        faqDusksSmallBox.classList.add("active");
 }




