const Discord = require ('discord.js')
const bot = new Discord.Client()
let embed = new Discord.RichEmbed()
const fs = require ('fs')
bot.commands = new Discord.Collection()

//instance
bot.on('ready', function () {
    console.log("/////////////////////////////");
    console.log("[!] Connexion effectué [!]");
    console.log("/////////////////////////////");
    bot.user.setActivity('*help');


})
        bot.login("")

        bot.on('message', async message => {
            if(message.content === "--help"){
                let info_embed = new Discord.RichEmbed()
                .setColor("13ff00")
                .setThumbnail("")
                .setTitle("Aide :")
                .setDescription("") 
                .setTimestamp()
                .setFooter("Développé par Gymp_MC (Gymp_#4272)")
                .addField("")
                message.channel.send(info_embed)

            } 
        })