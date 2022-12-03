const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

let sum = 0

for(let i = 0; i < lines.length; i += 3) {
    const [one, two, three] = [lines[i], lines[i + 1], lines[i + 2]]

    for(const char of one) {
        if(two.includes(char) && three.includes(char)) {
            sum += priority.indexOf(char) + 1
            break;
        }
    }
}

console.log(sum) // answer: 2758