const input = await Deno.readTextFile("../input.txt")
const lines = input.split("\n")

const head = { x: 0, y: 0 }
const tail = { x: 0, y: 0 }

const positions = new Set<string>()
positions.add('0, 0')

lines.forEach((line) => {
  const moves = line.split(" ")
  const direction = moves[0]
  const spaces = parseInt(moves[1], 10)

  for (let i = 0; i < spaces; i++) {
    switch (direction) {
        case "U":
            head.y++
            break;
        case "D":
            head.y--
            break;
        case "L":
            head.x--
            break;
        case "R":
            head.x++
            break;
    }

    const dx = Math.abs(head.x - tail.x)
    const dy = Math.abs(head.y - tail.y)

    if(dx > 1 || dx + dy > 2) {
        tail.x += head.x > tail.x ? 1 : -1
    }

    if(dy > 1 || dx + dy > 2) {
        tail.y += head.y > tail.y ? 1 : -1
    }

    positions.add(`${tail.x}, ${tail.y}`)
  }
})

console.log("part a solution: ", positions.size) // answer: 6470
