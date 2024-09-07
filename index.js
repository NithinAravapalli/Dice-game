
var ran1= Math.floor(Math.random()*6)+1;
var imgsrc1="images/dice"+ran1+".png"
document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);

var ran2= Math.floor(Math.random()*6)+1;
var imgsrc2="images/dice"+ran2+".png"
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(ran1>ran2){
  var write="Player 1 Wins";
}
else if(ran1<ran2){
  var write="Player 2 Wins";
}
else{
  var write="Draw";
}

document.querySelector("h1").innerHTML=write;
