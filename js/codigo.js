function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
let nombre =" "
nombre = prompt("Cual es tu nombre?")
alert("Bienvenido a StageWar " + nombre)
let jugador = ""
let pc = 0 
let triunfos = 0
let derrotas = 0
while (triunfos < 3 && derrotas < 3 ){
        pc = aleatorio (1,3)
    jugador = prompt("Escoge 1 para ser un demonio, 2 para ser un angel y 3 para ser un humano humano")
    if (jugador == 1){
        alert("Escogiste ser un demonio👹, deberas complacer las ordenes de lucifer")
    } else if (jugador == 2) {
        alert("Escogiste ser un angel🌟, deberas defender el bien para que no lidere el plano terrenal")
    } else if (jugador == 3) {
        alert("Escogiste ser un humano😁, hay un par de cosas que debes hacer para convertirte en un Portico💪😁")
    } else {
        alert("Mal elejido")
    }
    if (pc == 1) {
        alert("Pc es un Demonio")
    } else if (pc == 2){
        alert("Pc es un Angel")
    } else if (pc == 3){
        alert("Pc es un Portico")
    }
    //Combate 
    if  (jugador == pc){
        alert("Empate")
    } else if ((jugador == 1 && pc == 2) || (jugador == 2 && pc ==3) || (jugador == 3 && pc ==1)) {
        alert("Ganaste")
        triunfos = triunfos + 1 
    } else {
        alert("Perdiste")
        derrotas = derrotas +1 
    }
}