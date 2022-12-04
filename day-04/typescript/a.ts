const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

// convert format from "2-4,6-8" -> ["2", "4", "6", "8"]
const ranges = lines.map(line => {
    return line.split(',').map(part => {
        return part.split('-')
    }).flat().map(Number)
})

// ranges that fully overlap
const overlaps = ranges.filter(range => {
    const [a, b, c, d] = range
    return (inRange(c, a, b) && inRange(d, a, b)) || 
            (inRange(a, c, d) && inRange(b, c, d))
}).length

// check if num is in range of min and max
function inRange(num: number, min: number, max: number) {
    return num >= min && num <= max
}

console.log(overlaps) // answer: 518