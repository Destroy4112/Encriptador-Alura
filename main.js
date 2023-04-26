const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
const btnLimpiar = document.querySelector(".limpiar");
const mensaje = document.querySelector(".cuadro");
const resultado = document.querySelector(".texto");
const titulo = document.querySelector(".titulo");

function encriptar(e) {
    e.preventDefault();
    const imagen = document.querySelector(".imagen");

    let cadena = mensaje.value.split("");
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "a") {
            cadena[i] = "ai";
        } else if (cadena[i] === "e") {
            cadena[i] = "enter";
        } else if (cadena[i] === "i") {
            cadena[i] = "imes";
        } else if (cadena[i] === "o") {
            cadena[i] = "ober";
        } else if (cadena[i] === "u") {
            cadena[i] = "ufat";
        }
    }
    cadena = cadena.join("");
    titulo.innerText = "Texto encriptado";
    if (imagen !== null) {
        imagen.remove();
    }
    resultado.innerHTML = cadena;
    mensaje.value = "";
    mensaje.focus();
}

function desencriptar(e) {
    e.preventDefault();
    const cadena = mensaje.value;
    const imagen = document.querySelector(".imagen");

    const nuevaCadena = cadena.replace(/ai|enter|imes|ober|ufat/g, function (palabra) {
        if (palabra === "ai") {
            return "a";
        } else if (palabra === "enter") {
            return "e";
        } else if (palabra === "imes") {
            return "i";
        } else if (palabra === "ober") {
            return "o";
        } else if (palabra === "ufat") {
            return "u";
        }
    });
    resultado.innerHTML = nuevaCadena;
    titulo.innerText = "Texto desencriptado";
    if (imagen !== null) {
        imagen.remove();
    }
    mensaje.value = "";
    mensaje.focus();
}

function copiar(e) {
    e.preventDefault();
    let textoResultado = document.querySelector('.texto');
    let texto = textoResultado.innerHTML;
    navigator.clipboard.writeText(texto);
}

function limpiar(e) {
    e.preventDefault();
    if (titulo.innerHTML !== "Ningun texto ingresado") {
        titulo.innerText = "Ningun texto ingresado";
        let img = document.createElement('img');
        img.src = 'logo.png';
        img.classList.add("imagen");
        const container = document.querySelector(".mensajeFinal");
        let inicio = container.firstChild;
        container.insertBefore(img, inicio);
        resultado.innerHTML = "Por favor escriba el texto que desea encriptar o desencriptar";
    }
}

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnLimpiar.addEventListener('click', limpiar);
btnCopiar.addEventListener('click', copiar);