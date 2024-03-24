let Counter=0;
document.getElementById("increase").onclick=function(){
    Counter+=1;
    document.getElementById("mainText").innerHTML=Counter;
}
document.getElementById("reset").onclick=function(){
    Counter=0;
    document.getElementById("mainText").innerHTML=Counter;
}
document.getElementById("decrease").onclick=function(){
    Counter-=1;
    document.getElementById("mainText").innerHTML=Counter;
}