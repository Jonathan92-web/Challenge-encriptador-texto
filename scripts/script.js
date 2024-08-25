// Obtener referencias a los elementos del DOM
const textoEntrada = document.getElementById("texto-entrada");
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const textoSalida = document.getElementById("texto-salida");

// Función para encriptar el texto
function encriptarTexto() {
  const textoPlano = textoEntrada.value.toLowerCase();
  const textoEncriptado = textoPlano
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat");
  textoSalida.textContent = textoEncriptado;
  //document.getElementById("texto-entrada").value = ""; //limpia el texto de entrada
}

// Función para desencriptar el texto
function desencriptarTexto() {
  const textoEncriptado = textoEntrada.value.toLowerCase();
  const textoPlano = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  textoSalida.textContent = textoPlano;
}

// Agregar eventos de clic a los botones
botonEncriptar.addEventListener("click", encriptarTexto);
botonDesencriptar.addEventListener("click", desencriptarTexto);

function copiarTexto() {
  // Selecciona el texto encriptado
  let textoCopia = document.getElementById("texto-salida");
  textoCopia.select();
  textoCopia.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto al portapapeles
  navigator.clipboard
    .writeText(textoCopia.value)
    .then(() => {
      alert("Texto copiado al portapapeles!");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

function limpiarTexto() {
  let textoSalida = document.getElementById("texto-salida");
  textoSalida.textContent = "";
  let textoEntrada = document.getElementById("texto-entrada");
  textoEntrada.textContent = "";

  //document.getElementById("texto-salida").value = "";
  //document.getElementById("texto-salida").placeholder ="Ningún mensaje fue encontrado";
  //document.getElementById("texto-entrada").value = "";
}

// Agregar evento de clic al botón de copiar
//botonCopiar.addEventListener("click", copiarTexto);
