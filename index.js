// INSTRUCCIONES
// letra "e" es "enter"
// letra "i" es "imes"
// letra "a" es "ai"
// letra "o" es "ober"
// letra "u" es "ufat"

// VARIABLES
// elementos html
const textArea = document.querySelector(".bd_ma_se_textarea");
const resMessage = document.querySelector(".bd_ma_asi_textarea");
const actionCopy = document.getElementById("copy");
const btnEncriptRequest = document.getElementById("btnEncriptRequest");
const btnDencriptRequest = document.getElementById("btnDencriptRequest");
// 
const codeMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

// ACCIONES
btnEncriptRequest.addEventListener("click", () => btnEncript("encriptar"))

btnDencriptRequest.addEventListener("click", () => btnEncript("desencriptar"))

// FUNCIONES
function btnEncript(action) {
    if (!textArea.value) {
        swal("ups...", `No hay nada que ${action}`, "warning");
        return;
    }
    const textoEncriptado = Cripting(textArea.value, action)
    resMessage.innerHTML = textoEncriptado;
    textArea.value = "";
    resMessage.style.backgroundImage = "none";
    actionCopy.style.display = "show";
    actionCopy.style.display = "inherit";
}

function Cripting(val, action) {
    val = val.toLowerCase();
    switch (action) {
        case "encriptar":
            for (let i = 0; i < codeMatriz.length; i++) {
                if (val.includes(codeMatriz[i][0])) {
                    val = val.replaceAll(codeMatriz[i][0], codeMatriz[i][1]);
                }
            }
            break;
        case "desencriptar":
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

function validarTexto() {
    let text = textArea.value;
    // TODO investigar regex
    // Remover las vocales con tilde
    let textClean = text.replace(/[^A-Za-z0-9+\s+]/g, '');

    if (text !== textClean) {
        textArea.value = textClean;
        // alert('No se permiten caracteres especiales como vocales con tilde.');
    }
}

function copiar() {
    let texto = resMessage.textContent;
    // TODO investigar navigator
    navigator.clipboard.writeText(texto)
        .then(() => {
            swal({
                title: "bien",
                text: "Se copió con exito",
                icon: "success",
                buttons: false
            })
        })
}