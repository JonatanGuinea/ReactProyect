import iphone from '../img/iPhone_14.png'
import macBook from '../img/macBook-Pro-16.png'
import ipadAir from '../img/ipad-air.png'
import appleWatch from '../img/appleWatch-series-7.png'
import airPods from '../img/airPods-pro.png'
import iphone13 from '../img/iphone-13.jpg'
import macBookAir from '../img/macBookAir.jpg'
import ipadAirKeyboard from '../img/ipad-keyboard.jpg'

export const categories = ['iPhone', 'MacBook','iPad','Accesorios'];

export const products = [
    {
        id: 1,
        name: "iPhone 14",
        category: "iPhone",
        model: "14",
        fechaDeLanzamiento: "2022-09-16",
        price: 799,
        imgSrc: iphone
    },
    {
        id: 2,
        name: "MacBook Pro 16",
        category: "MacBook",
        model: "Pro 16",
        fechaDeLanzamiento: "2021-10-26",
        price: 2499,
        imgSrc: macBook
    },
    {
        id: 3,
        name: "iPad Air",
        category: "iPad",
        model: "Air (5th Gen)",
        fechaDeLanzamiento: "2022-03-18",
        price: 599,
        imgSrc: ipadAir
    },
    {
        id: 4,
        name: "Apple Watch Series 7",
        category: "Accesorios",
        model: "Series 7",
        fechaDeLanzamiento: "2021-10-15",
        price: 399,
        imgSrc: appleWatch
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "Accesorios",
        model: "Pro",
        fechaDeLanzamiento: "2019-10-30",
        price: 249,
        imgSrc: airPods
    },
    {
        id: 6,
        name: "iPhone 13",
        category: "iPhone",
        model: "13",
        fechaDeLanzamiento: "2022-09-16",
        price: 650,
        imgSrc: iphone13
    },
    {
        id: 7,
        name: `MacBook Air 13"`,
        category: "MacBook",
        model: "Pro 16",
        fechaDeLanzamiento: "2021-10-26",
        price: 2200,
        imgSrc: macBookAir
    },
    {
        id: 8,
        name: "iPad keyboard",
        category: "iPad",
        model: "Air (5th Gen)",
        fechaDeLanzamiento: "2022-03-18",
        price: 720,
        imgSrc: ipadAirKeyboard
    }
];
