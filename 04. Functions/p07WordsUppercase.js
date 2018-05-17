function getUpper(str) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ').trim();

    function extractWords() { return strUpper.split(/\W+/); }
}

console.log(getUpper('Hi, how are you?'))
console.log(getUpper('hello'))