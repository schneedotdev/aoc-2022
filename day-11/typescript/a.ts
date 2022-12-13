const input = await Deno.readTextFile('../input.txt')
const monkeys = input.split('Monkey').slice(1).map(monkey => parseInput(monkey))

type ParsedInput = {
    items: number[],
    operation: string,
    str: string,
    test: TestInfo
}

type TestInfo = {
    divisibleBy: number,
    yes: number,
    no: number
}

function parseInput(monkey: string): ParsedInput {
    const info = monkey.split('\n')

    const items = info[1]
        .trim()
        .replace('Starting items: ', '')
        .split(', ')
        .map(Number)

    const [operation, str] = info[2]
        .trim()
        .replace('Operation: new = old ', '')
        .split(' ')

    const test: TestInfo = {
        divisibleBy: parseInt(info[3]
            .trim()
            .replace('Test: divisible by ', ''), 10),
        yes: parseInt(info[4]
            .trim()
            .replace('If true: throw to monkey ', ''), 10),
        no: parseInt(info[5]
            .trim()
            .replace('If false: throw to monkey ', ''), 10)  
    }

    return { items, operation, str, test }
}

const inspected = [0, 0, 0, 0, 0, 0, 0, 0]
let round = 1

while(round <= 20) {
    round++
    monkeys.forEach((monkey, i) => {
        const { items, operation, str, test: { divisibleBy, yes, no}} = monkey
        while(items.length) {
            inspected[i]++
            let worry = items.shift()!
            const value = str === 'old' ? worry : Number(str)
    
            worry = (() => ({
                "+": worry + value,
                "*": worry * value,
            })[operation])()!
    
            worry = Math.floor(worry / 3)
            const index = worry % divisibleBy === 0 ? yes : no
            monkeys[index].items.push(worry)
        }
    })
}

inspected.sort((a, b) => b - a)
console.log(inspected[0] * inspected[1]) // answer: 98280