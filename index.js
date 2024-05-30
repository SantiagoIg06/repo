"use strict"
const nav = document.querySelector(".nav");
const button = document.querySelector(".changePosition");
const change = document.querySelector(".contenedor3");
const foot = document.querySelector(".foot");
let i = 0;
nav.innerHTML = `
<ul class="list-nav-l">
    <li><img src="#" alt="Logo"></li>
</ul>
<ul class="list-nav-p">
    <li><a class="nav-tx" href="#">Home</a></li>
    <li><a class="nav-tx" href="#">Proyectos</a></li>
    <li><a class="nav-tx" href="#">Blog</a></li>
    <li><a class="nav-tx" href="#">Contacto</a></li>
    <li><a class="nav-tx" href="#">Sesion</a>
        <ul class="desplegable">
            <li><a href="#">Iniciar Sesion</a></li>
            <li><a href="#">Registrarse</a></li>
        </ul>
    </li>
</ul>`;


button.addEventListener("click", () => {
    if (i === 0) {
        change.style.flexDirection = "row-reverse";
        i++;
    } else if (i === 1) {
        change.style.flexDirection = "row"; 
        i--;
    }
});






