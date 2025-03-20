// Ejemplo de un decorador creado por nosotros (uso no fecuente). No hace falta entender <T extends { new (...args:any[]): {} }>
function classDecorator<T extends { new (...args:any[]): {} }> (
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {

    public myProperty: string = 'Abc123'

    print() {
        console.log('Hola Mundo')
    }
}

// Imprimo la definición de la clase.
console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass );