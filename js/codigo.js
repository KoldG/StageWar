 function iniciarJuego () {
   let botonSerJugador = document.getElementById("serElegido")
   botonSerJugador.addEventListener("click",seleccionarSerJugador)
 }
 function seleccionarSerJugador (){
   let inputDemonio = document.getElementById('demonio')
   let inputAngel = document.getElementById('angel')
   let inputHumano = document.getElementById('humano')
   
   if (inputDemonio.checked ){
      alert('Bienvenido a casa Demonio')
    } else if (inputAngel.checked ){
      alert('Bienvenido a casa Angel')
    } else if (inputHumano.checked ){
      alert('Bienvenido a casa Humano')
    }
 }


 window.addEventListener('load', iniciarJuego)