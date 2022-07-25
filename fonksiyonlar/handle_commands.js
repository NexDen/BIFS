const { Modal, TextInputComponent, showModal } = require("discord-modals")

var {add_burak_insult} = require("./add_burak_insult.js")

var {komut_log} = require("./log_messages")
var komut_dict = {
    "add_burak_insult": add_burak_insult,
}


async function handle_command(interaction){
    var komut_isim = interaction.commandName
    var komut = komut_dict[komut_isim]
    if (komut_isim !== "komutları_güncelle"){
        komut(interaction);
    }
    else {
        if (interaction.user.id === "721832519338819616")
        {
            komut(interaction)
        } else {
            return interaction.reply({content: "kes", ephemeral: true})
        }
    }
    komut_log(interaction)
}
module.exports = {handle_command}