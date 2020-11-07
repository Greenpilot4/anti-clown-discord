const fs = require("fs");
const Discord = require("discord.js");
const {
    prefix,
    token,
    rmessage
} = require("./config.json");

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

client.on("messageReactionAdd", async (reaction, user) => {
   
   if (reaction.emoji.name == "🤡") {
       reaction.remove(user)
   }
}); 
client.login(token);