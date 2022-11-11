/*
    ==== Codigo de TypeScript ====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface IPersonaje{
    nombre: string;
    edad: number;
    habilidades: string[];
    ciudad?: string;
}


const personaje: IPersonaje= {
    nombre: 'Ismael',
    edad: 31,
    habilidades: ['Bash', 'Counter', 'Healing']
}


personaje.ciudad = 'Sincelejo';


console.table(personaje)