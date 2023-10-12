let formulario = document.getElementById("contenedor__formulario");
let gracias = document.getElementById("contenedor__gracias");

function mostrarGracias(){
    gracias.style.display="flex";
    formulario.style.display="none";
}

function mostrarFormulario(){
    formulario.style.display="flex";
    gracias.style.display="none"; 
}

