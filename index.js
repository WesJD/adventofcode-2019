const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What day do you want to run?\ninteger (1-25)> `, (day) => {
    console.log(`Running day ${day}...`)
    require(`${__dirname}/days/day${day}.js`)
    readline.close()
})