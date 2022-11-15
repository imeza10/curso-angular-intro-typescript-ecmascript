/*
    ==== Codigo de TypeScript ====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: "Ismael Meza",
    hijos: ['Lia Sofia']
}

const pasajero2: Pasajero = {
    nombre: "Melissa"
}

function imprimirHijos(pasajero: Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0
    console.log(cuantosHijos)
}

imprimirHijos(pasajero2)