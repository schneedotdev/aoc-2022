const input = await Deno.readTextFile("../input.txt")
const [stack, moves] = input.split('\n\n')

let i = 0
const crates = stack
    .replace(/([[\]1-9])+/g, ' ')
    .split('')
    .filter((crate, i) => (i - 1) % 4 === 0 || crate === '\n')
    .reduce((crates: string[][], crate) => {
        if(crate === '\n') {
            i = 0
        } else {
            if(crate !== ' ') {
                crates[i].unshift(crate)
            }
            i++
        }
        return crates
    }, [[], [], [], [], [], [], [], [], []])

moves
    .split('\n')
    .map(move => {
        return move
            .replace(/([a-z])+/g, '')
            .split(' ')
            .filter((_, i) => i % 2)
            .map(Number)
    })
    .forEach(([move, from, to]) => {
        for(let i = 0; i < move; i++) {
            if(crates[from-1] !== undefined) {
                const crate = crates[from-1].pop()
                if(crate === undefined) break;
                crates[to-1].push(crate)
            }
        }
    })

console.log(crates.map(crate => crate[crate.length - 1]).join('')) // answer: PSNRGBTFT