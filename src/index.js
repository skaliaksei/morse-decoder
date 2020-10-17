

function decode(expr) {  //Decoding from Morse to letters & numbers
    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
        '     ':  ' ',
    };
    let codingLetter = '';
    let decodingLetter = '';
    let resultString = '';

    for (let i = 0; i < expr.length / 10; i++) {
        codingLetter = expr.substring(i * 10, (i + 1) * 10);
        decodingLetter = codingLetterToSymbol(codingLetter);
        resultString += MORSE_TABLE[decodingLetter];
    }
    return resultString;
}

function codingLetterToSymbol(str) {  //Decoding from numbers to Morse
    const SYMBOL_TABLE = {
      '00':   '',
      '10':   '.',
      '11':   '-',
      '**':   ' ',
    };
    let morseSymbol = '';
    let morseResult = '';

    for (let i = 0; i < str.length; i += 2) {
      morseSymbol = str.substring(i, (i + 2));
      morseResult += SYMBOL_TABLE[morseSymbol];

    }
    return morseResult;
}


module.exports = {
    decode
}