const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const sum = lines.reduce((sum, line) => {
    const halfLen = Math.ceil(line.length / 2)
    const firstHalf = line.substring(0, halfLen)
    const secondHalf = line.substring(halfLen)
    
    for(const char of firstHalf) {
        if(secondHalf.includes(char)) {
            sum += priority.indexOf(char) + 1
            break;
        }
    }

    return sum
}, 0)

console.log(sum) // answer: 7553