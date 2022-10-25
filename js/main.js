// NAV 

const btnmenu = document.getElementById('nav-btn');
const menu = document.querySelector('.nav_link');

btnmenu.addEventListener("click", function(){
    menu.classList.toggle("nav-visible");
});

const menuLinks= document.querySelectorAll('.nav_link a[href^="#"');
menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        menu.classList.remove("nav-visible");
    })
})

// MODO OSCURO

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function(){
let val = body.classList.toggle("dark");
localStorage.setItem("modo", val); 
}
)

let valor= localStorage.getItem("modo")

if(valor=="true") {
    body.classList.add("dark");
}
else {
    body.classList.remove("dark")
}


