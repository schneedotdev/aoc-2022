const input = await Deno.readTextFile('../input.txt')
const grid = input.split('\n').map(line => line.split('').map(Number))

const perimeter = grid.length * 4 - 4
let amount = perimeter

for (let i = 1; i < grid.length - 1; i++) {
    for(let j = 1; j < grid[i].length - 1; j++) {
        if(isVisible(i, j)) {
            amount++
        }
    }
}

function isVisible(row: number, col: number) {
    const tree = grid[row][col]
    let visible = true

    // check left
    for(let c = 0; c < col; c++) {
        if(grid[row][c] >= tree) {
            visible = false;
            break;
        }
    }

    if(visible) return visible

    visible = true
    // check right
    for(let c = col + 1; c < grid.length; c++) {
        if(grid[row][c] >= tree) {
            visible = false;
            break;
        }
    }

    if(visible) return visible

    visible = true
    // check up
    for(let r = 0; r < row; r++) {
        if(grid[r][col] >= tree) {
            visible = false;
            break;
        }
    }

    if(visible) return visible

    visible = true
    // check down
    for(let r = row + 1; r < grid.length; r++) {
        if(grid[r][col] >= tree) {
            visible = false;
            break;
        }
    }

    return visible
}

console.log("The amount of visible trees is:", amount) // answer: 1809