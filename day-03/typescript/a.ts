const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const sum = lines.reduce((sum, line) => {
    const halfLen = Math.ceil(line.length / 2);
    const firstHalf = line.substring(0, halfLen)
    const secondHalf = line.substring(halfLen)

    const commonalities: string[] = []
    
    for(const char of firstHalf) {
        if(!commonalities.includes(char) && secondHalf.includes(char)) {
            commonalities.push(char)
        }
    }

    return sum + commonalities.reduce((sum, char) => sum + priority.indexOf(char) + 1, 0)
}, 0)

console.log(sum) // answer: 7553