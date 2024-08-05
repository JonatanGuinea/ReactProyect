import './Item.css'



function Item({product}) {
    return (
    <div className="card" >
        <img src={product.imgSrc} className="card-img-top" alt={product.name} />
        <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button href={`/item/${product.id}`} className="btn btn-primary">Añadir al carrito</button>
        </div>
    </div>
    );
}

export default Item;
