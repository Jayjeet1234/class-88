function hy(){
a=document.getElementById("hello").value;
b=document.getElementById("hello1").value;
localStorage.setItem("player1",a);
localStorage.setItem("player2",b);
window.location="index1.html";

}