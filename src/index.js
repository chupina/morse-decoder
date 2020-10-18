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
    '-----':  '0'
    
};

function decode(expr) {
let toDecodeArr = expr.split('');
const letterArr = [];
const morseCode=[]; 
while(toDecodeArr.length > 0){
    letterArr.push(toDecodeArr.splice(0,10))
}
letterArr.forEach(letter =>{
 const startLetter = letter.indexOf('1'); 
if(letter.indexOf('1')==-1){
    morseCode.push("wspace");
    }else{
     const part =letter.splice(startLetter);
     const code = part.join('').replace(/11/g,'-').replace(/10/g,'.');
     morseCode.push(code); 
    }
})
const decodedArr = morseCode.map(letter=> {
    if(letter == 'wspace'){
        return ' ';
    }else{
        return MORSE_TABLE[letter];
    }
    
});
const decodedStr = decodedArr.join('');
return decodedStr;
}

module.exports = {
    decode
}