// refresh page
window.onload = function () { window.scrollTo(0, 0); };

// first block duck elements
let imgDucks = document.querySelector(".header_img__ducks");
let header = document.querySelector("header");
let sum = 0;

// fix scroll
window.onscroll = function () { window.scrollTo(0, 0); };
// first block titles elements
let leftTitle = document.querySelector(".text_quack__left");
let rightTitle = document.querySelector(".text_ducks__right");


// funcion csroll
document.onwheel = function (event) {
    // opacity duck img header
    sum+=0.15;
    imgDucks.style.opacity = sum ;
    leftTitle.style.opacity = sum ;
    rightTitle.style.opacity = sum ;
    if (sum <= 1){
        window.onscroll;
        titleHeight ();
        header.style.position = "fixed";
    }
    else if (sum > 1) {
        window.onscroll = function () { window.scrollTo()};
        header.style.position = "relative";
        console.log(sum);
        return;
    }
}

// function title height

// motion text header width >= 1750
let sumTiTleLeft = -650;
let sumTiTleRight = 1700;

// motion text header width 1750 >= 1400
let sumTiTleLeftTwo = -650;
let sumTiTleRightTwo = 1400;

// motion text header width 1400 >= 1000
let sumTiTleLeftThree = -650;
let sumTiTleRightThree = 1400;

// motion text header width 1000 >= 880
let sumTiTleLeftFour = -150;
let sumTiTleRightFour = 800;

// motion text header width  880 >>
let sumTiTleLeftFive = -150;
let sumTiTleRightFive = 700;



function titleHeight () {
    // motion text header width >= 1750
    if(screen.width >= 1750){
        sumTiTleLeft = sumTiTleLeft + 150;
        sumTiTleRight = sumTiTleRight - 200;
        if(sumTiTleLeft >= 350 || sumTiTleRight <= 600){
            sumTiTleLeft = 350;
            sumTiTleRight = 550;
            leftTitle.style.left = sumTiTleLeft + "px";
            rightTitle.style.left = sumTiTleRight + "px";
        }
        else{
            leftTitle.style.left = sumTiTleLeft + "px";
            rightTitle.style.left = sumTiTleRight + "px";
        }
    }

    // motion text header width >= 1750 = 1400
    else if(screen.width < 1750 && screen.width >= 1400){
        sumTiTleLeftTwo = sumTiTleLeftTwo + 120;
        sumTiTleRightTwo = sumTiTleRightTwo - 180;
        if(sumTiTleLeftTwo >= 550 || sumTiTleRightTwo <= 400){
            sumTiTleLeftTwo = 120;
            sumTiTleRightTwo = 320;
            leftTitle.style.left = sumTiTleLeftTwo + "px";
            rightTitle.style.left = sumTiTleRightTwo + "px";
        }
        else{
            leftTitle.style.left = sumTiTleLeftTwo + "px";
            rightTitle.style.left = sumTiTleRightTwo + "px";
        }
    }

    
    // motion text header width >= 1400 = 1000
    else if(screen.width < 1400 && screen.width >= 1000){
        sumTiTleLeftThree = sumTiTleLeftThree + 120;
        sumTiTleRightThree = sumTiTleRightThree - 180;
        if(sumTiTleLeftThree >= 550 || sumTiTleRightThree <= 400){
            sumTiTleLeftThree = 120;
            sumTiTleRightThree = 250;
            console.log(sumTiTleLeftThree);
            console.log(sumTiTleRightThree);
            leftTitle.style.left = sumTiTleLeftThree + "px";
            rightTitle.style.left = sumTiTleRightThree + "px";
        }
        else{
            console.log(sumTiTleLeftThree);
            console.log(sumTiTleRightThree);
            leftTitle.style.left = sumTiTleLeftThree + "px";
            rightTitle.style.left = sumTiTleRightThree + "px";
        }
    }

        // motion text header width >= 1000 = 880
        else if(screen.width < 1000 && screen.width >= 880){
            sumTiTleLeftFour = sumTiTleLeftFour + 50;
            sumTiTleRightFour = sumTiTleRightFour - 120;
            if(sumTiTleLeftFour >= 550 || sumTiTleRightFour <= 400){
                sumTiTleLeftFour = 100;
                sumTiTleRightFour =186;
                console.log(sumTiTleLeftFour);
                console.log(sumTiTleRightFour);
                leftTitle.style.left = sumTiTleLeftFour + "px";
                rightTitle.style.left = sumTiTleRightFour + "px";
            }
            else{
                console.log(sumTiTleLeftFour);
                console.log(sumTiTleRightFour);
                leftTitle.style.left = sumTiTleLeftFour + "px";
                rightTitle.style.left = sumTiTleRightFour + "px";
            }
        }

                // motion text header width >=880
                else if(screen.width < 880){
                    sumTiTleLeftFive = sumTiTleLeftFive + 28;
                    sumTiTleRightFive = sumTiTleRightFive - 101;
                    if(sumTiTleLeftFive >= 550){
                        sumTiTleLeftFive = 100;
                        sumTiTleRightFive =6;
                        console.log(sumTiTleLeftFive);
                        console.log(sumTiTleRightFive);
                        leftTitle.style.left = sumTiTleLeftFive + "px";
                        rightTitle.style.left = sumTiTleRightFive + "px";
                    }
                    else{
                        console.log(sumTiTleLeftFive);
                        console.log(sumTiTleRightFive);
                        leftTitle.style.left = sumTiTleLeftFive + "px";
                        rightTitle.style.left = sumTiTleRightFive + "px";
                    }
                }



}