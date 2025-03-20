/*  
    FUNCTION:
    La función addNumbers, evuelve la suma de `a` y `b`. Los valores de `a` y `b` deben ser números, y el valor que retorna será un número.
    Ejemplo práctico:
    Imagina que tienes una tienda y necesitas saber el total de dos productos:
        const total = addNumbers(10, 15); // total será 25
*/
function addNumbers( a: number, b: number ) {
    return a + b;
}

/*  
    ARROW FUNCTION: 
    La función addNumbersArrow, devuelve la suma de `a` y `b` como un string (es decir, convierte el resultado de la suma en texto).
    Se usa para escribir código más breve y limpio, especialmente para funciones simples.
    En lugar de escribir:
        const addNumbersArrow = (a: number, b: number): string => { return `${a + b}`; };
    Podemos escribirlo de forma más compacta como:
        const addNumbersArrow = (a: number, b: number): string => `${a + b}`;
    Ejemplo práctico:
    Si estás mostrando el total de una compra como texto en lugar de un número:
        const totalStr = addNumbersArrow(10, 15); // totalStr será "25" (en formato de texto)
*/
const addNumbersArrow = ( a: number, b: number ): string => {
    return `${a + b}`; // Aquí el resultado es un string debido a las comillas invertidas
}

/*  
    FUNCTION:
    La función multiplay, toma tres parámetros: `firstNumber` (obligatorio), `secondNumber` (opcional) y `base` (opcional con valor por defecto de 2).
    La función devuelve el resultado de multiplicar `firstNumber` por `base`. Si no se pasa un valor para `base`, se usará el valor por defecto (2).
    Ejemplo práctico:
    Si necesitas calcular el total de un producto, pero multiplicado por un factor base:
        const result = multiplay(5); // result será 10 (5 * 2, ya que el valor de base es 2 por defecto)
    Si quieres multiplicar el número por otro factor diferente al por defecto:
        const result2 = multiplay(5, 3); // result2 será 15 (5 * 3, usando base = 3)
*/
function multiplay( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    return firstNumber * base;
}

/*  
    Llamamos a la función `addNumbers` con los valores 1 y 2 como parámetros.
    La función devuelve la suma de 1 y 2, es decir, 3. El valor devuelto se asigna a `result`, que es de tipo `number`.
*/
const result: number = addNumbers(1, 2); // result será 3 porque 1 + 2 = 3

/*  
    Llamamos a la función `addNumbersArrow` con los valores 1 y 2 como parámetros.
    Esta función devuelve la suma de 1 y 2 como un `string`. Es decir, el resultado será `"3"` (en formato texto).
    El valor devuelto se asigna a `result2`, que es de tipo `string`.
*/
const result2: string = addNumbersArrow(1, 2); // result2 será "3" porque `${1 + 2}` convierte el resultado en un string

/*  
    Llamamos a la función `multiplay` con el valor 5 como parámetro.
    Debido a que el segundo parámetro es opcional y no se pasa, la función utilizará el valor por defecto de `base` (que es 2).
    Entonces, el cálculo será `5 * 2`, y el resultado se asignará a `multiplayResult`, que es de tipo `number`.
*/
const multiplayResult: number = multiplay(5); // multiplayResult será 10 (5 * 2, porque base = 2 por defecto)

/*  
    Imprimir los resultados:
    Aquí estamos imprimiendo los resultados de las tres funciones en la consola.
    Se usa console.log para mostrar los valores de `result`, `result2` y `multiplayResult`.
*/
console.log({result, result2, multiplayResult}) // Se mostrará: {result: 3, result2: "3", multiplayResult: 10}

/* La instrucción `export {}` es usada para indicar que este archivo es un módulo de TypeScript. */
export {}