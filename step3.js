function addtoZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        console.log(`num: ${num}`)
        for (let index = 0; index < arr.length; index++) {
            console.log(`Arr[index]: ${arr[index]}`)
            if (num + arr[index === 0]) {
                return true
            }

        }

    }
    return false
}

console.log(addtoZero([1, 2, 3, -2]))