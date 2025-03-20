/*
    ===== Código de TypeScript =====
*/

// Interfaz que dentro define otro objeto.
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string; // Función que devuelve un string.
}

interface Address {
    street: string;
    country: string;
    town: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        town: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.town + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};