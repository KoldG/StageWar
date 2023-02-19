let nombre = ""
 nombre = prompt("Ingresa tu nombre")
let habilidadSer
let habilidadEnemigo
let vidasSerJJ = 3
let vidasEnemigoPC = 3


 function iniciarJuego () {
   let botonSerJugador = document.getElementById("serElegido")
   botonSerJugador.addEventListener("click",seleccionarSerJugador)

   let botonFuerza = document.getElementById('boton-fuerza')
   botonFuerza.addEventListener('click', habilidadFuerza)
   
   let botonVelocidad = document.getElementById('boton-velocidad')
   botonVelocidad.addEventListener('click', habilidadVelocidad)
   
   let botonInteligencia = document.getElementById('boton-inteligencia')
   botonInteligencia.addEventListener('click', habilidadInteligencia)
  
    
 }
 function habilidadFuerza () {
   
   habilidadSer = 'Fuerza'
   document.getElementById('habilidadJJ').innerHTML = 'Fuerza'
   habilidadAEnemigo ()
 }
 function habilidadVelocidad () {
   habilidadSer = 'Velocidad'
   document.getElementById('habilidadJJ').innerHTML = 'Velocidad'
   habilidadAEnemigo ()

 }
 function habilidadInteligencia () {
   habilidadSer = 'Inteligencia'
   document.getElementById('habilidadJJ').innerHTML = 'Inteligencia'
   habilidadAEnemigo ()

 }

 function habilidadAEnemigo () {
   
   let habilidadAleatorio= aleatorio(1,3) 
   let spanHabilidadEnemigo = document.getElementById('habilidadPC')
   
   if (habilidadAleatorio == 1){
    habilidadEnemigo = 'Fuerza' 
    spanHabilidadEnemigo.innerHTML = 'Fuerza'
   } else if (habilidadAleatorio == 2) {
    habilidadEnemigo = 'Velocidad'  
    spanHabilidadEnemigo.innerHTML = 'Velocidad'
   }else if (habilidadAleatorio == 3){
      spanHabilidadEnemigo.innerHTML = 'Inteligencia'
      habilidadEnemigo = 'Inteligencia'
       
    
   }
   resultadoJuego()
 }

 function seleccionarSerJugador (){
   let inputDemonio = document.getElementById('demonio')
   let inputAngel = document.getElementById('angel')
   let inputHumano = document.getElementById('humano')
   let spanSerSeleccionado = document.getElementById('serSeleccionado')
  


   
   if (inputDemonio.checked ){
      spanSerSeleccionado.innerHTML = 'Demonio'
    } else if (inputAngel.checked ){
      spanSerSeleccionado.innerHTML = 'Angel'
    } else if (inputHumano.checked ){
      spanSerSeleccionado.innerHTML = 'Humano'
    } else {
      alert ('Selecciona cualquiera de los seres vivos')
    }


    serEnemigo()
 }
 function serEnemigo () {
   let serEnemigo = aleatorio(1,3)
   let spanSerEnemigo = document.getElementById('serPc')

   if (serEnemigo == 1){
      spanSerEnemigo.innerHTML = 'Demonio'
      document.getElementById('nombreJugadorK').innerHTML = nombre   

   } else if (serEnemigo == 2){
      spanSerEnemigo.innerHTML = 'Angel'
      document.getElementById('nombreJugadorK').innerHTML = nombre   

   } else if (serEnemigo == 3){
      spanSerEnemigo.innerHTML = 'Humano'
      document.getElementById('nombreJugadorK').innerHTML = nombre   

   }
 }

 function crearMensaje(resultado) {
  let mensajeResultado = document.getElementById('mensajes')
  
  let parrafo = document.createElement('p')
  parrafo.innerHTML = 'Escogiste ' + habilidadSer + ', Tu enemigo escogio ' + habilidadEnemigo + ' ' + resultado
  mensajeResultado.appendChild(parrafo)
  
 }
 
 
 function resultadoJuego() {
  let spanVidasSer = document.getElementById('vidasSer')
  let spanVidasEnemigo = document.getElementById('vidasEnemigo')
  
  if (habilidadSer == habilidadEnemigo){
    crearMensaje('Empate') 
  }  else if ((habilidadSer == 'Fuerza' && habilidadEnemigo == 'Velocidad') || (habilidadSer == 'Velocidad' && habilidadEnemigo == 'Inteligencia') || (habilidadSer == 'Inteligencia' && habilidadEnemigo == 'Fuerza')) {
    crearMensaje('Ganaste')
    vidasEnemigoPC--
    spanVidasEnemigo.innerHTML = vidasEnemigoPC
  } else {
    crearMensaje('Perdiste')
    vidasSerJJ--
    spanVidasSer.innerHTML = vidasSerJJ 
  }
}

 function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 



 


 window.addEventListener('load', iniciarJuego)