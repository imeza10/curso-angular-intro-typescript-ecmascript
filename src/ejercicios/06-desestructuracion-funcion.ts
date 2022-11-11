/*
    ==== Codigo de TypeScript ====
*/

export interface IProducto{
    desc: string;
    precio: number;
}

const telefono: IProducto = {
    desc: 'Xiaomi',
    precio: 1200
}

const tablet: IProducto = {
    desc: 'Samsung TAB E3',
    precio: 800
}

export function calculaISV(productos: IProducto[]): [number, number]{
    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total*0.15];
}

// const articulos = [telefono, tablet];

// const [total, isv] = calculaISV(articulos);

// console.log('Total:',total)
// console.log('ISV:',isv)