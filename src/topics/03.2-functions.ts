interface Character {
    name: string;
    hp: number;
    showHp: () => void; // La propiedad `hometown` es opcional
}

const healCharacter = ( character: Character, amaunt: number ) => {
    character.hp += amaunt;
}

const mandin: Character = {
    name:'Mandín',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida de ${this.name}: ${this.hp}`);
    }
}

healCharacter(mandin, 10);
healCharacter(mandin, 30);

mandin.showHp();


/* La instrucción `export {}` es usada para indicar que este archivo es un módulo de TypeScript. */
export {};