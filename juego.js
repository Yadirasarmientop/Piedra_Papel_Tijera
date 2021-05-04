//VARIABLES//

var piedra = document.getElementById('piedra');
piedra.addEventListener('click', eligioPiedra);

var papel = document.getElementById('papel');
papel.addEventListener('click', eligioPapel);

var tijera = document.getElementById('tijera');
tijera.addEventListener('click', eligioTijera);

var sel = document.getElementById('seleccion');
var figcSel = document.getElementById ('figc');

var botInicio = document.getElementById('botinicio');
var botFin = document.getElementById('botfin');
var mens = document.getElementById ('mensaje');

var inicio = document.getElementById('botinicio');
inicio.addEventListener('click', clickIniciar);

var eleccion = ['piedra', 'papel', 'tijera'];

//CUERPO//

botFin.hidden = true;
botFin.addEventListener('click', recargaPagina);
sel.hidden = true;


//FUNCIONES//
var pickPiedra = false
var pickPapel = false
var pickTijera = false

function eligioPiedra() {
    console.log('piedra');
    limpiarSeleccion()
    piedra.style.backgroundColor = "rgb(67, 123, 175)";
    piedra.style.padding = "8px";
    piedra.style.borderRadius = "10px";
    sel.src = 'piedra.png';
    pickPiedra = true
    
}
    
function eligioPapel() {
    console.log('papel');
    limpiarSeleccion();
    papel.style.backgroundColor = "rgb(67, 123, 175)";
    papel.style.padding = "8px";
    papel.style.borderRadius = "10px";
    sel.src = 'papel.png';
    pickPapel = true
       
}
function eligioTijera() {
    console.log('tijera');
    limpiarSeleccion();
    tijera.style.backgroundColor = "rgb(67, 123, 175)";
    tijera.style.padding = "8px";
    tijera.style.borderRadius = "10px";
    sel.src = 'tijera.png';
    pickTijera = true
        
}

function clickIniciar() {
    sel.hidden = false;
    botFin.hidden = false;
    piedra.hidden = true;
    papel.hidden = true;
    tijera.hidden = true;
    botInicio.hidden = true;
    textEleccion();
    eleccionPc()
    winLose();     
}

function textEleccion(){
    if (pickPiedra) {
        figcSel.innerHTML = 'Piedra';
        
    } else if (pickPapel){
        figcSel.innerHTML = 'Papel';
        
    } else if (pickTijera){
        figcSel.innerHTML = 'Tijera';
       
    }
}

function eleccionAleatoria (){
    var posicion = Math.floor(Math.random()*3)
    return eleccion[posicion];
}

var resultado = ''

function eleccionPc(){
    resultado = eleccionAleatoria()
    if (resultado == 'piedra') {
        piedra.hidden = false;
        
    } else if (resultado == 'papel'){
        papel.hidden = false;
        
    } else {
        tijera.hidden = false;
       
    }
}


function recargaPagina(){
    window.location.href = window.location.href;
}

function limpiarSeleccion() {
    tijera.style.backgroundColor = "";
    tijera.style.padding = "";
    tijera.style.borderRadius = "";

    papel.style.backgroundColor = "";
    papel.style.padding = "";
    papel.style.borderRadius = "";
    
    piedra.style.backgroundColor = "";
    piedra.style.padding = "";
    piedra.style.borderRadius = "";
}
function winLose(){
    if(resultado == 'piedra' && pickPiedra) {
        mens.innerHTML = 'Hay un empate!!';
    } else if (resultado == 'papel' && pickPapel){
        mens.innerHTML = 'Hay un empate!!';
    } else if(resultado == 'tijera' && pickTijera){
        mens.innerHTML = 'Hay un empate!!';
    } else if (resultado == 'piedra' && pickTijera){
        mens.innerHTML = 'El ganador es el PC. <br/> Has perdido, sigue intentando.';
    } else if(resultado == 'papel' && pickPiedra){
        mens.innerHTML = 'El ganador es el PC. <br/> Has perdido, sigue intentando.';
    } else if (resultado == 'tijera' && pickPapel){
        mens.innerHTML = 'El ganador es el PC. <br/> Has perdido, sigue intentando.';
    } else if (resultado == 'tijera' && pickPiedra){
        mens.innerHTML = 'El ganador es el Usuario, ¡¡Felicitaciones!!';
    } else if (resultado == 'piedra' && pickPapel){
        mens.innerHTML = 'El ganador es el Usuario, ¡¡Felicitaciones!!';
    } else if (resultado == 'piedra' && pickTijera){
        mens.innerHTML = 'El ganador es el Usuario, ¡¡Felicitaciones!!';
    } 

}


