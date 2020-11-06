const fs = require("fs");
const Discord = require("discord.js");
const prefix = process.env.prefix
const token = process.env.token
const rmessage = process.env.token

const client = new Discord.Client();

client.once("ready", () => {
    console.log(`${client.user.username} Ready!`);
});

client.on("message", async (message) => {
    if (message.author.bot) return;

    try {
        if (message.content.includes("🤡")) {
            message.delete()
            message.reply(rmessage)
                .then(msg => {
                msg.delete({ timeout: 3000 });
            })
        }
            
    } catch (error) {
        console.error(error);
        message.reply('Something Went Wrong!');
    }
});

client.login(token);
