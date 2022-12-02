const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const map: {
    [key: string]: number
} = {
    'A X': 1 + 3,
    'A Y': 2 + 6,
    'A Z': 3 + 0,
    'B X': 1 + 0,
    'B Y': 2 + 3,
    'B Z': 3 + 6,
    'C X': 1 + 6,
    'C Y': 2 + 0,
    'C Z': 3 + 3
}

const points = lines.reduce((points, turn) => points + map[turn], 0)

console.log(points)