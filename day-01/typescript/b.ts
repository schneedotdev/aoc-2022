const input = await Deno.readTextFile("../input.txt")
const inventories = input.split('\n\n')

const elves = inventories.map(inventory => {
    return inventory
        .split('\n')
        .reduce((calories, meal) => calories += parseInt(meal, 10), 0)
})

elves.sort((a, b) => a - b)

const sum = (elves.at(-1) || 0) + (elves.at(-2) || 0) + (elves.at(-3) || 0)

console.log("sum of the top 3 elves calories: ", sum)