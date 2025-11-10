document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");

  [nombre, apellido].forEach((campo) => {
    campo.addEventListener("input", () => {
      campo.value = campo.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");

      const invalidFields = form.querySelectorAll(":invalid");
      invalidFields.forEach((field) => {
        let message = "Campo inválido";

        if (field.validity.valueMissing) {
          message = "Este campo es obligatorio";
        } else if (field.validity.typeMismatch && field.type === "email") {
          message = "Debe ingresar un correo electrónico válido";
        }

        field.setAttribute("data-bs-toggle", "tooltip");
        field.setAttribute("data-bs-placement", "right");
        field.setAttribute("title", message);

        
        new bootstrap.Tooltip(field);
      });

      return;
    }
    /*modal*/

    
    form.reset();
    form.classList.remove("was-validated");
  });
});
