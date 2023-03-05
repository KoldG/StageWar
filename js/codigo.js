let nombre = ""
nombre = prompt("Ingresa tu nombre")
let habilidadSer
let habilidadEnemigo
let vidasSerJJ = 3
let vidasEnemigoPC = 3

let sectionDestreza = document.getElementById('destreza')
let sectionReiniciar = document.getElementById('reiniciar')
let botonSerElegido = document.getElementById('serElegido')
let inputDemonio = document.getElementById('demonio')
let inputAngel = document.getElementById('angel')
let inputHumano = document.getElementById('humano')
let botonSerJugador = document.getElementById("serElegido")
let botonFuerza = document.getElementById('boton-fuerza')
let botonVelocidad = document.getElementById('boton-velocidad')
let botonInteligencia = document.getElementById('boton-inteligencia')
let botonReiniciar = document.getElementById('reiniciar')


let sectionParrafo = document.getElementById('parrafo')
let sectionEleccion = document.getElementById('escoge')
let spanSerSeleccionadoA = document.getElementById('serSeleccionadoA')
  
let mensajeResultado = document.getElementById('pili')

function iniciarJuego () {
  sectionDestreza.style.display = 'none' 
  
  sectionReiniciar.style.display = 'none'

  botonSerElegido.style.display = 'none'

  inputDemonio.addEventListener('click',botonSeleccionar)

  inputAngel.addEventListener('click',botonSeleccionar)

  inputHumano.addEventListener('click',botonSeleccionar)

  botonSerJugador.addEventListener("click",seleccionarSerJugador)

  botonFuerza.addEventListener('click', habilidadFuerza)

  botonVelocidad.addEventListener('click', habilidadVelocidad)

  botonInteligencia.addEventListener('click', habilidadInteligencia)

  botonReiniciar.addEventListener('click', reiniciarJuego)
  
}
  
function seleccionarSerJugador (){
    sectionParrafo.style.display = 'none'
  
    sectionEleccion.style.display = 'none'
    
    sectionDestreza.style.display = 'block' 
    
    if (inputDemonio.checked ){
      spanSerSeleccionadoA.innerHTML = 'Demonio'
    } else if (inputAngel.checked ){
      spanSerSeleccionadoA.innerHTML = 'Angel'
    } else if (inputHumano.checked ){
      spanSerSeleccionadoA.innerHTML = 'Humano'
    } else {
      alert ('Selecciona cualquiera de los seres vivos')
    } 
    
      serEnemigo()
   }
  function botonSeleccionar (){
    botonSerElegido.style.display = 'block'
   
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

 function crearMensaje(resultado) {
  let mensajeResultado = document.getElementById('mensajes')
  let mensajeResultadoA = document.getElementById('resultadoA')

  mensajeResultadoA.innerHTML = resultado

  // let parrafo = document.createElement('p')
  // parrafo.innerHTML = 'Escogiste ' + habilidadSer + ', Tu enemigo escogio ' + habilidadEnemigo + ' ' + resultado
  // mensajeResultado.appendChild(parrafo)
  
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
  vidasFinal()
}
function vidasFinal () {
  if (vidasEnemigoPC == 0){
    mensajeVidasFinal("Fue una victoria maravillosa")
    let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'flex'
  } else if (vidasSerJJ == 0){
    mensajeVidasFinal("La derrota es lo peor que se puede saborear")
    let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'flex'
  }
}

function mensajeVidasFinal (terminado){
  let fin = document.createElement('p')
  fin.innerHTML = terminado
  mensajeResultado.appendChild(fin)

  botonFuerza.disabled = true 
   
  botonVelocidad.disabled = true
   
  botonInteligencia.disabled = true
}

function reiniciarJuego (){
  location.reload()
}

 function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 
 window.addEventListener('load', iniciarJuego)