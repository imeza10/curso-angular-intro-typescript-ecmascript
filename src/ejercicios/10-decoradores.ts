/*
    ==== Codigo de TypeScript ====
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator
class MiSuperClase {
    public myProp: string = 'ABC123';

    imprimir(){
        console.log(this.myProp);
    }
}

console.log(MiSuperClase);

const myClass = new MiSuperClase();

console.log(myClass);