 let nombre = ""
// nombre = prompt("Ingresa tu nombre")
let habilidadSer
let habilidadEnemigo = []
let opcionDeSeres
let vidasSerJJ = 0
let vidasEnemigoPC = 0

let botonFuerza 
let botonVelocidad 
let botonInteligencia 
let ataqueSerEnemigo
let indexAtaqueEnemigo
let indexAtaqueJugador

let victoriasJugador = 0
let victoriasEnemigo = 0
let ataqueJugador = []
let seres = []
let botones = []

let serjugador123
let ataquesHabilidad

const sectionDestreza = document.getElementById('destreza')
const sectionReiniciar = document.getElementById('reiniciar')
const botonSerElegido = document.getElementById('serElegido')

const sectionParrafo = document.getElementById('parrafo')
const sectionEleccion = document.getElementById('escoge')
const spanSerSeleccionadoA = document.getElementById('serSeleccionadoA')

const contenedorSeres = document.getElementById('contenedorSeres')
const spanSerEnemigo = document.getElementById('serPc')
const botonReiniciar = document.getElementById('reiniciar')

const mensajeResultado = document.getElementById('pili')
const contenedorPelea = document.getElementById('pelea')

const sectionVerMapa = document.getElementById('verMapa')
const mapa = document.getElementById('mapa')

let spanVidasSer = document.getElementById('vidasSer')
let spanVidasEnemigo = document.getElementById('vidasEnemigo')

let inputDemonio 
let inputAngel 
let inputHumano 



let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground =new Image()
mapaBackground.src = "assets/mokemap.png"
let serObjetoJugar 


class Ser {
  constructor(nombre1, foto, vida, tarjeta, fotoMapa, x = 10 , y = 10, ){
    this.nombre1 = nombre1
    this.foto = foto
    this.vida = vida
    this.habilidad = []
    this.tarjeta = tarjeta
    this.x = 20
    this.y = 30
    this.ancho = 40
    this.alto = 40
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0
    this.velocidadY = 0
  }
}


let demonio = new Ser('Demonio', 'assets/demonio.avif', 5, "tarjetasSerDemonio", )

let angel = new Ser('Angel', 'assets/angel.jpg', 5, 'tarjetasSerAngel')

let humano = new Ser('Humano', 'assets/humano.jpg', 5, 'tarjetasSerHumano')

let demonioE = new Ser('Demonio', 'assets/demonio.avif', 5, "tarjetasSerDemonio", )

let angelE = new Ser('Angel', 'assets/angel.jpg', 5, 'tarjetasSerAngel')

let humanoE = new Ser('Humano', 'assets/humano.jpg', 5, 'tarjetasSerHumano')

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
  sectionReiniciar.style.display = 'none'
  botonSerElegido.style.display = 'none'
  sectionVerMapa.style.display = 'none'
  //mapa.style.display = 'none'

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
  botonSerElegido.addEventListener('click', seleccionarSerJugador)


  inputDemonio.addEventListener('click',botonSeleccionar)
  inputAngel.addEventListener('click',botonSeleccionar)
  inputHumano.addEventListener('click',botonSeleccionar)
  
  botonReiniciar.addEventListener('click', reiniciarJuego)
  
}
  //.........................................................................

  function botonSeleccionar (){
    botonSerElegido.style.display = 'block'
  
}
function seleccionarSerJugador (){
    sectionParrafo.style.display = 'none'
    sectionEleccion.style.display = 'none'
    // sectionDestreza.style.display = 'block' 
    sectionVerMapa.style.display = 'flex'
    
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
    
    
    
    if (inputDemonio.checked ){
      spanSerSeleccionadoA.innerHTML = inputDemonio.id
      serjugador123 = inputDemonio.id
    } else if (inputAngel.checked ){
      spanSerSeleccionadoA.innerHTML = inputAngel.id
      serjugador123 = inputAngel.id
    } else if (inputHumano.checked ){
      spanSerSeleccionadoA.innerHTML = inputHumano.id
      serjugador123 = inputHumano.id
    } else {
      alert ('Selecciona cualquiera de los seres vivos')
    } 
    extraerHabilidad(serjugador123) 
    serEnemigo()
    iniciarMapa()
}

function extraerHabilidad(serjugador123){
  let habilidades
  for (let i = 0; i < seres.length; i++) {
    if (serjugador123 === seres[i].nombre1 ){
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

        boton.style.background = '#112f58'
        boton.disabled = true 
        resultadoJuego()
        spanJugador.innerHTML = 'Fuerza'
      } else if (e.target.textContent == '🏃‍♂️'){
        ataqueJugador.push('Velocidad')
        
        boton.style.background = '#112f58'
        boton.disabled = true 
        spanJugador.innerHTML = 'Velocidad'
        resultadoJuego()
      } else {
        ataqueJugador.push('Inteligencia')
       
        boton.style.background = '#112f58'
        spanJugador.innerHTML = 'Inteligencia'
        boton.disabled = true 
        resultadoJuego()
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
  // resultadoJuego()
   //iniciarPelea()
   
}
function iniciarPelea(){
  if (ataqueJugador.length == 5){
   
   vidasFinal()
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
    if(ataqueJugador === habilidadEnemigo) {
      indexAmbosOponentes(index, index)
      crearMensaje('Empate') 
      
    } else if (ataqueJugador == 'Fuerza' && habilidadEnemigo == 'Velocidad' || ataqueJugador == 'Velocidad' && habilidadEnemigo == 'Inteligencia' || ataqueJugador == 'Inteligencia' && habilidadEnemigo == 'Fuerza') {
      indexAmbosOponentes(index, index)
      crearMensaje('Ganaste') 
      victoriasJugador++
      spanVidasSer.innerHTML = victoriasJugador
      
    }else {
      indexAmbosOponentes(index, index)
      crearMensaje('Perdiste') 
      victoriasEnemigo++
      spanVidasEnemigo.innerHTML = victoriasEnemigo
      
    }
    
  }
}
  
function vidasFinal () {
  if (victoriasJugador > victoriasEnemigo){
    crearMensaje('Ganaste')
    mensajeVidasFinal("Fue una victoria maravillosa")
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'flex'
  } else if (victoriasJugador < victoriasEnemigo){
    crearMensaje('Perdiste')
    mensajeVidasFinal("La derrota es lo peor que se puede saborear")
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'flex'
  } else {
    mensajeVidasFinal("Vaya, al parecer este enemigo tuvo mucho para dar!")
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'flex'
  }
}
function mensajeVidasFinal (terminado){
  let fin = document.createElement('p')
  fin.innerHTML = terminado
  mensajeResultado.appendChild(fin)
  
}
function reiniciarJuego (){
  location.reload()
}
 function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }

 function pintarCanvas () {
  
  serObjetoJugar.x = serObjetoJugar.x + serObjetoJugar.velocidadX
  serObjetoJugar.y = serObjetoJugar.y + serObjetoJugar.velocidadY
  lienzo.clearRect(0,0, mapa.width, mapa.height)
  lienzo.drawImage(
    serObjetoJugar.mapaFoto, 
    serObjetoJugar.x,
    serObjetoJugar.y,
    serObjetoJugar.ancho,
    serObjetoJugar.alto
  )
 }

 function moverDerecha(){
  serObjetoJugar.velocidadX = 5
 }
 function moverIzquierda(){
  serObjetoJugar.velocidadX = -5
 }
 function moverAbajo(){
  serObjetoJugar.velocidadY = 5
 }
 function moverArriba(){
  serObjetoJugar.velocidadY = -5
 }
 function detenerMovimiento(){
  
  serObjetoJugar.velocidadX = 0
  serObjetoJugar.velocidadY = 0
 }
 function sePresionoUnaTecla(event){
  switch (event.key) {
    case 'ArrowUp':
      moverArriba()
      break;
    case 'ArrowDown' :
      moverAbajo()
      break;
    case 'ArrowLeft':
      moverIzquierda()
      break;
    case 'ArrowRight':
      moverDerecha()
      break;
    default:
      break;
  }
 }
 function iniciarMapa(){ 
  mapa.width = 320
  mapa.height = 240
  serObjetoJugar = obtenerObjetoSer(serjugador123)
  
  intervalo = setInterval(pintarCanvas, 50)

  window.addEventListener('keydown', sePresionoUnaTecla)
  window.addEventListener('keyup', detenerMovimiento)
 }
 function obtenerObjetoSer(){
  for (let i = 0; i < seres.length; i++) {
    if (serjugador123 === seres[i].nombre1 ){
      return seres[i]
    }
  }
 }
 window.addEventListener('load', iniciarJuego)