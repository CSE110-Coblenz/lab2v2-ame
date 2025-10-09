const musicNames : string[] = ['SZA-Special', 'Clairo-Bags', 'Clairo-4EVER'];

export function printMusic() {
    console.log('--- Music List ---');
    musicNames.forEach((music) => {
        console.log(music);
    });
}

printMusic();