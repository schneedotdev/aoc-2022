const input = await Deno.readTextFile("../input.txt")
const lines = input.split('$').slice(1)

const paths: number[] = []
let sizes: number[] = []

lines.forEach(line => {
    const args = line.slice(1).split('\n').filter(e => e !== '')
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
            paths[paths.length - 1] += parseInt(kind, 10)
        }
    })
}

sizes = sizes.concat(paths.reduce((sum, path) => sum + path, 0))
const max = Math.max(...sizes)
sizes = sizes.filter(size => size >= max - 40000000)

console.log("part b solution:", Math.min(...sizes)) // 2086088