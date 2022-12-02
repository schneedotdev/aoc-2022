const input = await Deno.readTextFile("../input.txt")
const lines = input.split('\n')

const map: {
    [key: string]: number
} = {
    'B X': 1,
    'C X': 2,
    'A X': 3,
    'A Y': 4,
    'B Y': 5,
    'C Y': 6,
    'C Z': 7,
    'A Z': 8,
    'B Z': 9,
}

const points = lines.reduce((points, turn) => points + map[turn], 0)

console.log(points)