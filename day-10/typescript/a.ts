const input = await Deno.readTextFile('../input.txt')
const lines = input.split('\n')

let [cycle, register, strength] = [0, 1, 0]

for(const line of lines) {
    const [operation, value] = line.split(' ')

    cycle++
    checkCycle()

    if(operation === 'addx')  {
        cycle++
        checkCycle()
        register += parseInt(value, 10)
    }
}

function checkCycle() {
    if(cycle % 20 === 0 && cycle % 40 !== 0) {
        strength += cycle * register
    }
}

console.log("The sum of the 20th, 60th, 100th, 140th, 180th and 220th signal strengths is", strength) // 14540