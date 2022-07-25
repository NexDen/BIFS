var { token } = require("./HBB.json")
var { Discord, Client, Intents, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")
/*
katılmada otorol ver +
tepki-rol ekleme +

/info
*/


//// repl.it açık tutma
// const {http} = require("http")
// const express = require("express")
// const app = express()
// app.get("/", (request, response) => {
//     console.log(Date.now() + " Ping tamamdır.")
//     response.sendStatus(200)
// })



var debug = false;


var { mesaj_log , komut_log , düzenle_log } = require("./fonksiyonlar/log_messages.js")

var {handle_command} = require("./fonksiyonlar/handle_commands.js")

const { handle_message } = require("./fonksiyonlar/handle_messages");

var {registerCommands} = require("./fonksiyonlar/deploy-commands.js")

var client = new Client({
    intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILD_MEMBERS", Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
})



client.once('ready', () => { 
    console.log(`\x1b[1m${client.user.username}'a bağlanıldı!\x1b[0m'`)
    client.user.setPresence({ activities: [{ name: 'osu!'}], status: 'online' });
    guild = client.guilds.cache.find(guild => guild.id === "991380888728375336")
    // channel = guild.channels.cache.find(guild => guild.id === "991380889172979804")
    // channel.send("")
    // reactionEmoji = guild.emojis.cache.find(emoji => emoji.name === 'sigmaballs');
    // channel.messages.fetch("message id goes here").then(message =>
    //     message.react(reactionEmoji))
});

client.on("error", error => {
    console.log("HATA", error)
})
client.on("messageUpdate", async (oldMessage, newMessage) =>{
    düzenle_log(oldMessage, newMessage, client)
    })

// client.on("interactionCreate", async interaction => {
//     console.log(interaction)
//     if (interaction.isCommand()) {
//         handle_command(interaction)
//     } 
//     if (interaction.isSelectMenu()){
//         handle_select_menu(interaction, debug)
//     }
//     if (interaction.isButton()){
//         handle_button(interaction, debug)   
//     }
// })

// client.on("guildCreate", async guild => {
//     console.log(guild)
//     await registerCommands(guild)
// })

// client.on("guildMemberAdd", async member => {
//     handle_member_add(member, debug)
// })

// client.on("guildMemberRemove", async member => {
//     handle_member_leave(member, debug)
// })

client.on("messageCreate", async message =>{
    handle_message(message, client, debug)
})

client.login(token)