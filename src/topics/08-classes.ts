
export class Cat {

    //public name: string;
    //private address: string;

    constructor( public name: string, private address: string = 'No Address' ) {}

}

// Concepto de extender clases en TS.
/*
export class Hero extends Cat {
    constructor( 
        public alterEgo: string, 
        public age: number, 
        public realName: string, 
    ) {
        super( realName, 'Valencia' )
    }
}
*/

export class Hero {

    constructor( 
        public alterEgo: string, 
        public age: number, 
        public realName: string,
        public cat: Cat,
    ) {
        //this.cat = new Cat(realName)
    }
}

const cat = new Cat ( 'Jünger', 'Valencia' );
const ironcat = new Hero ( 'Gusmin', 1, 'Jünger', cat );

console.log(ironcat);