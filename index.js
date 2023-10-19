// variables de quien ataca
let ataqueJugador
let ataqueEnemigo


//boton de seleccion de mascota
var seleccion = document.querySelector('#seleccionar-mascota');

//botones de elemento de ataque
var ataqueFuego = document.querySelector('#boton-fuego');
var ataqueAgua = document.querySelector('#boton-agua');
var ataqueTierra = document.querySelector('#boton-tierra');

//funcion aleatoria
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueUserEelemento(){
    ataqueFuego.addEventListener('click', () => {
        ataqueJugador = ataqueFuego.textContent;
    ataqueAleatorioEnemigo();}
         
        );
    ataqueAgua.addEventListener('click', () => {
        ataqueJugador = ataqueAgua.textContent;
        ataqueAleatorioEnemigo();}
    ); 
    ataqueTierra.addEventListener('click', () => {
        ataqueJugador = ataqueTierra.textContent;
         ataqueAleatorioEnemigo();}
        );
};

function ataqueAleatorioEnemigo(){
    let ataqueEnemigoElemento = aleatorio(1, 3);
    if(ataqueEnemigoElemento === 1){
        ataqueEnemigo = ataqueFuego.textContent;
    } else if(ataqueEnemigoElemento === 2){
        ataqueEnemigo = ataqueAgua.textContent;
    }
    else{
        ataqueEnemigo = ataqueTierra.textContent;
    }
    combate();
    /* crearMensaje(); */
};

//combate
function crearMensaje(resultado){
    let descripcion = document.querySelector('#mensaje-ataque');
    let parrafo = document.createElement('p');
    parrafo.textContent = 'Jugador ataco con '+ ataqueJugador +
    ' y la maquina ataco con '+ ataqueEnemigo +' y el resultado es: '+resultado;

    descripcion.appendChild(parrafo);
    
};
function combate(){
    if(ataqueJugador == ataqueFuego && ataqueEnemigo == ataqueTierra //fuego > tierra
         || ataqueJugador == ataqueTierra && ataqueEnemigo == ataqueAgua //tierra >agua
         || ataqueJugador == ataqueAgua && ataqueEnemigo == ataqueFuego){//agua >fuego
        crearMensaje('gana el jugador');
    } else if(ataqueJugador == ataqueEnemigo){
        crearMensaje('hay un empate');
    }
    else{
        crearMensaje('gana la maquina');
    }
}



ataqueUserEelemento();




seleccion.addEventListener('click', function(){
    var hipodoge = document.querySelector('#hipodoge')
    var capipepo = document.querySelector('#capipepo')
    var ratigueya = document.querySelector('#ratigueya')
    var mascotaJugador = document.querySelector('#mascota-jugador')

    if(hipodoge.checked){
        mascotaJugador.innerHTML = 'hipodoge'
    } else if(capipepo.checked){
        mascotaJugador.innerHTML = 'capipepo'
    }else if(ratigueya.checked){
        mascotaJugador.innerHTML = 'ratigueya'
    }
    else{
        alert('ninguno seleccionado')
    };
    eleccionEnemigo();
});


function eleccionEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.querySelector('#enemiga-mascota');
    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'hipodoge';
    } else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'capipepo';
    }
    else{
        spanMascotaEnemigo.innerHTML = 'ratigueya';
    }
}



function eleccionEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.querySelector('#enemiga-mascota');
    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'hipodoge';
    } else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'capipepo';
    }
    else{
        spanMascotaEnemigo.innerHTML = 'ratigueya';
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}