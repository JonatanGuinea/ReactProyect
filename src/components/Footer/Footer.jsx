
import React from 'react';
import { NavLink } from 'react-router-dom'
import './footer.css';
import { products } from '../../mock/mockData';
import {db} from "../../firebase/dbConnection";
import {collection, addDoc} from 'firebase/firestore'



const Footer = () => {

  const addProducts = ()=> {

    const productsCollection = collection(db, 'productos');

    products.forEach((item)=>{
      addDoc(productsCollection, item)
        .then(doc => {
          console.log('producto añadido con id: ', doc.id);
          
        })
        .catch(error => {
          console.error('Error al agregar producto', error);
          
        })
    })
  }



  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <NavLink to="/about" className="active-link">Acerca de Apple</NavLink>
          <NavLink to="/careers" className="active-link">Empleos</NavLink>
          <NavLink to="/press" className="active-link">Noticias</NavLink>
          <NavLink to="/legal" className="active-link">Legal</NavLink>
          <NavLink to="/privacy" className="active-link">Privacidad</NavLink>
          <NavLink to="/contact" className="active-link">Contacto</NavLink>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Apple Inc. Todos los derechos reservados.</p>
        </div>
      </div>
      <button onClick={addProducts}>Agregar Productos</button>
    </footer>

  );
};

export default Footer;

