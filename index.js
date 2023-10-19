//boton de seleccion de mascota
var seleccion = document.querySelector('#seleccionar-mascota');

//botones de elemento de ataque
var ataqueFuego = document.querySelector('#boton-fuego');
var ataqueAgua = document.querySelector('#boton-agua');
var ataqueTierra = document.querySelector('#boton-tierra');

//mensaje elementos usados para atacar
var userElementAtack = document.querySelector('.user-element-atack');
var ataquePcEelemento = document.querySelector('.pc-element-atack');
var victoria = document.getElementById('mensaje-victoria');


//funcion aleatoria
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueUserEelemento(){
    ataqueFuego.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueFuego.textContent;
        ataqueAleatorioEnemigo();
        resultado();//se acutaliza el inner html del span que define el ataque con el innertext ataquefuego
    }//luego de seleccionado unou otro boton por el susario se hace una seleccion aleatoria para la maquina
         
        );
    ataqueAgua.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueAgua.textContent;
        ataqueAleatorioEnemigo();
        resultado();
        }
    ); 
    ataqueTierra.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueTierra.textContent;
        ataqueAleatorioEnemigo();
        resultado();
         }
        );
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
    if(userElementAtack.innerHTML == ataqueFuego.textContent && ataquePcEelemento.innerHTML == ataqueTierra.textContent){
        victoria.innerHTML = 'gana la persona'
    }
    else if(userElementAtack.innerHTML == ataqueAgua.textContent && ataquePcEelemento.innerHTML == ataqueFuego.textContent){
        victoria.innerHTML = 'gana la persona';
    } else if(userElementAtack.innerHTML == ataqueTierra.textContent && ataquePcEelemento.innerHTML == ataqueAgua.textContent){
        victoria.innerHTML = 'gana la persona';
    }else if (userElementAtack.innerHTML == ataquePcEelemento.innerHTML){
        victoria.innerHTML = 'hay un empate';
    }
    else{
        victoria.innerHTML = 'gana la maquina'
    }
};

function resultado(){ 
    if(userElementAtack.innerHTML == ataqueFuego.textContent && ataquePcEelemento.innerHTML == ataqueTierra.textContent){
        victoria.innerHTML = 'gana la persona'
    }
    else if(userElementAtack.innerHTML == ataqueAgua.textContent && ataquePcEelemento.innerHTML == ataqueFuego.textContent){
        victoria.innerHTML = 'gana la persona';
    } else if(userElementAtack.innerHTML == ataqueTierra.textContent && ataquePcEelemento.innerHTML == ataqueAgua.textContent){
        victoria.innerHTML = 'gana la persona';
    }else if (userElementAtack.innerHTML == ataquePcEelemento.innerHTML){
        victoria.innerHTML = 'hay un empate';
    }
    else{
        victoria.innerHTML = 'gana la maquina'
    }
};
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

