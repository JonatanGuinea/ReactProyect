import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import {db} from '../../firebase/dbConnection'
import {collection, getDocs, query, where} from 'firebase/firestore'
import Spinner  from '../Spinner/Spinner'

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        
        const productsCollection = collection(db, 'productos')

        if(categoryId){
            const productsCollectionFiltered = query(productsCollection, where('category', '==', categoryId))



            getDocs(productsCollectionFiltered).then(({docs}) =>{
                const    prodFromDocs = docs.map((doc)=>({
                                        id:doc.id,
                                        ...doc.data()
                        }))
    
                    setProducts(prodFromDocs)
                    })
            .catch((error)=>{
                console.error('Error getting documents: ', error);
                
            })
        } else {
            
            getDocs(productsCollection).then(({docs}) =>{
                const    prodFromDocs = docs.map((doc)=>({
                                        id:doc.id,
                                        ...doc.data()
                        }))
    
                    setProducts(prodFromDocs)
                    })
            .catch((error)=>{
                console.error('Error getting documents: ', error);
                
            })
        }
    
    


    }, [categoryId]);

    return <ItemList products={products} />
}

export default ItemListContainer;
