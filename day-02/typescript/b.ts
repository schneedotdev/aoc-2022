const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const map: {
    [key: string]: number
} = {
    'A X': 3 + 0,
    'A Y': 1 + 3,
    'A Z': 2 + 6,
    'B X': 1 + 0,
    'B Y': 2 + 3,
    'B Z': 3 + 6,
    'C X': 2 + 0,
    'C Y': 3 + 3,
    'C Z': 1 + 6
}

const points = lines.reduce((points, turn) => points + map[turn], 0)

console.log(points)