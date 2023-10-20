function verificarEdad() {
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (
        fechaActual.getMonth() < fechaNacimiento.getMonth() ||
        (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
            fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
        edad--;
    }

    if (edad >= 18) {
        document.getElementById("resultado").textContent = "Eres mayor de edad en Colombia.";
    } else {
        document.getElementById("resultado").textContent = "Eres menor de edad en Colombia.";
    }
}
