/* Contenedores */
let formulario = document.getElementById("contenedor__formulario");
let gracias = document.getElementById("contenedor__gracias");

/* Inputs */
let numeroTarjetaInput = document.getElementById("numero__input");
let nombreTarjetaInput = document.getElementById("nombre__input");
let mesTarjetaInput = document.getElementById("mes__input");
let anioTarjetaInput = document.getElementById("anio__input");
let cvcTarjetaInput = document.getElementById("cvc__input");

/* Datos Tarjetas */
let numeroTarjetaFrente = document.getElementById("tarjetaNumero");
let nombreTarjetaFrente = document.getElementById("tarjetaNombre");
let mesTarjetaFrente = document.getElementById("tarjetaMes");
let anioTarjetaFrente = document.getElementById("tarjetaAnio");
let cvcTarjetaAtras = document.getElementById("tarjetaCvc");

/* Errores */
let mensajeErrorNombre = document.getElementById("nombreError");
let mensajeErrorNumero = document.getElementById("numeroError");
let mensajeErrorMes = document.getElementById("mesError");
let mensajeErrorAnio = document.getElementById("anioError");
let mensajeErrorCvc = document.getElementById("cvcError");


/* Cambiar valores de las tarjetas */

numeroTarjetaInput.oninput = function (event) {
  /* capturo lo que se escribe en el input */
  numeroTarjetaFrente.innerHTML =
    event.target.value; /* Aca hace referencia al valor del input */
  /* Aca hace referencia al span*/
};

nombreTarjetaInput.oninput = function (event) {
  nombreTarjetaFrente.innerHTML = event.target.value;
};

mesTarjetaInput.oninput = function (event) {
  mesTarjetaFrente.innerHTML = event.target.value;
};

anioTarjetaInput.oninput = function (event) {
  anioTarjetaFrente.innerHTML = event.target.value;
};

cvcTarjetaInput.oninput = function (event) {
  cvcTarjetaAtras.innerHTML = event.target.value;
};

/* Funciones verificar datos */

/* Errores Generales */
function verificarVacio(atributo, error) {
  if (atributo.value.length == 0) {
    error.innerHTML = "Can´t be blank";
    atributo.style.borderColor = "red";
    return true;
  } else {
    error.innerHTML = "";
    atributo.style.borderColor = "";
    return false;
  }
}

/* Errores Numero */

function erroresNumero(numero, error) {
  if (numero.value.length == 0) {
    error.innerHTML = "Can´t be blank";
    numero.style.borderColor = "red";
    return true;
  } else if (numero.value.length != 16) {
    error.innerHTML = "Tiene que tener 16 caracteres";
    numero.style.borderColor = "red";
    return true;
  } else if (numero.value.length != 16) {
    error.innerHTML = "Tiene que tener 16 caracteres";
    numero.style.borderColor = "red";
    return true;
  } else if (isNaN(numero.value)) {
    error.innerHTML = "Solo acepta numeros";
    numero.style.borderColor = "red";
    return true;
  } else {
    error.innerHTML = "";
    numero.style.borderColor = "";
    return false;
  }
}

/* Cambiar pagina */
function mostrarGracias() {
    
    let errorNombre = verificarVacio(nombreTarjetaInput, mensajeErrorNombre);
    let errorMes = verificarVacio(mesTarjetaInput, mensajeErrorMes);
    let errorAnio = verificarVacio(anioTarjetaInput, mensajeErrorAnio);
    let errorCvc = verificarVacio(cvcTarjetaInput, mensajeErrorCvc);
    let errorNumero = erroresNumero(numeroTarjetaInput, mensajeErrorNumero);
   if(errorNombre == false && errorNumero == false && errorMes == false && errorAnio == false && errorCvc == false){
    gracias.style.display="flex";
    formulario.style.display="none";
   }
}

function mostrarFormulario() {
  formulario.style.display = "flex";
  gracias.style.display = "none";
}
