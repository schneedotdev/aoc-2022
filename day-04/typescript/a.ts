const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const ranges = lines.map(line => {
    return line.split(',').map(part => {
        return part.split('-')
    }).flat().map(Number)
})

const overlaps = ranges.filter(range => {
    const [a, b, c, d] = range
    return (c >= a && c <= b && d >= a && d <= b) || 
            (a >= c && a <= d && b <= d && b >= c)
}).length

console.log(overlaps) // 518