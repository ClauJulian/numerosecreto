
let numeroMaxPosible = 10;
let numeroSecreto = Math.floor(Math.random()* numeroMaxPosible + 1);
let numeroUsuario = 0;
let numeroIntentos = 1;
let intentos = 3;

let resultado__juego = document.getElementById("resultado__juego");
let resultado__mensaje = document.getElementById("resultado__mensaje");

//console.log(numeroUsuario);

while(numeroIntentos <= intentos){
    numeroUsuario = parseInt(prompt(`Me indicas un número del 1 al ${numeroMaxPosible}, por favor:`));

    if (numeroUsuario == numeroSecreto) {
        resultado__juego.innerHTML="Ganaste!";
        resultado__mensaje.innerHTML=`Adivinaste el número secreto en ${numeroIntentos} ${numeroIntentos == 1? "intento": "intentos"}`;
        break;
        }else if(numeroUsuario > numeroSecreto){
            
            alert('El número secreto es menor...');
            }else{
                alert('El número secreto es mayor...');
            }
    numeroIntentos++;
    if(numeroIntentos > intentos){
        resultado__juego.innerHTML="Perdiste!";
        resultado__mensaje.innerHTML=`Usaste tus ${intentos} intentos!`;
    }    
};

    
