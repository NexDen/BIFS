
var Bright = "\x1b[1m"
var Dim = "\x1b[2m"
var Underscore = "\x1b[4m"
var Blink = "\x1b[5m"
var Reverse = "\x1b[7m"
var Hidden = "\x1b[8m"

var FgBlack = "\x1b[30m"
var FgRed = "\x1b[31m"
var FgGreen = "\x1b[32m"
var FgYellow = "\x1b[33m"
var FgBlue = "\x1b[34m"
var FgMagenta = "\x1b[35m"
var FgCyan = "\x1b[36m"
var FgWhite = "\x1b[37m"

var BgBlack = "\x1b[40m"
var BgRed = "\x1b[41m"
var BgGreen = "\x1b[42m"
var BgYellow = "\x1b[43m"
var BgBlue = "\x1b[44m"
var BgMagenta = "\x1b[45m"
var BgCyan = "\x1b[46m"
var BgWhite = "\x1b[47m"


var MESSAGE = Bright + FgRed //41-37
var COMMAND = Bright + BgCyan //46-37
var TIME = Bright + FgYellow //33-37
var GUILD = Bright + FgGreen //32-37
var CHANNEL = Bright + FgBlue //34-37
var USER = Bright + FgMagenta //35-37
var COMMANDNAME = Bright + FgCyan //46-37
var RESET = "\x1b[0m" 


async function mesaj_log(message, client, timeout_random){
    var şuan = new Date(Date.now()).toLocaleTimeString("tr-TR")
    var tür = ""
    if (message.author.id === client.user.id){
        tür = COMMAND + "[KOMUT-CEVAP]" + RESET
    } 
    else if (message.attachments.size) { // direk message.attachments yazınca olmuyordu
        tür = MESSAGE + "[EKLİ MESAJ]" + RESET
    } else {
        tür = MESSAGE + "[MESAJ]" + RESET
    }
    console.log(`${tür} ${TIME}${şuan} ${GUILD}${message.guild} ${CHANNEL}#${message.channel.name} ${USER}${message.author.username}#${message.author.discriminator}: ${MESSAGE}${message.content} (${timeout_random}/100)${RESET}`)
}

async function komut_log(interaction){
    var şuan = new Date(Date.now()).toLocaleTimeString("tr-TR")
    var çıkış = `${COMMAND}[KOMUT]${RESET} ${TIME}${şuan} ${GUILD}${interaction.guild} ${CHANNEL}#${interaction.channel.name} ${USER}${interaction.user.username}: ${COMMANDNAME}${interaction.commandName} ${RESET}`
    var args = ""
    interaction.options.data.forEach(option =>{
        args += `[${option.name}: ${option.value}] `
    })
    çıkış += args
    console.log(çıkış)
}
async function düzenle_log(oldMessage, newMessage, client){
    var tür = ""
    var şuan = new Date(Date.now()).toLocaleTimeString("tr-TR")
    if (newMessage.embeds.length !== 0){return}
    if (oldMessage.author.username === client.user.username){
        tür = COMMAND + "[KOMUT-CEVAP-DÜZENLEME]" + RESET
    }
    else {
        tür = MESSAGE + "[MESAJ-DÜZENLEME]" + RESET
    }
    console.log(`${tür} ${TIME}${şuan} ${GUILD}${oldMessage.guild} ${CHANNEL}#${oldMessage.channel.name} ${USER}${oldMessage.author.username}#${oldMessage.author.discriminator}: ${MESSAGE}${oldMessage.content} -> ${newMessage.content} ${RESET}`)
}
module.exports = {
    mesaj_log , komut_log , düzenle_log
}