
/* de esta manera haces un evento, cuando se haga un click en textarea se van a desapareser ciertas cosas */

function advertenciaTexto(){
    document.getElementById("encritadoTexto").addEventListener("click", () =>{/* esta es una funcion de flecha () =>{} */
        let personaImg = document.getElementById("personaImg");
        let TextoInformativo = document.getElementById("TextoInformativo");
        personaImg.style.display = "none";
        TextoInformativo.style.display = "none";
    });
}


function encritarBoton() {

    let noEncriptadoTextoBoton = document.getElementById("normalTexto").value.toLowerCase();
    let personaImg = document.getElementById("personaImg");
    let TextoInformativo = document.getElementById("TextoInformativo");
    let caracteres = /^[a-z-\n  ]+$/;/* +: Indica que puede haber uno o más de los caracteres permitidos. */
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
        TextoInformativo.style.display = "none";
        personaImg.style.display = "none";
        console.log("encritado con exito");
        
    }else{
        alert("No se detecto un mensaje para encriptar");
        personaImg.style.display = "block";
        TextoInformativo.style.display = "flex";
        document.getElementById("encritadoTexto").value = "";
        console.log("alerta activada");
        
    }
    if(!caracteres.test(noEncriptadoTextoBoton)) {
        alert("El campo de del texto sin encriptar no debe contener caracteres especiales ni numeros ");
        document.getElementById("normalTexto").value = "";
        document.getElementById("encritadoTexto").value = "";
        personaImg.style.display = "block";
        TextoInformativo.style.display = "flex";
        console.log("alerta 2 activada");
    }
    if(window.matchMedia("(max-width: 23.48rem)").matches){/* esto sirve para que haga algo cuando ell tamaño sea el indicado */
            let personaImg = document.getElementById("personaImg");
            personaImg.style.display = "none";
        }
        if(window.matchMedia("(max-width: 49.25rem)").matches){/* esto sirve para que haga algo cuando ell tamaño sea el indicado */
            let personaImg = document.getElementById("personaImg");
            personaImg.style.display = "none";
            
        }
    return;
    
}



function desencritarBoton(){
    let EncriptadoTextoBoton = document.getElementById("encritadoTexto").value.toLowerCase();
    let personaImg = document.getElementById("personaImg");
    let TextoInformativo = document.getElementById("TextoInformativo");
    let caracteres = /^[a-z-\n  ]+$/;
    let cifradoTexto = EncriptadoTextoBoton
                                            .replace(/enter/gi, "e")
                                            .replace(/imes/gi, "i")
                                            .replace(/ai/gi, "a")
                                            .replace(/ober/gi, "o")
                                            .replace(/ufat/gi, "u");

    if (EncriptadoTextoBoton.length != 0){
        document.getElementById("normalTexto").value = cifradoTexto;
        document.getElementById("encritadoTexto").value = "";
        TextoInformativo.style.display = "none";
        personaImg.style.display = "none";

        }else{
            alert("No se encontro un texto para desencriptar");
            document.getElementById("normalTexto").value = "";
            personaImg.style.display = "block";
            TextoInformativo.style.display = "flex";
        }

    if(!caracteres.test(EncriptadoTextoBoton)) {
        alert("El campo de del texto encriptado no debe contener caracteres especiales ni numeros ");
        document.getElementById("normalTexto").value = "";
        document.getElementById("encritadoTexto").value = "";
        personaImg.style.display = "block";
        TextoInformativo.style.display = "flex";
    }
    if(window.matchMedia("(max-width: 23.48rem)").matches){/* esto sirve para que haga algo cuando ell tamaño sea el indicado */
            let personaImg = document.getElementById("personaImg");
            personaImg.style.display = "none";
            
        }
        if(window.matchMedia("(max-width: 49.25rem)").matches){/* esto sirve para que haga algo cuando ell tamaño sea el indicado */
            let personaImg = document.getElementById("personaImg");
            personaImg.style.display = "none";
        }
    return;
    }



function copiarBoton(){
    let EncriptadoTextoBoton = document.getElementById("encritadoTexto");
    
    if(EncriptadoTextoBoton.value.trim() === ""){
        alert("No hay texto para copiar");

        
    }else if(EncriptadoTextoBoton.length != 0){
            EncriptadoTextoBoton.select();
            EncriptadoTextoBoton.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(EncriptadoTextoBoton.value);/* navigator.clipboard es parte de la Clipboard API, que proporciona acceso para leer y escribir en el portapapeles del sistema de forma segura. */
            alert(`texto copiado ${EncriptadoTextoBoton.value}`);
            console.log(`El texto a sido copiado ${EncriptadoTextoBoton}`);
    }
    return;
}

advertenciaTexto();
