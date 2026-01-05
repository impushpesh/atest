// A function to find palindromes in a given array of strings
function findPalindromes(arr) {
    return arr.filter(str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
}