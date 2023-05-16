const textArea = document.querySelector(".bd_ma_se_textarea");
const resMessage = document.querySelector(".bd_ma_asi_textarea");
const actionCopy = document.getElementById("copy");

// letra "e" es "enter"
// letra "i" es "imes"
// letra "a" es "ai"
// letra "o" es "ober"
// letra "u" es "ufat"
const codeMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


function btnEncript() {
    const textoEncriptado = Cript(textArea.value, "encript")
    if (!textoEncriptado) {
        swal("ups...", "No hay nada que encriptar", "warning");
        return;
    }
    resMessage.value = textoEncriptado;
    textArea.value = "";
    resMessage.style.backgroundImage = "none";
    actionCopy.style.display = "show";
    actionCopy.style.display = "inherit";
}
function btnDencript() {
    const textoDesencriptado = Cript(textArea.value, "desencript")
    if (!textoDesencriptado) {
        swal("ups...", "No hay nada que desencriptar", "warning");
        return;
    }
    resMessage.value = textoDesencriptado;
    textArea.value = "";
    resMessage.style.backgroundImage = "none";
    actionCopy.style.display = "show";
    actionCopy.style.display = "inherit";
}
function Cript(val, action) {
    val = val.toLowerCase();
    switch (action) {
        case "encript":
            for (let i = 0; i < codeMatriz.length; i++) {
                if (val.includes(codeMatriz[i][0])) {
                    val = val.replaceAll(codeMatriz[i][0], codeMatriz[i][1]);
                }
            }
            break;
        case "desencript":
            for (let i = 0; i < codeMatriz.length; i++) {
                if (val.includes(codeMatriz[i][1])) {
                    val = val.replaceAll(codeMatriz[i][1], codeMatriz[i][0]);
                }
            }
            break;
        default:
            swal("Bro?...", "Como hiciste eso?", "danger");
            break;
    }
    return val;
}
function copiar() {
    resMessage.select();
    document.execCommand("cut");
    swal("¡Bien!", "Se copió con exito", "success");
}