//TypeScript Type: Alphabet


// Function: Caesar Cipher
export function caesarCipher (encodedText: string, shift: number) : string  {
  // Alphabet
  const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  //a reduce helper was used to decipher the encoded text. 
  return encodedText.split('').reduce((decodedText: string, character: string): string => {
        if (!(/[a-zA-Z]/).test(character)) {
            
            return decodedText + character
        }
        else {
            const encodedAlphabetIndex: number = alphabet.indexOf(character.toUpperCase())
            const decodedAlphabetIndex: number = shift + encodedAlphabetIndex
            return decodedText + alphabet[decodedAlphabetIndex % 26] 
        }
    },"")
  


};

console.log('encoded text: GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK. => ' + 'decoded text: ' + caesarCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39))


