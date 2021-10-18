function countChars(obj) {
    document.getElementById("charNum").innerHTML = obj.value.length + ' caracteres';
}
let arrayNombre, longitud, extension, validacion;
const regexTxt = ".txt";
let formulario = document.getElementById("formulario");

function validarCifrado(event) {
    formulario.setAttribute("action", "/cifrar");
    validacion = true;
    var llave = formulario.clave.value.length;
    // Validar que no haya campos vacios
    if (Texto.value == "" || clave.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ingresa la llave y el texto a cifrar',
        })
        validacion = false;
    }
    // Validar extension
    if (validacion == true) {
        validarExtension(Texto);
    }
    if (validacion == true) {
        if (document.getElementById('128').checked == true) {
            if (llave != 16) {
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'Ingrese una contraseña de 16 caracteres',
                })
                validacion = false;
            }
        } else
        if (document.getElementById('192').checked == true) {
            if (llave != 24) {
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'Ingrese una contraseña de 24 caracteres',
                })
                validacion = false;
            }
        } else
        if (document.getElementById('256').checked == true) {
            if (llave != 32) {
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'Ingrese una contraseña de 32 caracteres',
                })
                validacion = false;
            }
        }
    }
    if (validacion == false) {
        // Detiene la accion asociada al evento, por ejemplo
        // si al ser pulsado debia de enviar los datos al servidor
        // cancela esa operacion
        event.preventDefault();
        event.stopPropagation();
    }
}

function validarExtension(file) {
    longitud = file.value.length;
    // Divide el nombre del archivo en un array y devuelve las ultimas 4 letras
    // si las letras son .txt lo acepta
    arrayNombre = file.value.split("");
    extension = arrayNombre[longitud - 4] + arrayNombre[longitud - 3] + arrayNombre[longitud - 2] + arrayNombre[longitud - 1];
    if (regexTxt != extension) {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Solo puedes ocupar archivos de texto plano (TXT)',
        })
        validacion = false;
    }
}

function redirigir() {
    window.location.href = 'https://descifrar-aes-eha-lcas.herokuapp.com';
}