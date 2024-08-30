import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import Spinner from '../Spinner/Spinner';
import {db} from '../../firebase/dbConnection'
import {collection, getDoc, doc} from 'firebase/firestore'

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const productCollection=collection(db, 'productos')
        const refDoc = doc(productCollection, productId)

        getDoc(refDoc)
            .then((doc)=>{
                setProduct({id: doc.id, ...doc.data()})
            })
        
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error,
                });
            });
    }, [productId]);

    return product ? <ProductDetail product={product} /> : <Spinner/>;
}

export default ItemDetailContainer;
