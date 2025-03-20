
export class Cat {

    //public name: string;
    //private address: string;

    constructor( public name: string, private address: string = 'No Address' ) {
        this.name = name;
        this.address = address;
    }

}

const ironcat = new Cat ( 'Jünger', 'Valencia');

console.log(ironcat);