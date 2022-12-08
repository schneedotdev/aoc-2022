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
    for(let r = row - 1; r >= 0; r--) {
        up++
        if(grid[r][col] >= tree) break;
    }

    // check down
    for(let r = row + 1; r < grid.length; r++) {
        down++
        if(grid[r][col] >= tree) break;
    }

    // check left
    for(let c = col - 1; c >= 0; c--) {
        left++
        if(grid[row][c] >= tree) break;
    }

    // check right
    for(let c = col + 1; c < grid.length; c++) {
        right++
        if(grid[row][c] >= tree) break;
    }

    const score = up * down * left * right
    
    if(score > highest) {
        highest = score
    }
}

console.log("The highest scenic score is:", highest)