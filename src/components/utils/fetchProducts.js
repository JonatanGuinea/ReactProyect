import { products } from "../../mock/mockData";

const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.length > 0) {
                resolve(products);
            } else {
                reject("No hay productos disponibles");
            }
        }, 1000);
    });
};

export default fetchProducts;

