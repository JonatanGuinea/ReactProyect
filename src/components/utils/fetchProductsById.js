import { products } from "../../mock/mockData";

const fetchProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === parseInt(id));
            if (product) {
                resolve(product);
            } else {
                reject("Producto no encontrado");
            }
        }, 1000);
    });
};

export default fetchProductById;

