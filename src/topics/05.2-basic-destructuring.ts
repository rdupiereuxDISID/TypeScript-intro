// Desestructuración con Array.

/*  Desestructuramos el arreglo `['Goku', 'Vegeta', 'Trunks']` y asignando el tercer elemento (en este caso, `Trunks`) a la variable `trunks`.
    Asignamos un valor predeterminado `'No existe ese personaje'` a `trunks` en caso de que el arreglo no tenga un tercer elemento o esté vacío.
*/
const [ , , trunks = 'No existe ese personaje']: string[] = ['Goku', 'Vegeta', 'Trunks'];

/*  El mensaje que se mostrará en la consola será algo como:
        'Personaje 3: Trunks'
    Esto es porque `trunks` contiene `'Trunks'` en este caso. Si el arreglo fuera más corto y no tuviera un tercer elemento, mostraría:
        'Personaje 3: No existe ese personaje'
*/
console.error( 'Personaje 3: ', trunks);

export{};