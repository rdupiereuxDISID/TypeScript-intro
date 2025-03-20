
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayerVariable: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

// Desestructuración.
const { song, songDuration: duration, details } = audioPlayerVariable;
const { author } = details;

//console.log('Song: ', audioPlayerVariable.song);
console.log( 'Song: ', song );

//console.log('Duration: ', audioPlayerVariable.songDuration);
console.log( 'Duration: ', duration );

//console.log('Author: ', audioPlayerVariable.details.author);
console.log('Author: ', author);


export{};