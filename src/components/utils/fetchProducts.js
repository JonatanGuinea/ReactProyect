import { products } from "../../mock/mockData";

const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products && products.length > 0) {
                resolve(products);
            } else {
                reject("No hay productos disponibles");
            }
        }, 2000);
    });
};

export default fetchProducts;
