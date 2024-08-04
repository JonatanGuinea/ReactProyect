import iphone from '../img/iPhone_14.png'
import macBook from '../img/macBook-Pro-16.png'
import ipadAir from '../img/ipad-air.png'
import appleWatch from '../img/appleWatch-series-7.png'
import airPods from '../img/airPods-pro.png'

export const categories = ['iPhone', 'MacBook','iPad','Accesorios'];

export const products = [
    {
        id: 1,
        name: "iPhone 14",
        categoria: "iPhone",
        modelo: "14",
        fechaDeLanzamiento: "2022-09-16",
        price: 799,
        imgSrc: iphone
    },
    {
        id: 2,
        name: "MacBook Pro 16",
        categoria: "MacBook",
        modelo: "Pro 16",
        fechaDeLanzamiento: "2021-10-26",
        price: 2499,
        imgSrc: macBook
    },
    {
        id: 3,
        name: "iPad Air",
        categoria: "iPad",
        modelo: "Air (5th Gen)",
        fechaDeLanzamiento: "2022-03-18",
        price: 599,
        imgSrc: ipadAir
    },
    {
        id: 4,
        name: "Apple Watch Series 7",
        categoria: "Accesorios",
        modelo: "Series 7",
        fechaDeLanzamiento: "2021-10-15",
        price: 399,
        imgSrc: appleWatch
    },
    {
        id: 5,
        name: "AirPods Pro",
        categoria: "Accesorios",
        modelo: "Pro",
        fechaDeLanzamiento: "2019-10-30",
        price: 249,
        imgSrc: airPods
    }
];
