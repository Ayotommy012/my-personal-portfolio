/**creating button click show/hide navbar **/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");
var sections = document.querySelectorAll('section');

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})


var typed=new Typed(".input", {
    strings:["web Developer","Frontend Developer","Network Engineer"],
    typedspeed:70,
    backspeed:55,
    loop:true
})
