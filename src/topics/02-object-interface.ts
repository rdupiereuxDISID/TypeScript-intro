
const skills: string[] = ['Bash','Counter','Healing'];

// Interfaz que define la estructura de un objeto que representa un personaje.
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // La propiedad `hometown` es opcional
}

// Creación del objeto `gusmin` de tipo `Character` (que sigue la estructura definida por la interfaz `Character`).
const gusmin: Character = {
    name:'Gusmin',
    hp: 100,
    skills: ['Bash','Counter']
}

// Como `hometown` es una propiedad opcional, podemos agregarla o no en cualquier momento.
gusmin.hometown = 'Valencia';

// Usamos `console.table` para imprimir el objeto `gusmin` en formato tabla por consola.
console.table(gusmin);

// La instrucción `export {}` es usada para indicar que este archivo es un módulo de TypeScript.
export{};