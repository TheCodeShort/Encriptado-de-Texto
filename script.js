let textoEncritado = [];

function encritarBoton() {
    let noEncriptadoTextoBoton = document.getElementById("normalTexto").value.toLowerCase();
    let personaImg = document.getElementById("personaImg");
    let TextoInformativo = document.getElementById("TextoInformativo");
    
    /*.replace(/e/gi "") nos cambia una letra y el primer parametro me esta diciendo que vamos a cambiar la letra 
    e por la palabra enter que es lo que se pone entre comillas */
    let cifradoTexto = noEncriptadoTextoBoton
                                            .replace(/e/gi, "enter")
                                            .replace(/i/gi, "imes")
                                            .replace(/a/gi, "ai")
                                            .replace(/o/gi, "ober")
                                            .replace(/u/gi, "ufat");
    if(noEncriptadoTextoBoton.length != 0){
        document.getElementById("encritadoTexto").value = cifradoTexto;
        document.getElementById("normalTexto").value = "";
        TextoInformativo.textContent = "";
        personaImg.style.display = "none";
    }
    return;
}


function desencritarBoton(){
    let EncriptadoTextoBoton = document.getElementById("encritadoTexto").value.toLowerCase();
    let personaImg = document.getElementById("personaImg");
    let TextoInformativo = document.getElementById("TextoInformativo");

    let cifradoTexto = EncriptadoTextoBoton
                                            .replace(/enter/gi, "e")
                                            .replace(/imes/gi, "i")
                                            .replace(/ai/gi, "a")
                                            .replace(/ober/gi, "o")
                                            .replace(/ufat/gi, "u");

    if(EncriptadoTextoBoton.length != 0){
        document.getElementById("normalTexto").value = cifradoTexto;
        document.getElementById("encritadoTexto").value = "";
        TextoInformativo.textContent = "";
        personaImg.style.display = "none";
    }
    return;
}


function  botonCopiar(){
    botonCopiar
}


/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */