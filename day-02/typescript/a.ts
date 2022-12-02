const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const map: {
    [key: string]: number
} = {
    'B X': 1,
    'C Y': 2,
    'A Z': 3,
    'A X': 4,
    'B Y': 5,
    'C Z': 6,
    'C X': 7,
    'A Y': 8,
    'B Z': 9,
}

const points = lines.reduce((points, turn) => points + map[turn], 0)

console.log(points)