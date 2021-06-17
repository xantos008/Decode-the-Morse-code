var decodeBits = function(bits){
  const trimBits = bits.replace(/(^0+|0+$)/g, '').split('')
  const result = []
  var word = []
  if(trimBits.length > 3){
    trimBits.every((v, i, array) => {
      if(i > 0 && i < array.length - 1){
        return v == array[i-1] ? word.push(v) : result.push(word) && (word = []) && word.push(v)
      }else  if(i == array.length - 1){
        return v == array[i-1] ? word.push(v) && result.push(word) : result.push(word) && result.push([v])
      }else{
        return word.push(v)
      }
    })
    if(result.length === 1){
      return result[0][0] == 1 ? '.' : '-'.repeat(result[0].length / 3)
    }else if(result.map((v) => v.join(''))[1].length == 1 && result.length == 3){
      let result1 = result.map((v) => v.join(''))
      return result1.map((v) => v[0] == 1 ? (v.length <= 2 ? '.' : '-') : (v.length >= 1 ? ' ' : '   ')).join('')

    }else{
      return result.map((v) => v.join('')).map((v) => {
        if(v[0] == 0){
          if(v.length % 2 == 0){
            if(v.length > 6){
              return '       '
            }if(v.length == 6){
              return '   '
            }else{
              return ' '
            }
          }else if(v.length == 7){
            return '       '
          }else if(v.length == 3){
            return '   '
          }else if(v.length > 7){
            return '   '.repeat(v.length / 7 - 1)
          }else{
            return ' '
          }
        }else if(v[0] == 1){
          if(v.length % 2 == 0 && v.length % 3 != 0){
            return String.fromCharCode(46).repeat(v.length / 2)
          }else if(v.length % 3 == 0){
            return String.fromCharCode(45)
          }else{
            return String.fromCharCode(46)
          }
        }
      }).join('')
    }
  }else{

    return trimBits.every((v, i, arr) => v === arr[0]) && trimBits[0] == 1 ? '.' : '..'
  }
}

var decodeMorse = function(morseCode){
  return morseCode.split('       ').map((v) => v.split('   ')).map((v) => v.map((val) => MORSE_CODE[val.replace(/\s/g, '')]).join('')).join(' ')
}