var {mesaj_log} = require("./log_messages")
var { Modal, TextInputComponent, showModal } = require("discord-modals")
var {MessageActionRow, MessageButton, MessageSelectMenu} = require("discord.js")
var {registerCommands} = require("./deploy-commands.js")
var {clientId} = require("../HBB.json")
const fs = require("fs")

var burak_insults_file = fs.readFileSync("/Users/thene/Desktop/Masanın Üstü/programlama/JS/BIFS/fonksiyonlar/insults.txt", "utf-8")
var burak_insults = burak_insults_file.split("\n")

var nisa_file = fs.readFileSync("/Users/thene/Desktop/Masanın Üstü/programlama/JS/BIFS/fonksiyonlar/insults_ayberk.txt", "utf-8")
var nisa = nisa_file.split("\n")

var wa_file = fs.readFileSync("/Users/thene/Desktop/Masanın Üstü/programlama/JS/BIFS/fonksiyonlar/who_asked.txt", "utf-8")
var wa = wa_file.split("\n")

var burak_insult_rate = 9
var ayberk_insult_rate = 2

async function handle_message(message, client, debug){
    var msg = message.content
    if (msg.startsWith("!")){
        var command = msg.split(" ")[0]
        var variable = msg.split(" ")[1]
        if (command === "!set_burak"){
            if (message.author.id === "721832519338819616" || message.author.id === "698618627708026940"){
                burak_insult_rate = parseInt(variable)
                return message.channel.send(`Response rate for burak changed to ${variable}%`)
                
            }
            else {
                return message.channel.send("lmao no")
            }
        }
        if (command === "!set_ayberk"){
            if (message.author.id === "721832519338819616" || message.author.id === "403202735350218752"){
                ayberk_insult_rate = parseInt(variable)
                return message.channel.send(`Response rate for ayberk changed to ${variable}%`)
                
            }
            else {
                return message.channel.send("lmao no")
            }
        }
    }



    // if (String(message.content).includes("who asked")){
    //     var response = wa[Math.floor(Math.random() * wa.length)];
    //     message.channel.send(response)
    // }

    if (message.author.id === "403202735350218752"){
        // if (message.author.id === "721832519338819616"){
            var random  = Math.floor(Math.random() * 100);
        var random_message = burak_insults[Math.floor(Math.random() * burak_insults.length)]
        console.log(`\x1b[1m\x1b[32m[BURAK-INSULT]\x1b[0m Rolled ${random}/100 (<= ${burak_insult_rate} for reply)`)
        if (random <= burak_insult_rate) {
            message.channel.send(random_message)
        }
    }
    if (message.author.id === "698618627708026940"){
        var random  = Math.floor(Math.random() * 100);
        var random_message = nisa[Math.floor(Math.random() * nisa.length)]
        console.log(`\x1b[1m\x1b[32m[AYBERK-INSULT]\x1b[0m Rolled ${random}/100 (<= ${ayberk_insult_rate} for reply)`)
        if (random <= ayberk_insult_rate) {
            message.channel.send(random_message)
        }
    }
    var timeout_random = Math.floor(Math.random() * 100)
    if (timeout_random === 31 && message.author.id !== "980885595545018369"){
        console.log(`\x1b[1m\x1b[32m[RANDOM-TIMEOUTS]\x1b[0m ${message.author.nickname} Rolled 31`)
        message.channel.send(`<@${message.author.id}> rolled 31/100 and is timed out for 10 seconds.`)
        var member2 = message.member
        member2.timeout(10000, "lmao")
    }
    mesaj_log(message, client, timeout_random)
}

module.exports = {handle_message}