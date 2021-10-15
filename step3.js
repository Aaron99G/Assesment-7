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