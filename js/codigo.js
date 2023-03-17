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


let jugadorId = null

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


let spanVidasSer = document.getElementById('vidasSer')
let spanVidasEnemigo = document.getElementById('vidasEnemigo')

let inputDemonio 
let inputAngel 
let inputHumano 

const verMapa = document.getElementById('verMapa')
const mapa = document.getElementById('mapa')
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = 'assets/mokemap.png'
let serJugadorObjeto 
let enemigo
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350 

if (anchoDelMapa > anchoMaximoDelMapa){
  anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa 
mapa.height = alturaQueBuscamos



class Ser {
  constructor(nombre1, foto, vida, tarjeta, fotoMapa){
    this.nombre1 = nombre1
    this.foto = foto
    this.vida = vida
    this.habilidad = []
    this.ancho = 40
    this.alto = 40
    this.tarjeta = tarjeta
    this.x = aleatorio(0, mapa.width - this.ancho)
    this.y = aleatorio(0, mapa.height - this.alto)
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0
    this.velocidadY = 0

  }
  pintarSer() {
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
  
    )
  }
}


let demonio = new Ser('Demonio', 'assets/demonio.avif', 5, "tarjetasSerDemonio", 'assets/caraDemonio')

let angel = new Ser('Angel', 'assets/angel.jpg', 5, 'tarjetasSerAngel', 'assets/caraDemonio')

let humano = new Ser('Humano', 'assets/humano.jpg', 5, 'tarjetasSerHumano', 'assets/caraDemonio')

let demonioE = new Ser('Demonio', 'assets/demonio.avif', 5, "tarjetasSerDemonio",'assets/caraDemonio')

let angelE = new Ser('Angel', 'assets/angel.jpg', 5, 'tarjetasSerAngel', 'assets/caraDemonio')

let humanoE = new Ser('Humano', 'assets/humano.jpg', 5, 'tarjetasSerHumano', 'assets/caraDemonio')
demonio.habilidad.push (
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'},
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'},
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'}, 
  {nombre: '🏃‍♂️', id: 'boton-velocidad', class: 'tarjetasPeleaB'},
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'}, 
)
demonioE.habilidad.push (
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
angelE.habilidad.push (
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
humanoE.habilidad.push (
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'},
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'},
  {nombre: '🧠', id: 'boton-inteligencia', class: 'tarjetasPeleaC'},
  {nombre: '💪', id: 'boton-fuerza', class: 'tarjetasPeleaA'}, 
  {nombre: '🏃‍♂️', id: 'boton-velocidad', class: 'tarjetasPeleaB'},
)

seres.push(demonio,angel,humano,)

function iniciarJuego () {
  sectionDestreza.style.display = 'none' 
  sectionReiniciar.style.display = 'none'
  botonSerElegido.style.display = 'none'
  verMapa.style.display = 'none'
  


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
  unirserAlJuego()
  
}

function unirserAlJuego(){
  fetch("http://localhost:8080/unirse")
    .then(function (res){
      console.log(res)
      if (res.ok){
        res.text()
          .then(function (respuesta){
            console.log(respuesta)
            jugadorId = respuesta
          })
      }
    })
}
  

function botonSeleccionar (){
    botonSerElegido.style.display = 'block'
  
}
function seleccionarSerJugador (){
    sectionParrafo.style.display = 'none'
    sectionEleccion.style.display = 'none'
    //sectionDestreza.style.display = 'block' 
    verMapa.style.display = 'flex'
    
    
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

    seleccionarSer(serjugador123)

    extraerHabilidad(serjugador123) 
    //serEnemigo()
    iniciarMapa()
}

function seleccionarSer(serjugador123){
  fetch(`http://localhost:8080/ser/${jugadorId}`,{
    method: "post",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      ser: serjugador123
    })
  });
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
 function serEnemigo (enemigo) {
    //let serEnemigo = aleatorio(0, seres.length -1)
   // 
    //spanSerEnemigo.innerHTML =  seres[serEnemigo].nombre1
    //ataqueSerEnemigo = seres[serEnemigo].habilidad
    spanSerEnemigo.innerHTML = enemigo.nombre1
    ataqueSerEnemigo = enemigo.habilidad
    
    secuenciaAtaque()
  
}

function habilidadAEnemigo () {
  console.log('ataquenemigo', ataqueSerEnemigo ) 
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
 //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 function pintarCanvas(){

  
  serJugadorObjeto.x = serJugadorObjeto.x + serJugadorObjeto.velocidadX
  serJugadorObjeto.y = serJugadorObjeto.y + serJugadorObjeto.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
  )
  serJugadorObjeto.pintarSer()
  demonioE.pintarSer()
  angelE.pintarSer()
  humanoE.pintarSer()
  if (serJugadorObjeto.velocidadX !== 0 || serJugadorObjeto.velocidadY !== 0) {
    revisarColision(demonioE)
    revisarColision(humanoE)
    revisarColision(angelE)
  }
  

 }

 function moverDerecha(){
    serJugadorObjeto.velocidadX = 5
 }
 function moverIzquierda(){
  serJugadorObjeto.velocidadX = -5 
}

function moverAbajo(){
  serJugadorObjeto.velocidadY = 5 
}

function moverArriba(){
  serJugadorObjeto.velocidadY = -5
}
function detenerMovimiento(){
  serJugadorObjeto.velocidadX = 0
  serJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
  switch (event.key) {
    case 'ArrowUp':
      moverArriba()
      break
      case 'ArrowDown':
        moverAbajo()
        break
      case 'ArrowLeft':
        moverIzquierda()
        break
      case 'ArrowRight':
        moverDerecha()
        break
    default:
      break;
  }
}

function iniciarMapa(){
  //mapa.width = 320
  //mapa.height = 240
  serJugadorObjeto = obtenerObjetoSer(serjugador123)
  console.log(serJugadorObjeto, serjugador123);
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
function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x 
  
  const arribaSer = serJugadorObjeto.y
  const abajoSer = serJugadorObjeto.y + serJugadorObjeto.alto
  const derechaSer = serJugadorObjeto.x + serJugadorObjeto.ancho
  const izquierdaSer = serJugadorObjeto.x 
  
  if (
    abajoSer < arribaEnemigo || 
    arribaSer > abajoEnemigo ||
    derechaSer < izquierdaEnemigo ||
    izquierdaSer> derechaEnemigo 
  ) {
    return
  }
  detenerMovimiento()
  clearInterval(intervalo)
  console.log('se detecto una coalision');
  sectionDestreza.style.display = 'block' 
  mapa.style.display = 'none'
  verMapa.style.display = 'none'
  serEnemigo(enemigo)
}


  
 window.addEventListener('load', iniciarJuego)