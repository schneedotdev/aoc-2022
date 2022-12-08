const input = await Deno.readTextFile('../input.txt')
const grid = input.split('\n').map(line => line.split('').map(Number))

const PERIMETER = grid.length * 4 - 4
let amount = PERIMETER

for (let i = 1; i < grid.length - 1; i++) {
    for(let j = 1; j < grid[i].length - 1; j++) {
        const tree = grid[i][j]
        if(isVisible(tree, i, j)) {
            amount++
        }
    }
}

function isVisible(tree: number, row: number, col: number) {
    const visibleUp = () => {
        for(let i = 0; i < row; i++) {
            if(grid[i][col] >= tree) return false
        }
        return true
    }
    const visibleDown = () => {
        for(let i = row + 1; i < grid.length; i++) {
            if(grid[i][col] >= tree) return false
        }
        return true
    }
    const visibleLeft = () => {
        for(let i = 0; i < col; i++) {
            if(grid[row][i] >= tree) return false
        }
        return true
    }
    const visibleRight = () => {
        for(let i = col + 1; i < grid.length; i++) {
            if(grid[row][i] >= tree) return false
        }
        return true
    }

    return visibleUp() || visibleDown() || visibleLeft() || visibleRight() 
}

console.log("The amount of visible trees is:", amount) // answer: 1809