const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require("../HBB.json")

const commands = [
    new SlashCommandBuilder().setName("add_burak_insult").setDescription("Adds another insult to the list").addStringOption(
        option => option.setName("insult").setRequired(true).setDescription("zort")
    ),

    new SlashCommandBuilder().setName("burak").setDescription("BURAK")

]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);
async function registerCommands(guild){
    (async () => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(clientId, guild.id),
                { body: commands },
            );
            console.log('Komutlar eklendi.');
        } catch (error) {
            console.error(error);
        }
    })();
}
module.exports = {registerCommands}