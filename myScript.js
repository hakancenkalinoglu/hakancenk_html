
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

 function myFunction(){
  //var btn = document.getElementById("demo").innerHTML="js run";
  var btn = document.body;
  btn.classList.toggle("listen2");
}



function zoomin(){

var myImg =document.getElementById("map");
var currWidth = myImg.clientWidth;
var currHeight = myImg.clientHeight;


  if(currWidth== 2500 && currHeight == 2500) return false;
    else{
      myImg.style.width = (currWidth + 50) + "px";
      myImg.style.height = (currHeight + 50) + "px";

    }
}


function zoomout(){

  var myImg = document.getElementById("map");
  var currWidth = myImg.clientWidth;
  var currHeight = myImg.clientHeight;

  if(currWidth == 100 && currHeight == 100) return false;
    else{
      myImg.style.width = (currWidth - 50 ) + "px";
      myImg.style.height = (currHeight - 50) + "px";
    }
  

}

 function testzoomin(x){
  x.style.height = "65px";
  x.style.width = "65px";
}
function testzoomout(x){
  
  x.style.height = "55px";
  x.style.width = "55px";
  
}




function php(){
  document.getElementById("SLM").innerHTML="hello world"
}



