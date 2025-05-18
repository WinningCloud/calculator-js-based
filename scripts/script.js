let displayStr = "0"
const display = document.createElement("div");
display.textContent = displayStr;
display.style.color = "black";
const displayBox = document.querySelector(".displayInnerBox");
displayBox.appendChild(display);



let numButtons = document.querySelectorAll(".num0, .num1, .num2, .num3, .num4, .num5, .num6, .num7, .num8, .num9");


function updateDisplayText(str){
    str = str.replace("/x/g","*");
    str = str.replace("/÷/g","/");
    display.textContent = str;
    displayBox.appendChild(display);
}

function numBtnClicked(btnInfo){
//    alert(btnInfo);
    if(displayStr=="0"){
        displayStr="";
    }
    displayStr += btnInfo;
    updateDisplayText(displayStr);
}

function operatorBtnClicked(btnInfo){

    displayStr += btnInfo;
    updateDisplayText(displayStr);
}

numButtons.forEach( div => {
    
    div.addEventListener("click", () => numBtnClicked(div.innerHTML));
});



let operatorButtons = document.querySelectorAll(".addBtn, .subBtn, .multBtn, .divBtn");
operatorButtons.forEach(button => {
    button.addEventListener("click", ()=>operatorBtnClicked(button.innerHTML));

});

const eraseBttn = document.querySelector(".eraseBtn");

function eraseBtnClicked(){
    if(displayStr.length != 0){
    displayStr = displayStr.slice(0,-1);
    updateDisplayText(displayStr);
    }
}

eraseBttn.addEventListener("click", ()=> eraseBtnClicked());


function calcBtnClicked(){
    displayStr = displayStr.replace("x","*");
    displayStr = displayStr.replace("÷","/");
    displayStr = String(eval(displayStr));
    updateDisplayText(displayStr);
}


const calcBtn = document.querySelector(".calcBtn");
calcBtn.addEventListener("click", ()=> calcBtnClicked());