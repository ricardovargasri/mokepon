var seleccion = document.querySelector('#seleccionar-mascota')

seleccion.addEventListener('click', function(){
    var hipodoge = document.querySelector('#hipodoge')

    if(hipodoge.checked){
        alert('hipodoge seleccionado')
    }else{
        alert('ninguno seleccionado')
    };
});
