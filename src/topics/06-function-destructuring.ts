// Ejercicio 07: Borramos export{}; de abajo y lo colocamos en este interfaz.
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation( options: TaxCalculationOpions ): [number, number] {
//function taxCalculation ({ tax, products }: TaxCalculationOpions ): [number, number] {
export function taxCalculation ( options: TaxCalculationOptions ): [number, number] {

    const { tax, products } = options;

    let total = 0;
    
    products.forEach( ({ price }) => {
        total += price;
    });

    return [ total, total * tax ];
} 

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ total, taxTotal ] = taxCalculation ({
    products: shoppingCart,
    tax: tax,
})

console.log( 'Total ', total );
console.log( 'Total ', taxTotal );


//export{};