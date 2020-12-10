let notas=document.querySelectorAll(".audio")
let simon=document.querySelectorAll(".color")
let empezar=document.querySelector("#btnEmpezar")

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