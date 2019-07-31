var div_Element;
var count = 0;
var imagemover;
var start_button;
var randomnum;
var json = JSON.parse('{"colors":["violet","indigo","blue","green","yellow","orange","red"],"score":[1,2,3,1,2,3,1]}');//,"timer":[2000,1500,1000,2000,1500,1000,2000]}');
var timeleft;

function Init() {
    start_button = document.getElementById("startbutton");
    start_button.style.display = 'none';

    setTimer();
    createElement();
    // imagemover = setInterval(createElement, json.timer[randomnum - 1]);
}


function setTimer() {
     timeleft = 60;
    var downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("countdowntime").innerHTML = timeleft;
        if (timeleft <= 0) {

            clearInterval(downloadTimer);
            clearInterval(imagemover);
            //document.getElementById("").innerHTML="Score: "+count;
            alert("Your score is: " + count);
            count = 0;
            document.getElementById("scorecount").innerHTML = "0";
            var dynamicelement = document.getElementById('rectangle');
            dynamicelement.parentNode.removeChild(dynamicelement);
            start_button.style.display = 'block';
            document.getElementById("countdowntime").innerHTML = "60";
        }
    }, 1000);
}


function createElement() {

    jsonReading();
    div_Element = document.createElement("DIV");
    div_Element.id = "rectangle";
    div_Element.style.backgroundColor = json.colors[randomnum - 1];
    div_Element.style.height = 25 + "px";
    div_Element.style.width = 25 + "px";
    div_Element.style.borderRadius = 50 + "%";
    div_Element.addEventListener("click", scoreIncrement);
    document.getElementById("dynamicblock").appendChild(div_Element);
    moveImage();
    imagemover = setInterval(moveImage, 1500);//json.timer[randomnum - 1]);
}


function jsonReading() { randomnum = Math.floor(Math.random() * 7 + 1); }


function moveImage() {
    jsonReading();
  //  console.log(json.colors[randomnum-1]+"   "+json.score[randomnum-1]+"   "+json.timer[randomnum-1]+"  "+timeleft );

    div_Element.style.backgroundColor = json.colors[randomnum - 1];
    var randNum_V = Math.round(Math.random() * 500);
    var randNum_H = Math.round(Math.random() * 500);

    div_Element.style.top = randNum_V + "px";
    div_Element.style.right = randNum_H + "px";
}

function scoreIncrement() {
    count += json.score[randomnum - 1];
    var element = document.getElementById("rectangle");
    document.getElementById("scorecount").innerHTML = count;

    element.parentNode.removeChild(element);

    clearInterval(imagemover);
    createElement();
}


function sizeChange(size) {
    var a = document.getElementById("dynamicblock");
    a.style.width = size + "px";
    a.style.height = size + "px";
}


/*
function jsonloading()
{ 
   url = "jsoning.json";
   
    request=new XMLHttpRequest(); 
   
   request.onreadystatechange  = function()   {
    //if (request.readyState == 4  )
     // {
        var jsonObj = JSON.parse(request.responseText);
		alert(jsonObj.balls[2]);
		//}
   request.open("GET", url, true);
   request.send();
}
}*/