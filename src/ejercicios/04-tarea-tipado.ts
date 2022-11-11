/*
    ==== Codigo de TypeScript ====
*/

interface ISuperHeroe{
    nombre: string;
    edad: number;
    direccion:IDireccion;
    mostrarDireccion: () => string;
}

interface IDireccion{
    calle: string;
    pais: string;
    ciudad: string;    
}


const superHeroe: ISuperHeroe = {
    nombre: 'Superman',
    edad: 30,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);