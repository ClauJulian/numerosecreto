
let numeroSecreto = generarNumeroSecreto();
let intentos= 1;
// console.log( "numero secreto: " + numeroSecreto);

editarTitulosPrincipales();
generarNumeroSecreto();

// FUNCIONES UTILES GENERICAS
function editarElementoHTML(elemento,mensaje){
    return document.querySelector(elemento).innerHTML=mensaje;
}

function limpiarCaja(){
    return document.getElementById('intentoUsuario').value = "";
}

function editarTitulosPrincipales(){
    editarElementoHTML("h1","El Número Secreto");
    editarElementoHTML("p", "Elije un número del 1 al 10");    
}


// FUNCIONES DEL JUEGO
function generarNumeroSecreto(){
    return parseInt(Math.floor(Math.random()* 10 + 1));  
};

function condicionesIniciales(){
    editarTitulosPrincipales();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById("botonJuegoNuevo").setAttribute('disabled', true);
    console.log( "numero secreto: " + numeroSecreto);
}


function reiniciarJuego(){
    condicionesIniciales();    
    limpiarCaja();
}

function intentarNumero(){
    let intentoUsuario = parseInt(document.getElementById('intentoUsuario').value); 
    if(intentoUsuario == numeroSecreto){
        editarElementoHTML('p',`Ganaste en ${intentos} ${intentos == 1 ? "intento" : "intentos"} !`);
        document.getElementById("botonJuegoNuevo").removeAttribute("disabled");

    } else {
        if(intentoUsuario > numeroSecreto){
            editarElementoHTML('p','El numero es menor');
        }else{
            editarElementoHTML('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    //console.log("numero usuario: " + intentoUsuario);    
}
