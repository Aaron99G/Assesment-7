// SUM ZERO
function addtoZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        console.log(`num: ${num}`)
        for (let index = 0; index < arr.length; index++) {
            console.log(`Arr[index]: ${arr[index]}`)
            if (num + arr[index] === 0) {
                return true
            }

        }

    }
    return false
}

console.log(addtoZero([]))
console.log(addtoZero([1, 2, 3]))
console.log(addtoZero([1, 2, 3, -2]))

// UNIQUE CHARACTERS
function hasUniqueChars(str) {
    let newStr = str.split('')
    for (let i = 0; i < newStr.length; i++) {
        let char = newStr[i]
        console.log(`char: ${char}`)
        console.log(`next char: ${str[i + 1]}`)
        if (char === newStr[i + 1]) {
            return false
        }
    }
    return true
}

console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))
console.log(hasUniqueChars('Hello'))

// PANGRAM SENTANCE
function isPangram(str) {
    sentance = str.toLowerCase();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i = 0; i < alphabet.length; i++) {
        let found = sentance.indexOf(alphabet[i])
        if (found == -1) {
            return false
        }

    }
    return true
}


console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))