let nombre = ""
nombre = prompt("Ingresa tu nombre")
 function iniciarJuego () {
   let botonSerJugador = document.getElementById("serElegido")
   botonSerJugador.addEventListener("click",seleccionarSerJugador)
   
   document.getElementById('nombreJugador').innerHTML = nombre   
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
   } else if (serEnemigo == 2){
      spanSerEnemigo.innerHTML = 'Angel'
   } else if (serEnemigo == 3){
      spanSerEnemigo.innerHTML = 'Humano'
   }
 }
 function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }

  

 


 window.addEventListener('load', iniciarJuego)