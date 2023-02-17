 function iniciarJuego () {
   let botonSerJugador = document.getElementById("serElegido")
   botonSerJugador.addEventListener("click",seleccionarSerJugador)
 }
 function seleccionarSerJugador (){
    alert("Elegiste ser...")
 }


 window.addEventListener('load', iniciarJuego)