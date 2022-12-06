const input = (await Deno.readTextFile("../input.txt")).split('')

function detectStart() {
    for(let i = 0; i < input.length; i++) {
        const group = input.slice(i, i + 14)
        if([...new Set(group)].length === 14) return i + 14
    }
}

console.log(detectStart()) // answer: 3986