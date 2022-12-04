const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

// convert format from "2-4,6-8" -> ["2", "4", "6", "8"]
const ranges = lines.map(line => {
    return line.split(',').map(part => {
        return part.split('-')
    }).flat().map(Number)
})

// ranges that partially overlap
const overlaps = ranges.filter(range => {
    const [a, b, c, d] = range
    return (a >= c && a <= d) ||
        (b >= c && b <= d) ||
        (c >= a && c <= b) ||
        (d <= b && d >= a)
}).length

console.log(overlaps) // answer: 909