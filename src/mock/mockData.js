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
        imgSrc: iphone,
        detail: {
            pantalla: "6.1 pulgadas Super Retina XDR",
            procesador: "A15 Bionic chip",
            camara: "Doble cámara trasera de 12 MP",
            capacidades: ["128GB", "256GB", "512GB"],
            bateria: "Hasta 19 horas de reproducción de video",
            colores: ["Rosa", "Azul", "Medianoche", "Luz de las estrellas", "Rojo"]
        }
    },
    {
        id: 2,
        name: "MacBook Pro 16",
        category: "MacBook",
        model: "Pro 16",
        fechaDeLanzamiento: "2021-10-26",
        price: 2499,
        imgSrc: macBook,
        detail: {
            pantalla: "16 pulgadas Liquid Retina XDR",
            procesador: "Apple M1 Pro o M1 Max",
            memoriaRam: ["16GB", "32GB", "64GB"],
            almacenamiento: ["512GB", "1TB", "2TB", "4TB", "8TB"],
            bateria: "Hasta 21 horas de reproducción de video",
            colores: ["Plata", "Gris espacial"]
        }
    },
    {
        id: 3,
        name: "iPad Air",
        category: "iPad",
        model: "Air (5th Gen)",
        fechaDeLanzamiento: "2022-03-18",
        price: 599,
        imgSrc: ipadAir,
        detail: {
            pantalla: "10.9 pulgadas Liquid Retina",
            procesador: "Apple M1 chip",
            capacidades: ["64GB", "256GB"],
            camara: "Trasera de 12 MP, Frontal de 12 MP ultra gran angular",
            compatibilidad: "Compatible con Magic Keyboard y Apple Pencil (2ª generación)",
            colores: ["Gris espacial", "Plata", "Verde", "Rosa", "Azul cielo"]
        }
    },
    {
        id: 4,
        name: "Apple Watch Series 7",
        category: "Accesorios",
        model: "Series 7",
        fechaDeLanzamiento: "2021-10-15",
        price: 399,
        imgSrc: appleWatch,
        detail: {
            tamanosDeCaja: ["41 mm", "45 mm"],
            pantalla: "Pantalla Retina siempre activa",
            sensores: ["Oxígeno en sangre", "ECG", "Monitor de ritmo cardíaco"],
            resistencia: "IP6X y resistencia al agua hasta 50 metros",
            conectividad: ["GPS", "GPS + Celular"]
        }
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "Accesorios",
        model: "Pro",
        fechaDeLanzamiento: "2019-10-30",
        price: 249,
        imgSrc: airPods,
        detail: {
            diseno: "In-Ear con puntas de silicona",
            caracteristicas: ["Cancelación activa de ruido", "Modo de transparencia", "Resistencia al sudor y agua (IPX4)", "Ecualización adaptativa"],
            duracionBateria: "Hasta 4.5 horas con una carga"
        }
    },
    {
        id: 6,
        name: "iPhone 13",
        category: "iPhone",
        model: "13",
        fechaDeLanzamiento: "2022-09-16",
        price: 650,
        imgSrc: iphone13,
        detail: {
            pantalla: "6.1 pulgadas Super Retina XDR",
            procesador: "A15 Bionic chip",
            camara: "Doble cámara trasera de 12 MP",
            capacidades: ["128GB", "256GB", "512GB"],
            bateria: "Hasta 19 horas de reproducción de video",
            colores: ["Rosa", "Azul", "Medianoche", "Luz de las estrellas", "Rojo"]
        }
    },
    {
        id: 7,
        name: `MacBook Air 13"`,
        category: "MacBook",
        model: "Air 13\"",
        fechaDeLanzamiento: "2021-10-26",
        price: 2200,
        imgSrc: macBookAir,
        detail: {
            pantalla: "13.3 pulgadas Retina con True Tone",
            procesador: "Apple M1 chip",
            memoriaRam: ["8GB", "16GB"],
            almacenamiento: ["256GB", "512GB", "1TB", "2TB"],
            bateria: "Hasta 18 horas de navegación web",
            colores: ["Plata", "Gris espacial", "Oro"]
        }
    },
    {
        id: 8,
        name: "iPad keyboard",
        category: "iPad",
        model: "Compatible con iPad",
        fechaDeLanzamiento: "2022-03-18",
        price: 720,
        imgSrc: ipadAirKeyboard,
        detail: {
            tipos: ["Smart Keyboard", "Magic Keyboard", "Smart Keyboard Folio"],
            compatibilidad: "Compatible con varios modelos de iPad, iPad Air, y iPad Pro"
        }
    }
    
];
