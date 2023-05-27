function pickColor(){
  var color=['blue','orange','yellow'];
  var changeColor=color[Math.floor(Math.random()*color.length)];
  document.getElementById('outer').style.backgroundColor=changeColor;
}
document.getElementById('btn1').addEventListener('click',pickColor);



var pickone='inner';
function pickShape(){
  // var pickone='inner';
var shape=['inner','rectangle','circle','triangle-up','triangle-down'];
var changeShape=shape[Math.floor(Math.random()*shape.length)];
document.getElementById(pickone).setAttribute("id",changeShape);
pickone=changeShape;
}
document.getElementById('btn2').addEventListener('click',pickShape);


function change(){
  document.body.classList.toggle("dark-mode");
    // document.body.

}


// document.getElementById('switch').addEventListener('click',change);
