import { useState } from "react"
import { products } from "../../mock/mockData.js";
import ItemList from "../ItemList/ItemList";


function ItemListContainer () {


    
    

    const [contador, setContador]=useState(0)
    
    const clickMenos = ()=>{
        if(contador <1){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No puedes seleccionar menos de 1",
            });
            contador = 0;
        }
        setContador(contador - 1)
    }
    const clickMas = ()=>{
        
        if (contador >9) {
            Swal.fire("No hay mas Stock!");
            contador = 10
        }
        setContador(contador + 1)
    }



    
    
    return(

        <>
        <h2>Productos</h2>
        <ItemList products = {products}/>

        <button onClick={clickMenos} type="button" className="btn btn-outline-danger">Quitar</button>

        <button type="button" className="btn btn-secondary">
        <span className="badge text-bg-secondary">{contador}</span>
        </button>

        <button onClick={clickMas} type="button" className="btn btn-outline-success">Agregar</button>
        </>
    )
}

export default ItemListContainer