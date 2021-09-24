const result = document.querySelector("#resultado");
const edad_usuario = document.querySelector("#edad");

const obtener_edad = () => {
    const edad = parseInt(edad_usuario.value);
    if (edad < 18) {
        mensaje = "Eres menor de edad"
    }else{
        mensaje = "Eres mayor de edad"
    }
    result.textContent = mensaje;
}