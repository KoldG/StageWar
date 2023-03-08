 let nombre = ""
// nombre = prompt("Ingresa tu nombre")
let habilidadSer
let habilidadEnemigo = []
let opcionDeSeres
let serjugador123
let vidasSerJJ = 3
let vidasEnemigoPC = 3
let ataquesHabilidad
let botonFuerza 
let botonVelocidad 
let botonInteligencia 
let ataqueSerEnemigo
let indexAtaqueEnemigo
let indexAtaqueJugador
let botones = []
let ataqueJugador = []
let seres = []

const contenedorSeres = document.getElementById('contenedorSeres')
const sectionDestreza = document.getElementById('destreza')
const sectionReiniciar = document.getElementById('reiniciar')
const botonSerElegido = document.getElementById('serElegido')
const spanSerEnemigo = document.getElementById('serPc')
const botonSerJugador = document.getElementById("serElegido")
const botonReiniciar = document.getElementById('reiniciar')
const sectionParrafo = document.getElementById('parrafo')
const sectionEleccion = document.getElementById('escoge')
const spanSerSeleccionadoA = document.getElementById('serSeleccionadoA')
const mensajeResultado = document.getElementById('pili')
const contenedorPelea = document.getElementById('pelea')
const spanVidasSer = document.getElementById('vidasSer')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')

let inputDemonio 
let inputAngel 
let inputHumano 
class Ser {
  constructor(nombre1, foto, vida, tarjeta){
    this.nombre1 = nombre1
    this.foto = foto
    this.vida = vida
    this.habilidad = []
    this.tarjeta = tarjeta

  }
}


let demonio = new Ser('Demonio', 'assets/demonio.avif', 5, "tarjetasSerDemonio")

let angel = new Ser('Angel', 'assets/angel.jpg', 5, 'tarjetasSerAngel')

let humano = new Ser('Humano', 'assets/humano.jpg', 5, 'tarjetasSerHumano')

demonio.habilidad.push (
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'},
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'},
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'}, 
  {nombre: '🏃‍♂️', id: 'boton-velocidad', class: 'tarjetasPeleaB'},
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'}, 
)

angel.habilidad.push (
  {nombre: '🏃‍♂️', id: 'boton-velocidad', class: 'tarjetasPeleaB'},
  {nombre: '🏃‍♂️', id: 'boton-velocidad', class: 'tarjetasPeleaB'},
  {nombre: '🏃‍♂️', id: 'boton-velocidad', class: 'tarjetasPeleaB'},
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'}, 
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'}, 
)

humano.habilidad.push (
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'},
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'},
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'},
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'}, 
  {nombre: '🏃‍♂️', id: 'boton-velocidad', class: 'tarjetasPeleaB'},
)

seres.push(demonio,angel,humano)

function iniciarJuego () {
  sectionDestreza.style.display = 'none' 
  seres.forEach((serx) => {
    opcionDeSeres = `
    <input type="radio" name="ser" id=${serx.nombre1} />
    <label class=${serx.tarjeta} for=${serx.nombre1} >
    <p2>${serx.nombre1}</p2>
    <img src=${serx.foto} alt=${serx.nombre1} >
    </label>
    `
    contenedorSeres.innerHTML += opcionDeSeres

    inputDemonio = document.getElementById('Demonio')
    inputAngel = document.getElementById('Angel')
    inputHumano = document.getElementById('Humano')

  })
  sectionReiniciar.style.display = 'none'
  botonSerElegido.style.display = 'none'
  inputDemonio.addEventListener('click',botonSeleccionar)
  inputAngel.addEventListener('click',botonSeleccionar)
  inputHumano.addEventListener('click',botonSeleccionar)
  botonSerJugador.addEventListener("click",seleccionarSerJugador)
  
  botonReiniciar.addEventListener('click', reiniciarJuego)
}
  
function seleccionarSerJugador (){
    sectionParrafo.style.display = 'none'
    sectionEleccion.style.display = 'none'
    sectionDestreza.style.display = 'block' 
    
    if (inputDemonio.checked ){
      spanSerSeleccionadoA.innerHTML = inputDemonio.id
      serjugador123 = inputDemonio.id
    } else if (inputAngel.checked ){
      spanSerSeleccionadoA.innerHTML = inputAngel.id
      serjugador123 = inputAngel.id
    } else if (inputHumano.checked ){
      spanSerSeleccionadoA.innerHTML = inputHumano.id
      serjugador123 =inputHumano.id
    } else {
      alert ('Selecciona cualquiera de los seres vivos')
    } 
    extraerHabilidad(serjugador123)  
    serEnemigo()
}

function extraerHabilidad(serjugador123){
  let habilidades
  for (let i = 0; i < seres.length; i++) {
    if (serjugador123 == seres[i].nombre1 ){
      habilidades = seres[i].habilidad
    }
  }

 mostrarHabilidad(habilidades) 
}
function mostrarHabilidad(habilidades){
  habilidades.forEach((habilidades) => {
    ataquesHabilidad =`
    <button class ='${habilidades.class} BAtaque' id=${habilidades.id} >${habilidades.nombre}</button>
    `
    contenedorPelea.innerHTML += ataquesHabilidad
  })
  botonFuerza = document.getElementById('boton-fuerza')
  botonVelocidad = document.getElementById('boton-velocidad')
  botonInteligencia = document.getElementById('boton-inteligencia')
  botones = document.querySelectorAll('.BAtaque')
}
function secuenciaAtaque(){
  let spanJugador = document.getElementById('habilidadJJ')
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if(e.target.textContent == '💪'){
        ataqueJugador.push('Fuerza')
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
        spanJugador.innerHTML = 'Fuerza'
      } else if (e.target.textContent == '🏃‍♂️'){
        ataqueJugador.push('Velocidad')
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
        spanJugador.innerHTML = 'Velocidad'
      } else {
        ataqueJugador.push('Inteligencia')
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
        spanJugador.innerHTML = 'Inteligencia'
      }
      habilidadAEnemigo ()
    })
  })
  
}
function botonSeleccionar (){
    botonSerElegido.style.display = 'block'
}
 function serEnemigo () {
    let serEnemigo = aleatorio(0, seres.length -1)
    
    spanSerEnemigo.innerHTML =  seres[serEnemigo].nombre1
    ataqueSerEnemigo = seres[serEnemigo].habilidad

    secuenciaAtaque()
  
}

function habilidadAEnemigo () {
   let habilidadAleatorio= aleatorio(0,ataqueSerEnemigo.length -1) 
   let spanHabilidadEnemigo = document.getElementById('habilidadPC')
   
   if (habilidadAleatorio == 0 || habilidadAleatorio == 1){
    habilidadEnemigo.push('Fuerza') 
    spanHabilidadEnemigo.innerHTML = 'Fuerza'
   } else if (habilidadAleatorio == 3 || habilidadAleatorio == 4) {
    habilidadEnemigo.push('Velocidad')  
    spanHabilidadEnemigo.innerHTML = 'Velocidad'
   }else if (habilidadAleatorio == 2){
    spanHabilidadEnemigo.innerHTML = 'Inteligencia'
    habilidadEnemigo.push('Inteligencia')
   }
   
   iniciarPelea()
   
}
function iniciarPelea(){
  if (ataqueJugador.length == 5){
    resultadoJuego()
  }
}
 function crearMensaje(resultado) {
  let mensajeResultado = document.getElementById('mensajes')
  let mensajeResultadoA = document.getElementById('resultadoA')
  mensajeResultadoA.innerHTML = resultado
 }
 function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = habilidadEnemigo[enemigo]
 }
 
 function resultadoJuego() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] == habilidadEnemigo[index]) {
      indexAmbosOponentes(index, index)
      crearMensaje('Empate') 
      
    } else if (ataqueJugador[index] == 'Fuerza' && habilidadEnemigo[index] == 'Velocidad' || ataqueJugador[index] == 'Velocidad' && habilidadEnemigo[index] == 'Inteligencia' || ataqueJugador[index] == 'Inteligencia' && habilidadEnemigo[index] == 'Fuerza') {
      indexAmbosOponentes(index, index)
      crearMensaje('Ganaste')
      vidasEnemigoPC--
      spanVidasEnemigo.innerHTML = vidasEnemigoPC
    }else {
      indexAmbosOponentes(index, index)
      crearMensaje('Perdiste')
      vidasSerJJ--
      spanVidasSer.innerHTML = vidasSerJJ
    }
    
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