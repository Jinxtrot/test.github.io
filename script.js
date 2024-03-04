
function validarCorreoElectronico(correo) {
    // Puedes implementar una lógica más robusta según tus necesidades
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

function validarContrasena(contrasena) {
    // Aquí se verifica que la contraseña tenga al menos 8 caracteres y no contenga caracteres especiales
    var regexContrasena = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;

    if (contrasena.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres.';	
    } else if (!regexContrasena.test(contrasena)) {
        return 'La contraseña no debe contener caracteres especiales.';
    }

    return true;
}

function mostrarAlerta(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: mensaje
    });
}

function validarFormulario() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validación de correo electrónico
    if (!validarCorreoElectronico(username)) {
        mostrarAlerta('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    // Validación de contraseña segura y contra ataques SQL
    var resultadoValidacion = validarContrasena(password);
    if (resultadoValidacion !== true) {
        mostrarAlerta(resultadoValidacion);
        return false;
    }

    return true;
}
