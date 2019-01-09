// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// function reverse(str) {
//     let temp = str.split('');
//     let reversed = '';
//     for (let char of str){
//       reversed = char + reversed
//     }
//     return reversed;
//   }

function reverse(str) {
    debugger;
    return str.split('').reduce((result, char) =>
        char + result
        , '');
}

reverse('asdf');

module.exports = reverse;
