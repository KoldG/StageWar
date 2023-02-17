 function iniciarJuego () {
   let botonSerJugador = document.getElementById("serElegido")
   botonSerJugador.addEventListener("click",seleccionarSerJugador)
 }
 function seleccionarSerJugador (){
    if (document.getElementById('demonio').checked ){
      alert('Bienvenido a casa Demonio')
    } else if (document.getElementById('angel').checked ){
      alert('Bienvenido a casa Angel')
    } else if (document.getElementById('humano').checked ){
      alert('Bienvenido a casa Humano')
    }
 }


 window.addEventListener('load', iniciarJuego)