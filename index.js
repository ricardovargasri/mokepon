//boton de seleccion de mascota
var seleccion = document.querySelector('#seleccionar-mascota');
seleccion.addEventListener('click', seleccionado)
//botones 
var ataqueFuego = document.querySelector('#boton-fuego');
var ataqueAgua = document.querySelector('#boton-agua');
var ataqueTierra = document.querySelector('#boton-tierra');
var restartBoton = document.getElementById('reiniciar');
restartBoton.style.display = 'none';
restartBoton.addEventListener('click', reiniciarJuego);

//seccion
var seccion = document.querySelector('#seleccionar-ataque');
seccion.style.display = 'none';

//mensaje de victoria y ataque
var mensajeAtaque = document.getElementById('mensaje-ataque');
mensajeAtaque.style.display = 'none';


//mensaje elementos usados para atacar
var userElementAtack = document.querySelector('.user-element-atack');
var ataquePcEelemento = document.querySelector('.pc-element-atack');
var victoria = document.getElementById('mensaje-victoria');
//vidas
var vidasJugador = 3 //document.querySelector('#vidas-jugador');
var vidasEnemigo = 3 //document.querySelector('#vidas-enemigo');


//funcion aleatoria
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueUserEelemento(){
    ataqueFuego.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueFuego.textContent;
        activarMensajes();
        ataqueAleatorioEnemigo();
        resultado();//se acutaliza el inner html del span que define el ataque con el innertext ataquefuego
    }//luego de seleccionado unou otro boton por el susario se hace una seleccion aleatoria para la maquina
         
        );
    ataqueAgua.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueAgua.textContent;
        activarMensajes();
        ataqueAleatorioEnemigo();
        resultado();
        }
    ); 
    ataqueTierra.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueTierra.textContent;
        activarMensajes();
        ataqueAleatorioEnemigo();
        resultado();
         }
        );
};
function activarMensajes(){
    mensajeAtaque.style.display = 'block';
};
function ataqueAleatorioEnemigo(){
    let ataqueEnemigo = aleatorio(1, 3);
    if(ataqueEnemigo === 1){
        ataquePcEelemento.innerHTML = ataqueFuego.textContent;
    } else if(ataqueEnemigo === 2){
        ataquePcEelemento.innerHTML = ataqueAgua.textContent;
    }
    else{
        ataquePcEelemento.innerHTML = ataqueTierra.textContent;
    }
};

ataqueUserEelemento();



function resultado(){
    var spanVidasJugador = document.querySelector('#vidas-jugador');
    var spanVidasEnemigo = document.querySelector('#vidas-enemigo');

    if(userElementAtack.innerHTML == ataqueFuego.textContent && ataquePcEelemento.innerHTML == ataqueTierra.textContent){
        victoria.innerHTML = 'punto para la persona';
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        ganador();
    }
    else if(userElementAtack.innerHTML == ataqueAgua.textContent && ataquePcEelemento.innerHTML == ataqueFuego.textContent){
        victoria.innerHTML = 'punto para la persona';
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        ganador();
        
    } else if(userElementAtack.innerHTML == ataqueTierra.textContent && ataquePcEelemento.innerHTML == ataqueAgua.textContent){
        victoria.innerHTML = 'punto para la persona';
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        ganador();
        
    }else if (userElementAtack.innerHTML == ataquePcEelemento.innerHTML){
        victoria.innerHTML = 'empate';
        
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        ganador();
        
    }
    else{
        victoria.innerHTML = 'punto para la maquina';
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
        ganador();
    }
   
    
    
};
function ganador() {
    if (vidasEnemigo === 0) {
        unfunction();
        restartBoton.style.display = 'block';
        var newP = document.createElement('p');
        var newContent = document.createTextNode("Gana la persona");
        newP.appendChild(newContent);
        victoria.innerHTML = ''; // Limpia el contenido actual de victoria
        victoria.appendChild(newP); // Agrega el nuevo elemento 'p' a victoria
    } else if (vidasJugador === 0) {
        unfunction();
        restartBoton.style.display = 'block';
        var newP = document.createElement('p');
        var newContent = document.createTextNode("Gana la maquina");
        newP.appendChild(newContent);
        victoria.innerHTML = ''; // Limpia el contenido actual de victoria
        victoria.appendChild(newP); // Agrega el nuevo elemento 'p' a victoria
    }
}

function unfunction(){
    ataqueAgua.disabled = true;
    ataqueFuego.disabled = true;
    ataqueTierra.disabled = true;
};

//esta funcion define con cual atacremos y contiene la que define con cual atacara el jugador
function seleccionado(){
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
        alert('SEELECCIONA UN MOKEPON!!!');
        window.reload();
    };
    eleccionEnemigo();
    seccionSeleccion = document.querySelector('#seleccion-mascota');
    seccionSeleccion.style.display = 'none';
    //definido con que atacremos ahi si deberia abrirsela posibilidad de escoger elementos de ataque
    //mientras deberian permanecer ocultos
};


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
    desplegador();
};
function desplegador(){
    seccion.style.display = 'block'
};

function reiniciarJuego(){
    location.reload();
};

