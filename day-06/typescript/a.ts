const input = (await Deno.readTextFile("../input.txt")).split('')

function detectStart() {
    for(let i = 0; i < input.length; i++) {
        const group = input.slice(i, i + 4)
        if([...new Set(group)].length === 4) return i + 4
    }
}

console.log(detectStart()) // answer: 1300