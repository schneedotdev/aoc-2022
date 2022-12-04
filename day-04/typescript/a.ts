const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

// convert format from "2-4,6-8" -> ["2", "4", "6", "8"]
const ranges = lines.map(line => {
    return line.split(',').map(part => {
        return part.split('-')
    }).flat().map(Number)
})

// check if num is in range of min and max (type declaration in gloabl.d.ts)
Number.prototype.inRange = function(min: number, max: number) {
    return this >= min && this <= max
}

// ranges that fully overlap
const overlaps = ranges.filter(([a, b, c, d]) => {
    return a.inRange(c, d) && b.inRange(c, d) ||
        c.inRange(a, b) && d.inRange(a, b)
}).length

console.log(overlaps) // answer: 518