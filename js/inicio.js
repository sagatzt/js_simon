let boton = document.querySelector("#btnJugar")
let jugador = document.querySelector("#txtJugador")

boton.onclick=()=>{
    if(jugador.value!=""){
        let partida = {
            fecha: new Date(),
            jugador: jugador.value,
            jugada: [],
            vidas:3
        }
        sessionStorage.setItem("simon",JSON.stringify(partida))
        //una vez generada la partida, mostramos juego.html en el iframe
        window.parent.document.querySelector("[name='vista']").src="./_juego.html"
    }else{
        console.log("Está vacío")
    }
}
