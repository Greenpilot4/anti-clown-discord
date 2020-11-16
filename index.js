const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token, rmessage } = require("./config.json");

const log = require("./events/log.js");
const currentTime = require("./events/time.js");

client.once("ready", () => {
    log(currentTime() + " " + `${client.user.tag} online!`)
});

client.on("message", async(message) => {
    if (message.author.bot) return;

    if (message.content.includes("🤡")) {
        log(currentTime() + " " + message.author.tag + " sent a clown");
        message.delete()
        message.reply(rmessage)
            .then(msg => {
                msg.delete({ timeout: 3000 });
            })
    }

});

client.on("messageReactionAdd", async(reaction, user) => {

    if (reaction.emoji.name == "🤡") {
        log(currentTime() + " " + user.tag + " reacted with a clown");
        reaction.remove(user);
    }
});

client.login(token);
