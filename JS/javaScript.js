document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('form-contacto');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío real del formulario

        const nombre = formulario.nombre.value.trim();
        const correo = formulario.correo.value.trim();
        const mensaje = formulario.mensaje.value.trim();

        const campoVacioRegex = /^\s*$/;
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (campoVacioRegex.test(nombre)) {
            alert('Por favor, ingresa tu nombre.');
            return;
        }

        if (!correoRegex.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (campoVacioRegex.test(mensaje)) {
            alert('Por favor, escribe un mensaje.');
            return;
        }

        // ✅ Si todo está bien
        alert("Formulario enviado con éxito ✅");

        // Limpiar campos
        formulario.reset();
    });
});