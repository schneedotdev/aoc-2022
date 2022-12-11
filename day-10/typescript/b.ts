const input = await Deno.readTextFile('../input.txt')
const lines = input.split('\n')

let [cycle, register] = [0, 1]
const rows: string[][] = [] 

for(const line of lines) {
    const [operation, value] = line.split(' ')

    checkCycle()
    cycle++

    if(operation === 'addx')  {
        checkCycle()
        cycle++
        register += parseInt(value, 10)
    }
}

function checkCycle() {
    if(cycle % 40 === 0) {
        rows.push([])
    }

    const cur = rows[rows.length - 1]

    if(Math.abs(cur.length - register) < 2) {
        cur.push('#')
    } else {
        cur.push(" ")
    }
}

rows.forEach(row => {
    console.log(row.join(' ')) // EHZFZHCZ
})