let nombre = ""
 nombre = prompt("Ingresa tu nombre")
let habilidadSer
let habilidadEnemigo


 function iniciarJuego () {
   let botonSerJugador = document.getElementById("serElegido")
   botonSerJugador.addEventListener("click",seleccionarSerJugador)

   let botonFuerza = document.getElementById('boton-fuerza')
   botonFuerza.addEventListener('click', habilidadFuerza)
   
   let botonVelocidad = document.getElementById('boton-velocidad')
   botonVelocidad.addEventListener('click', habilidadVelocidad)
   
   let botonInteligencia = document.getElementById('boton-inteligencia')
   botonInteligencia.addEventListener('click', habilidadInteligencia)

   
   document.getElementById('nombreJugador').innerHTML = nombre   
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
   
   let habilidadEnemigo = aleatorio(1,3) 
   let spanHabilidadEnemigo = document.getElementById('habilidadPC')
   
   if (habilidadEnemigo == 1){
      spanHabilidadEnemigo.innerHTML = 'Fuerza'
   } else if (habilidadEnemigo == 2) {
      spanHabilidadEnemigo.innerHTML = 'Velocidad'
   }else if (habilidadEnemigo ==3) {
      spanHabilidadEnemigo.innerHTML = 'Inteligencia'
   }

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
 function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 



 


 window.addEventListener('load', iniciarJuego)