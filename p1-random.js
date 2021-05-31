// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//returns a string of random length between 5 - 25 characters
function getRandomLetters() {
    let randomNumber = getRandomInteger(5,26);
    let letters = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < randomNumber; i++){
        letter = alphabet[getRandomInteger(0,alphabet.length)];
        letters = letters + letter;
    }
    return letters
}
console.log(getRandomLetters());