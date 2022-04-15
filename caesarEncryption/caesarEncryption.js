function caesar_encrypt(data, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let hasil = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (data[i] == alphabet[j]) {
        let index = j + key
        if (index > alphabet.length) {
          index -= alphabet.length
        }
        hasil += alphabet[index]
      }else if (data[i] === ' ') {
        hasil += data[i]
        break
      }
    }
  }
  return hasil
}
function caesar_decrypt(data, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let hasil = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (data[i] == alphabet[j]) {
        let index = j - key
        if (index < 0) {
          index += alphabet.length
        }
        hasil += alphabet[index]
      } else if (data[i] === ' ') {
        hasil += data[i]
        break
      }
    }
  }
  return hasil
}

console.log(caesar_decrypt('blv bobl tfibu', 1));