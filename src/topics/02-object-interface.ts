
const skills: string[] = ['Bash','Counter','Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const gusmin: Character = {
    name:'Gusmin',
    hp: 100,
    skills: ['Bash','Counter']
}

gusmin.hometown = 'Valencia';

console.table(gusmin);

export{};