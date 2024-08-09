let listaTextoNoEncritado = [];
let listaTextoEncriptado = [];
let vocales = ["a", "e", "i", "o", "u"];
let vocalesEncontradas = [];


function encritarBoton() {
    let EncriptadoTextoBoton = document.getElementById("normalTexto").value;
    listaTextoNoEncritado.push(EncriptadoTextoBoton);
    console.log(`texto: ${listaTextoNoEncritado}`, listaTextoNoEncritado);

/*i inicia de la pocicion cero, si i es menor a la cantidad de la lista segira ejecutandose*/ 
    for (let i = 0; i < listaTextoNoEncritado.length; i++) {

        /*aca estamos accediendo al caracter de la lista en la posicion 
        si i es cero nos dara el primer caraacter asi con las demas */
        let letras = listaTextoNoEncritado[i];

        if (vocales.includes(letras)){
            vocalesEncontradas.push(letras);
        }
    }
    console.log(`las vocales son: ${vocalesEncontradas}`);
    return;
}

function desencritarBoton(){
    let EncriptadoTextoBoton = document.getElementById("encritadoTexto").value;
    listaTextoEncriptado.push(EncriptadoTextoBoton);
    console.log(`texto: ${listaTextoEncriptado}`, listaTextoEncriptado);
    return;
}



/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */