
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Txema',
    children: ['Brrruuuuclin']
}

const passenger2: Passenger = {
    name: 'Manu',
    children: ['Gusmin', 'Cubi']
}

const passenger3: Passenger = {
    name: 'Antonio',
}

const returnChildrenNumber = ( passenger: Passenger ): number => {
    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name, howManyChildren );

    return howManyChildren;
}

returnChildrenNumber( passenger1 );
returnChildrenNumber( passenger2 );
returnChildrenNumber( passenger3 );
