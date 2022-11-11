/*
    ==== Codigo de TypeScript ====
*/

import { calculaISV, IProducto } from "./06-desestructuracion-funcion";


const carritoCompras: IProducto[] = [
    {
        desc:'Xiaomi X4 Pro 5G',
        precio: 1200
    },
    {
        desc: 'Note 8 Pro',
        precio: 800
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total',total);
console.log('ISV',isv);