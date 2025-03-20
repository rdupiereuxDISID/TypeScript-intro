
// Aquí se está declarando una constante llamada `name` de tipo `string`, lo que significa que solo puede almacenar un valor de texto.
const name: string = 'Gusmin';

/*  
    Aquí se está declarando una variable llamada `hpPoints` que puede ser de tipo `number` o el valor especial `'FULL'`.
    El tipo `number | 'FULL'` se llama un **union type** y permite que `hpPoints` sea un número o el string `'FULL'`.
    Inicialmente, `hpPoints` tiene el valor `95`, que es un número.
*/
let hpPoints: number | 'FULL' = 95;

/*  
    Cambio de valor de `hpPoints`:
    Aquí cambiamos el valor de `hpPoints` a `'FULL'`. Debido a que hemos usado un tipo de unión (`number | 'FULL'`), podemos asignar un número o el valor `'FULL'` a esta variable.
*/
hpPoints = 'FULL';

/*
    Aquí estamos declarando una constante llamada `isAlive` de tipo `boolean`, lo que significa que solo puede ser `true` o `false`.
    El valor asignado es `true`, indicando que el personaje está vivo.
*/
const isAlive: boolean = true;

// Lo que mostrará la consola -> { name: 'Gusmin', hpPoints: 'FULL', isAlive: true }
console.log({
    name, hpPoints, isAlive
})

// La instrucción `export {}` es usada para indicar que este archivo es un módulo de TypeScript.
export{}