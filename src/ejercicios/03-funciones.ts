/*
    ==== Codigo de TypeScript ====
*/


function sumar(a:number , b:number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero: number, base: number = 2): number{

    return numero*base;
}

interface IPersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar(personaje: IPersonajeLOR, curarX: number): void{
    personaje.pv +=  curarX;
}

const newPersonaje: IPersonajeLOR = {
    nombre: 'Ismael',
    pv: 50,
    mostrarHP(){
        console.log('Puntos de vida:', this.pv);
    }
}

curar(newPersonaje, 20);

newPersonaje.mostrarHP();