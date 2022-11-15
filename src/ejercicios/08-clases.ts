/*
    ==== Codigo de TypeScript ====
*/

class PersonaNormal{

    constructor(
        public nombre:string,
        public direccion: string
        ){}
}

class Heroe extends PersonaNormal {
    // alterEgo:string;
    // edad:number;
    // nameReal: number;

    constructor(
        public alterEgo: string,
        public edad:number,
        public nameReal: string
        ){
            super(nameReal, 'NY, USA');
        }
}

const ironman = new Heroe('Ironman', 31, 'TonyStark');

console.log(ironman);