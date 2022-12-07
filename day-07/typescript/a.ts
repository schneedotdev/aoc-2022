const input = await Deno.readTextFile("../input.txt")
const lines = input.split('$').slice(2)

const paths: number[] = []
let sizes: number[] = []
let total = 0

lines.forEach(line => {
    const args = line.slice(1).split('\n').slice(0, -1)
    processCmd(args)
})

function processCmd(args: string[]) {
    const cmd = args[0].slice(0, 2)

    switch(cmd) {
        case 'cd':
            processCD(args[0].slice(3))
            break;
        case 'ls':
            processLS(args.slice(1))
            break;
    }
}

function processCD(location: string) {
    if (location === '..') {
        const size = paths.pop() || 0
        sizes.push(size)
        paths[paths.length - 1] += size
    } else {
        paths.push(0)
    }
}

function processLS(args: string[]) {
    args.forEach(arg => {
        const [kind, _] = arg.split(' ')

        if(kind !== 'dir') {
            paths[paths.length - 1] += Number(kind)
        }
    })
}

sizes = sizes.concat(...paths.reverse())
total = sizes
            .filter(size => size <= 100000)
            .reduce((sum, path) => sum + path, 0)

console.log("part a solution:", total)