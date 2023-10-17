let formulario = document.getElementById("contenedor__formulario");
let gracias = document.getElementById("contenedor__gracias");

let numeroTarjetaInput = document.getElementById("numero__input");
let numeroTarjetaFrente = document.getElementById("tarjetaNumero");
let nombreTarjetaInput = document.getElementById("nombre__input");
let nombreTarjetaFrente = document.getElementById("tarjetaNombre");
let mesTarjetaInput = document.getElementById("mes__input");
let mesTarjetaFrente = document.getElementById("tarjetaMes");
let anioTarjetaInput = document.getElementById("anio__input");
let anioTarjetaFrente = document.getElementById("tarjetaAnio");
let cvcTarjetaInput = document.getElementById("cvc__input");
let cvcTarjetaAtras = document.getElementById("tarjetaCvc")

/* Cambiar valores de las tarjetas */
numeroTarjetaInput.oninput = function (event){   /* capturo lo que se escribe en el input */
    numeroTarjetaFrente.innerHTML = event.target.value;
    /* Aca hace referencia al span*/   /* Aca hace referencia al valor del input */
}

nombreTarjetaInput.oninput = function (event){
    nombreTarjetaFrente.innerHTML = event.target.value;
}

mesTarjetaInput.oninput = function (event){
    mesTarjetaFrente.innerHTML = event.target.value;
}

anioTarjetaInput.oninput = function (event){
    anioTarjetaFrente.innerHTML = event.target.value;
}

cvcTarjetaInput.oninput = function (event){
    cvcTarjetaAtras.innerHTML = event.target.value;
}














function mostrarGracias(){
    gracias.style.display="flex";
    formulario.style.display="none";
}

function mostrarFormulario(){
    formulario.style.display="flex";
    gracias.style.display="none"; 
}

