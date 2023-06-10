var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice"+randomNumber1+".png";

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+randomNumber2+".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImage1);
image2.setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2)
{
     document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
     document.querySelector("h1").textContent = "🚩 Play 2 Wins!";
}
else
{
     document.querySelector("h1").textContent = "Draw!";
}