const input = await Deno.readTextFile("../input.txt")
const lines = input.split("\n")

const rope = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
]

const positions = new Set<string>()
positions.add('0, 0')

lines.forEach((line) => {
  const moves = line.split(" ")
  const direction = moves[0]
  const spaces = parseInt(moves[1], 10)

  for (let i = 0; i < spaces; i++) {
    switch (direction) {
        case "U":
            rope[0].y++
            break;
        case "D":
            rope[0].y--
            break;
        case "L":
            rope[0].x--
            break;
        case "R":
            rope[0].x++
            break;
    }
    
    for(let j = 1; j < rope.length; j++) {
        const prev = rope[j - 1]
        const cur = rope[j]
        const dx = Math.abs(prev.x - cur.x)
        const dy = Math.abs(prev.y - cur.y)

        if(prev.x === cur.x || prev.y === cur.y) {
            if(dx + dy < 2) break;

            if (prev.x > cur.x) {
                rope[j].x++
            } else if (prev.x < cur.x) {
                rope[j].x--
            } else if (prev.y > cur.y) {
                rope[j].y++
            } else {
                rope[j].y--
            }
        } else {
            if(dx + dy < 3) break;
            
            if (prev.x > cur.x && prev.y > cur.y) {
                rope[j].x++;
                rope[j].y++;
            } else if (prev.x < cur.x && prev.y < cur.y) {
                rope[j].x--;
                rope[j].y--;
            } else if (prev.x > cur.x && prev.y < cur.y) {
                rope[j].x++;
                rope[j].y--;
            } else {
                rope[j].x--;
                rope[j].y++;
            }
        }
    }
    
    positions.add(`${rope[rope.length - 1].x}, ${rope[rope.length - 1].y}`)
  }
})

console.log("part b solution: ", positions.size) // answer: 2658