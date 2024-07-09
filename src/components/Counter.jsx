import { useState } from "react"


function Counter () {

    const [contador, setContador]=useState(0)

    const clickMenos = ()=>{
        if(contador <1){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No puedes seleccionar menos de 1",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            contador = 0;
        }
        setContador(contador - 1)
    }
    const clickMas = ()=>{
        setContador(contador + 1)
    }





    return(

        <>

        <button onClick={clickMenos} type="button" class="btn btn-outline-danger">Quitar</button>

        <button type="button" class="btn btn-secondary">
        <span class="badge text-bg-secondary">{contador}</span>
        </button>

        <button onClick={clickMas} type="button" class="btn btn-outline-success">Agregar</button>
        </>
    )
}

export default Counter