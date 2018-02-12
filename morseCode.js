var Morse = {};


Morse.decode = function(integerArray){
  // ·–·–·– ·–·–·– ·–·–·–
};

Morse.alpha = {
  'A': '10111',
  'B': '111010101',
  'C': '11101011101',
  'D': '1110101',
  'E': '1',
  'F': '101011101',
  'G': '111011101',
  'H': '1010101',
  'I': '101',
  'J': '1011101110111',
  'K': '111010111',
  'L': '101110101',
  'M': '1110111',
  'N': '11101',
  'O': '11101110111',
  'P': '10111011101',
  'Q': '1110111010111',
  'R': '1011101',
  'S': '10101',
  'T': '111',
  'U': '1010111',
  'V': '101010111',
  'W': '101110111',
  'X': '11101010111',
  'Y': '1110101110111',
  'Z': '11101110101',
  '0': '1110111011101110111',
  '1': '10111011101110111',
  '2': '101011101110111',
  '3': '1010101110111',
  '4': '10101010111',
  '5': '101010101',
  '6': '11101010101',
  '7': '1110111010101',
  '8': '111011101110101',
  '9': '11101110111011101',
  '.': '10111010111010111',
  ',': '1110111010101110111',
  '?': '101011101110101',
  "'": '1011101110111011101',
  '!': '1110101110101110111',
  '/': '1110101011101',
  '(': '111010111011101',
  ')': '1110101110111010111',
  '&': '10111010101',
  ':': '11101110111010101',
  ';': '11101011101011101',
  '=': '1110101010111',
  '+': '1011101011101',
  '-': '111010101010111',
  '_': '10101110111010111',
  '"': '101110101011101',
  '$': '10101011101010111',
  '@': '10111011101011101',
  ' ': '0' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};

Morse.encode = function(message){
  // ·–·–·– ·–·–·– ·–·–·–

    message = message.split('');

    let bits='', word='';

    message.forEach((element, i) => {
        word = i != message.length - 1 ? Morse.alpha[element]+'000' : Morse.alpha[element];
        bits += element == ' ' ? '0000000' : word;
    });

    let sliced = bits.slice(0, 32);

    let padBits, padding=true;
    let encodedArr = [];
    let from=0, to=32;

    while (padding) {
        let sliced;
        if (to > bits.length) {
            padBits = to - bits.length;
            padding = false;
            sliced = bits.slice(from, to).split('')
            for (let i=0; i < padBits; i++) {
                sliced.push('0');
            }
            sliced = sliced.join('');
        } else {
            sliced = bits.slice(from, to)
        }

        console.log((~parseInt(sliced, 2) + 1 ) - 2*(~parseInt(sliced, 2) + 1));
        encodedArr.push(sliced);
        from = to;
        to += 32;
    }

    console.log(encodedArr);    
};

Morse.encode('HELLO WORLD');