const Discord = require ('discord.js');
const bot = new Discord.Client();
let embed = new Discord.MessageEmbed();
const fs = require ('fs');
bot.commands = new Discord.Collection();

//instance
bot.on('ready', function () {
    console.log("/////////////////////////////");
    console.log("[!] Connexion effectué [!]");
    console.log("/////////////////////////////");
    bot.user.setActivity('--help');


})
        bot.login("my token :)")

        bot.on('message', message => {

            const info_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727222355914391632/3094891.png').setTitle('Aide :')
            .setDescription('Je suis un Bot qui fait vivre une histoire aux utilisateur du serveur') 
            .addField('Mes commandes sont :')
            .addField('```--jungle```')
            .addField('```--military```')
            .addField('Ces commandes sont pour commencer différentes aventures, bon jeu !')
            .setTimestamp()
            .setFooter('Développé par Gymp_MC (Gymp_#4272)')
        

            if(message.content === "--help"){
                message.channel.send(info_embed)
                } 
            })