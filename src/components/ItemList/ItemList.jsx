import Item  from "../Item/Item";
import './ItemList.css'



function ItemList({products}) {

    return <>
    <div className ='itemList'>
        {products.map((element)=>{
        return <Item key ={element.id} product = {element} />
        })}
    </div>
    
    </>
}

export default ItemList