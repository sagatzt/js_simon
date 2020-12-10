let notas=document.querySelectorAll(".audio")
let simon=document.querySelectorAll(".color")
let puntuacion=document.querySelector("#puntuacion")
let vidas=document.querySelector("#vidas")
let jugadorNombre=document.querySelector(".juego-jugador-nombre")
let empezar=document.querySelector("#btnEmpezar")
let partida=JSON.parse(sessionStorage.getItem("simon"))


//al comenzar la partida, al cargar la página juego.html:
document.querySelector("body").onload=()=>{
    if(partida==null) 
        window.parent.document.querySelector("[name='vista']").src="_inicio.html"
    puntuacion.innerHTML=partida.jugada.length
    vidas.innerHTML=partida.vidas
    jugadorNombre.innerHTML=partida.jugador
}
//al hacer click en empezar, empieza la secuencia
empezar.onclick=()=>{
    partida.jugada.push(Math.round(Math.random()*3))
    lanzarJugada(partida.jugada)
    pos=0
}
 
//al pulsar uno de los cuadritos, guardo el orden en que se pulsan
let pos=0
document.querySelector(".simon").onclick=(e)=>{
    let final=false
    if(partida.jugada[pos]==e.target.dataset.id)
        console.log("has acertado")
    else{
        final=true
        partida.vidas--
    }
    if(final || pos==partida.jugada.length){
        vidas.innerHTML=partida.vidas
        puntuacion.innerHTML=partida.jugada.length
    }
    pos++
}
////////////////////////////////////////////////////
//inicia secuencia colores cuadritos
const lanzarJugada=(jugada)=>{
    let cuadrito=0
    let interval=setInterval(()=>{
        encenderColor(jugada[cuadrito])
        cuadrito++
        if(cuadrito==jugada.length) clearInterval(interval)
    },800)   
}
//enciende cuadrito .6 segundos
const encenderColor=(cuadrito)=>{
    notas[4].play()
    simon[cuadrito].classList.toggle("color-off")
    const a = setTimeout(()=>{
        simon[cuadrito].classList.toggle("color-off")
    },600)
} 