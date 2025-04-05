const regexIsEmpty = /^\s*$/;

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById("comentario-form");
    const nombre = document.getElementById("nombre");
    const comentario = document.getElementById("comentario");

    function onSubmit_formulario(e) {
        const errors = {};
        let hasErrors = false;

        nombre.classList.remove('error');
        comentario.classList.remove('error');
        
        const erroresPrevios = document.querySelectorAll('.mensaje-error');
        erroresPrevios.forEach(el => el.remove());

        if (regexIsEmpty.test(nombre.value)) {
            hasErrors = true;
            errors["Nombre"] = "El nombre no puede ir vacío.";
        }

        if (regexIsEmpty.test(comentario.value)) {
            hasErrors = true;
            errors["Comentario"] = "El comentario no puede ir vacío.";
        }

        if (hasErrors) {
            const errorKeys = Object.keys(errors);
            let focusAssigned = false;

            for (let errorKey of errorKeys) {
                const errorDivHolder = document.getElementById(`div${errorKey}`);
                if (errorDivHolder) {
                    const errorDivMessage = document.createElement("div");
                    errorDivMessage.textContent = errors[errorKey];
                    errorDivMessage.classList.add('mensaje-error');
                    errorDivHolder.appendChild(errorDivMessage);

                    const inputObject = errorDivHolder.querySelector('input, textarea');
                    if (inputObject) {
                        inputObject.classList.add('error');
                        if (!focusAssigned) {
                            inputObject.focus();
                            focusAssigned = true;
                        }
                    }
                }
            }

            e.preventDefault();
            e.stopPropagation();
        }
    }

    formulario.addEventListener("submit", onSubmit_formulario);
});
