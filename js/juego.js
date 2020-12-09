let notas=document.querySelectorAll(".audio")
let modal=window.parent.document.querySelector(".modal")
let alert=window.parent.document.querySelector(".alert")
let simon=document.querySelectorAll(".color")
let comprobar=document.querySelector("#btnComprobar")
let empezar=document.querySelector("#btnEmpezar")
let partida=JSON.parse(sessionStorage.getItem("simon"))
let jugadaUser=[]

//inicializar la partida:
document.querySelector("body").onload=()=>{
    if(!partida) console.log("no hay partidas")
}
//boton empezar
empezar.onclick=()=>{
    if(partida.vidas>0){
        partida.jugada.push(Math.round(Math.random()*3))
        lanzarJugada(partida.jugada)
        jugadaUser=[]
    }else
        console.log("No tiene vidas para jugar")
}

document.querySelector(".simon").onclick=(e)=>{
    let id=Number(e.target.dataset.id)
    encenderColor(id)
    jugadaUser.push(id)
    if(jugadaUser.length==partida.jugada.length){
        console.log(jugadaUser)
        console.log(partida.jugada)
    }
}

//sistema interactivo de luz y sonido de cuadritos
const lanzarJugada=(jugada)=>{
    let cuadrito=0
    let interval=setInterval(()=>{
        encenderColor(jugada[cuadrito])
        cuadrito++
        if(cuadrito==jugada.length) clearInterval(interval)
    },800)   
}
//enciende cuadrito 1 segundo
const encenderColor=(cuadrito)=>{
    notas[4].play()
    simon[cuadrito].classList.toggle("color-off")
    const a = setTimeout(()=>{
        simon[cuadrito].classList.toggle("color-off")
    },600)
} 