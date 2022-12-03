const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const common: string[] = []

for(let i = 0; i < lines.length; i += 3) {
    const [one, two, three] = [lines[i], lines[i + 1], lines[i + 2]]

    for(const char of one) {
        if(two.includes(char) && three.includes(char)) {
            common.push(char)
            break;
        }
    }
}

const sum = common.reduce((sum, char) => sum + priority.indexOf(char) + 1, 0)

console.log(sum) // answer: 2758