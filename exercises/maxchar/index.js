// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxCount = 0;
    let maxChar = '';
    let map = mapper(str);
    for (let char in map){
      if (map[char] > maxCount) {
        maxCount = map[char];
        maxChar = char;
      }
    }
    return maxChar;
  }
  
  function mapper(str){
    let obj = {};
    for (let char of str ){
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  }

module.exports = maxChar;
