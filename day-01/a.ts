const input = await Deno.readTextFile("./input.txt")
const inventories = input.split('\n\n')

let most = 0

inventories.forEach(inventory => {
    const calories = inventory
        .split('\n')
        .reduce((calories, meal) => calories += parseInt(meal, 10), 0)

    if(most < calories) most = calories
})

console.log("most calories: ", most)