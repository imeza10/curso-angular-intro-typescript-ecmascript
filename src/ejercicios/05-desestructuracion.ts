/*
    ==== Codigo de TypeScript ====
*/

interface IReproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: IDetalles;
}

interface IDetalles{
    autor: string;
    anio: number;
}

const reproductor: IReproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Monita retrechera',
    detalles:{
        autor: 'Papo Man',
        anio: 2007
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log('El volumen actual es de:', volumen);
console.log('El segundo actual es de:', segundo);
console.log('La cancion actual es:', cancion);
console.log('El autor es:', autor);

const dbz: string[] = ['Goku', 'Vegeta','Trunks'];

//La posicion de cada variable de la desestructuracion se asigna la posicion del arreglo
//Si no se necesitan las primeras posiciones, no se colocan variables, solo se ponen "," por cada posicion
const [ , , p3] = dbz;

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3); //Trunks