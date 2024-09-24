let myTheme = document.getElementById("themeButton");
let slider =document.querySelector("#slider");
let body =  document.querySelector("body");
let topHead =  document.querySelector("#logoAndTheme");
let themeText = document.querySelector("#text");
let themeOptions = document.querySelector("#options");
let display = document.querySelector("#numbers input");
let keyboard = document.querySelector("#keyboard");
let keys = document.querySelectorAll(".keys:first-child,.keys:nth-child(2)");
let delKey = document.querySelector("#keyboard #del");
let resetKey = document.querySelector("#keyboard .keys:nth-child(17)");
let equalKey = document.querySelector("#keyboard .keys:last-child");
let x = 0;
myTheme.addEventListener('click', function() {
    console.log(x);
    switch(x){
        case 0:
            myTheme.onclick = function(){
            myTheme.style.backgroundColor = "#f86b61";
            slider.style.backgroundColor = "#252d44";
            myTheme.style.transitionDuration ="0.3s";
            myTheme.style.transform = "translateX(0%)";
            topHead.style.color = "white";
            themeText.style.color = "white";
            themeOptions.style.color = "white";
            body.style.backgroundColor = "#3b4664";
            display.style.backgroundColor = "#252d44";
            display.style.color = "white";
            keyboard.style.backgroundColor= "#252c46";
            delKey.style.backgroundColor = "#647299";
            resetKey.style.backgroundColor = "#647299";
            equalKey.style.backgroundColor = "#d13f30";
        }
        break;
        case 1:
            myTheme.onclick = function(){
            myTheme.style.backgroundColor = "#c55406";
            slider.style.backgroundColor = "#cccfd8";
            myTheme.style.transitionDuration ="0.3s";
            myTheme.style.transform = "translateX(94%)";
            topHead.style.color = "black";
            themeText.style.color = "black";
            themeOptions.style.color = "black";
            body.style.backgroundColor = "#e6e6e6";
            display.style.backgroundColor = "#eeeeee";
            display.style.color = "black";
            keyboard.style.backgroundColor= "#d3cdcd";
            delKey.style.backgroundColor = "#3a8185";
            resetKey.style.backgroundColor = "#3a8185";
            equalKey.style.backgroundColor = "#c85401";
        }
        break;
        case 2:
            myTheme.onclick =function(){
                myTheme.style.backgroundColor = "#00e2d1";
                slider.style.backgroundColor = "#1e0836";
                myTheme.style.transitionDuration ="0.3s";
                myTheme.style.transform = "translateX(196%)";
                topHead.style.color = "#ffef44";
                themeText.style.color = "#ffef44";
                themeOptions.style.color = "#ffef44";
                body.style.backgroundColor = "#17062a";
                display.style.backgroundColor = "#1e0836";
                display.style.color = "#ffef44";
                keyboard.style.backgroundColor= "#1e0836";
                delKey.style.backgroundColor = "#56077c";
                resetKey.style.backgroundColor = "#56077c";
                equalKey.style.backgroundColor = "#00decf";
                
            } 
            x=-1;
        break;
    }
    x=x+1;
});

