//97-122

/* https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function createWord(length) {
    vowels = ["a", "e", "i", "o", "u", "y"]; //Yea Y's a vowel, sue me.
    word = "";
    var num = "";
    var ccharacter = "";
    var comp = 1;
    if(length <= 5) {
        comp = 0;
    }
    for(i = 0; i < length; i++) {
        if((i % 2) === comp) {
            num = Math.floor(getRandomArbitrary(0, 5));
            ccharacter = vowels[num];
            word = word + ccharacter;
        } else {
            num = Math.floor(getRandomArbitrary(97, 122));
            ccharacter = String.fromCharCode(num);
            word = word + ccharacter;
        }
    }
    return word;
}

/*
function createWord() {
    var word = "";
    return word;
}
*/
