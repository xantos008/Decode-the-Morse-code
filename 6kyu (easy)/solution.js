decodeMorse = function(morseCode){
  return morseCode
      .split('   ')
      .map(
          a => a
              .split(' ')
              .map(
                  b => MORSE_CODE[b]
              ).join('')
      ).join(' ').trim();
}