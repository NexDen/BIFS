const fs = require("fs")

async function add_burak_insult(interaction){
    var insult = interaction.options.getString("insult")
    try {
        fs.writeFileSync("./burak_insult.txt", $`{insult}\n`)
        return interaction.reply("Insult added successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {add_burak_insult}