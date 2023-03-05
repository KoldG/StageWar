let nombre = ""
// nombre = prompt("Ingresa tu nombre")
let habilidadSer
let habilidadEnemigo
let vidasSerJJ = 3
let vidasEnemigoPC = 3


 function iniciarJuego () {
  let sectionDestreza = document.getElementById('destreza')
  sectionDestreza.style.display = 'none' 
  
  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'none'

  let botonSerElegido = document.getElementById('serElegido')
  botonSerElegido.style.display = 'none'

  let inputDemonio = document.getElementById('demonio')
  inputDemonio.addEventListener('click',botonSelerccionar)

  let inputAngel = document.getElementById('angel')
  inputAngel.addEventListener('click',botonSelerccionar)

  let inputHumano = document.getElementById('humano')
  inputHumano.addEventListener('click',botonSelerccionar)

  let botonSerJugador = document.getElementById("serElegido")
  botonSerJugador.addEventListener("click",seleccionarSerJugador)

  let botonFuerza = document.getElementById('boton-fuerza')
  botonFuerza.addEventListener('click', habilidadFuerza)
   
  let botonVelocidad = document.getElementById('boton-velocidad')
  botonVelocidad.addEventListener('click', habilidadVelocidad)
   
  let botonInteligencia = document.getElementById('boton-inteligencia')
  botonInteligencia.addEventListener('click', habilidadInteligencia)

  let botonReiniciar = document.getElementById('reiniciar')
  botonReiniciar.addEventListener('click', reiniciarJuego)

// seleccionarSerJugador
  let sectionParrafo = document.getElementById('parrafo')
  let sectionEleccion = document.getElementById('escoge')
  let spanSerSeleccionado = document.getElementById('serSeleccionado')

//botonSeleccionar
-1
//serEnemigo 
0
//habilidadFuerza
0
//habilidadVelocidad
0
//habilidadInteligencia
0
//habilidadEnemigo
0
//crearMensaje
0
//resultadoJuego
0
//vidasFinal
0
//
function seleccionarSerJugador (){
    sectionParrafo.style.display = 'none'
  

    sectionEleccion.style.display = 'none'
    

    sectionDestreza.style.display = 'block' 
    
    let inputDemonio = document.getElementById('demonio')
    let inputAngel = document.getElementById('angel')
    let inputHumano = document.getElementById('humano')
    
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
  function botonSelerccionar (){
  
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
  let mensajeResultadoA = document.getElementById('resultadoA')
  mensajeResultadoA.innerHTML = resultado
  
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
  let mensajeResultado = document.getElementById('pili')
  
  let fin = document.createElement('p')
  fin.innerHTML = terminado
  mensajeResultado.appendChild(fin)

  botonFuerza = document.getElementById('boton-fuerza')
  botonFuerza.disabled = true 
   
  let botonVelocidad = document.getElementById('boton-velocidad')
  botonVelocidad.disabled = true
   
  let botonInteligencia = document.getElementById('boton-inteligencia')
  botonInteligencia.disabled = true
}

function reiniciarJuego (){
  location.reload()
}

 function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
 window.addEventListener('load', iniciarJuego)