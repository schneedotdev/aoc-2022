const input = await Deno.readTextFile('../input.txt')
const grid = input.split('\n').map(line => line.split('').map(Number))

let highest = 0

for (let i = 1; i < grid.length - 1; i++) {
    for(let j = 1; j < grid[i].length - 1; j++) {
        calcScore(i, j)
    }
}

function calcScore(row: number, col: number) {
    const tree = grid[row][col]
    let [up, down, left, right] = [0, 0, 0, 0]

    // check up
    for(let i = row - 1; i >= 0; i--) {
        up++
        if(grid[i][col] >= tree) break;
    }

    // check down
    for(let i = row + 1; i < grid.length; i++) {
        down++
        if(grid[i][col] >= tree) break;
    }

    // check left
    for(let i = col - 1; i >= 0; i--) {
        left++
        if(grid[row][i] >= tree) break;
    }

    // check right
    for(let i = col + 1; i < grid.length; i++) {
        right++
        if(grid[row][i] >= tree) break;
    }

    const score = up * down * left * right
    
    if(score > highest) {
        highest = score
    }
}

console.log("The highest scenic score is:", highest) // answer: 479400