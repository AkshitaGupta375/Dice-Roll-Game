var num1=Math.floor(Math.random()*6)+1;
var img1="dice"+num1 +".png";
var imgsrc1="/images/"+img1;
var randomimgsrc1=document.querySelectorAll("img")[0];
randomimgsrc1.setAttribute("src",imgsrc1);

var num2=Math.floor(Math.random()*6)+1;
var img2="dice"+num2 +".png";
var imgsrc2="/images/"+img2;
var randomimgsrc2=document.querySelectorAll("img")[1];
randomimgsrc2.setAttribute("src",imgsrc2 );
if(num1>num2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(num2>num1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw";
}
