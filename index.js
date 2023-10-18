//boton de seleccion de mascota
var seleccion = document.querySelector('#seleccionar-mascota');

//botones de elemento de ataque
var ataqueFuego = document.querySelector('#boton-fuego');
var ataqueAgua = document.querySelector('#boton-agua');
var ataqueTierra = document.querySelector('#boton-tierra');

//mensaje elementos usados para atacar
var userElementAtack = document.querySelector('.user-element-atack');


//funcion aleatoria
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueUserEelemento(){
    ataqueFuego.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueFuego.textContent} 
        );
    ataqueAgua.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueAgua.textContent}); 
    ataqueTierra.addEventListener('click', () => {
        userElementAtack.innerHTML = ataqueTierra.textContent});
};

function ataquePcEelemento(){
    let elementoPcAleatorio = aleatorio(1, 3);
    let pcElementAtack = document.querySelector('.pc-element-atack');
    
    if(elementoPcAleatorio === 1){
        pcElementAtack.innerHTML = ataqueFuego.textContent;}
    else if(elementoPcAleatorio === 2){
        pcElementAtack.innerHTML = ataqueAgua.textContent;}
    else if(elementoPcAleatorio === 3){
      pcElementAtack.innerHTML = ataqueTierra.textContent}   
};


ataqueUserEelemento();
ataquePcEelemento();



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

