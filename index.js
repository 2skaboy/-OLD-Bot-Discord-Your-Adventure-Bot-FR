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
    bot.user.setActivity('^^help');


})
        bot.login("NzI3ODA1ODgwMDg2NTYwODQw.XvxMdg.xX-27MnfKGHyBxsZlVccft3qxRU")

        bot.on('message', message => {

            const info_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727222355914391632/3094891.png')
            .setTitle('Aide :')
            .setDescription('**Je suis un Bot qui fait vivre une histoire aux utilisateur du serveur**') 
            .addField('Voici mes commandes :','```--jungle (en dev)```\n```--military (en dev)```')
            .addField('Utilisation :','Ces commandes sont pour commencer différentes aventures, à chaque étape de l\'aventure, ton choix sera déscisif,\nTu devras choisir le destin de ton aventurier\nen cochant l\'émoji qui corespond à ton choix !\nSur ce, Bon Jeu et Bonne Chance !')
            .setTimestamp()
            .setFooter('Développed by Gymp_MC (Gymp_#4272)')

            const jungle_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727831178178199563/3157508.png')
            .setTitle('Aventure dans la jungle :')
            .addField('Contexte :', 'Tu te retrouves au milieu de la jungle amazonienne')
            .addField('Matériaux :', 'Couteau, sac de couchage')
            .addField('But :','Survivre 10 jours seul au milieu de la jungle')
            .addField('Alors, partant ?','Coche ✅ pour commencer l\'aventure !')
            .setTimestamp()
            .setFooter('Développed by Gymp_MC (Gymp_#4272)')

            const jungle_part1_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727943621353144350/2688046.png')
            .setTitle('Partie 1 :')
            .addField('L\'aventure commence !', 'Tu es en plein coeur de la jungle, il faut que tu fasses\nquelque chose, c\'est dangereux de rester au milieu des bêtes\nsauvages et des insectes les plus bizzares de la planète 😨')
            .addField('Matériaux :', 'Couteau, sac de couchage')
            .addField('Ton Choix :','Grimper en haut d\'un arbre pour voir les alentours 🌴\n   **ou**   \nAvancer et trouver un endroit pour construire une cabane 🪓')
            .addField('Choisis !','🌴 pour grimper à un arbre\n🪓 pour avancer et trouver l\'endroit parfait pour t\'installer')
            .setTimestamp()
            .setFooter('Développed by Gymp_MC (Gymp_#4272)')

            const jungle_cabaneorfire_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727955942741639268/2856209.png')
            .setTitle('Partie 2 :')
            .addField('Action :','Tu as parcouru seulement 2 kilomètres mais tu es déjà fatigué et il va bientôt faire nuit\nTu fais un peu le tour et tu trouves un joli coin,\nmais, tu es à bout de force, tu n\'a que 2 solutions')
            .addField('Matériaux :', 'Couteau, sac de couchage')
            .addField('Ton Choix :','Trouver une pierre et un silex pour faire un feu 🔥\n   **ou**   \nCouper du bois et construire une cabane 🏠')
            .addField('Choisis !','🔥 pour le feu\n🏠 pour la cabane')
            .setTimestamp()
            .setFooter('Développed by Gymp_MC (Gymp_#4272)')

            const jungle_arbre_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727955942741639268/2856209.png')
            .setTitle('Partie 2 :')
            .addField('Action :','Tu grimpes en haut de l\'arbre en 25 minutes, tu regardes un peu les alentours et tu ne vois que des arbres à pertes de vue,\nAh non ! Tu vois une sorte de temple perdu ! Tu as deux choix !')
            .addField('Matériaux :', 'Couteau, sac de couchage')
            .addField('Ton Choix :','Aller voir le temple perdu 🛕 ou avancer dans une autre direction 🚶‍♂️')
            .addField('Choisis !','🛕 pour le temple\n🚶‍♂️ pour continuer à marcher')
            .setTimestamp()
            .setFooter('Développed by Gymp_MC (Gymp_#4272)')

            const jungle_temple_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727955942741639268/2856209.png')
            .setTitle('Partie 3 :')
            .addField('Action :','Après quelques minutes de marche, tu arrive au temple, il n\'y a que des débris de vielles briques et des peintures déformées par le temps, La nuit tombe et tu décide de t\'installer ici, à l\'abri, mais tu dois faire un choix car tu es trop fatigué et la nuit tombe !')
            .addField('Matériaux :', 'Couteau, sac de couchage')
            .addField('Ton Choix :','Aller chasser 🍖, ou faire un feu pour se garder au chaud et éloigner les bêtes sauvages 🔥')
            .addField('Choisis !','🍖 pour la chasse\n🔥 pour le feu')
            .setTimestamp()
            .setFooter('Développed by Gymp_MC (Gymp_#4272)')

            const jungle_marche_embed = new Discord.MessageEmbed()
            .setColor('13ff00')
            .setThumbnail('https://cdn.discordapp.com/attachments/727222299551465554/727955942741639268/2856209.png')
            .setTitle('Partie 3 :')
            .addField('Action :','Tu marches pendant une heure mais la nuit tombe ! ')
            .addField('Matériaux :', 'Couteau, sac de couchage')
            .addField('Ton Choix :','Aller chasser 🍖, ou faire un feu pour se garder au chaud et éloigner les bêtes sauvages 🔥')
            .addField('Choisis !','🍖 pour la chasse\n🔥 pour le feu')
            .setTimestamp()
            .setFooter('Développed by Gymp_MC (Gymp_#4272)')

            if(message.content === "^^help"){
                console.log(user.tag +' => ^^help')
                message.channel.send(info_embed)
                } 
            if(message.content === "^^jungle"){
                console.log(user.tag +' => Jungle')
                message.channel.send(jungle_embed)
                    .then(message =>{
                        message.react('✅')
                        bot.on('messageReactionAdd', (reaction, user) =>{
                            if (reaction.emoji.name === '✅' && user.id !== bot.user.id){
                                console.log(user.tag + ' => Jungle => Part 1')
                                message.channel.send(jungle_part1_embed)
                                    .then(message =>{
                                        message.react('🌴')
                                        message.react('🪓')
                                        bot.on('messageReactionAdd', (reaction, user) =>{
                                            if (reaction.emoji.name === '🌴' && user.id !== bot.user.id){
                                                console.log(user.tag + ' => Jungle => Part1 => Part 1,1')
                                                message.channel.send(jungle_arbre_embed)
                                                    .then(message =>{
                                                        message.react('🛕')
                                                        message.react('🚶‍♂️')
                                                        if(reaction.emoji.name === '🛕' && user.id !== bot.user.id){
                                                            console.log(user.tag + ' => Jungle => Part1 => Part1,1 => Temple Abandonné')
                                                            message.channel.send(jungle_temple_embed)
                                                                .then(message =>{
                                                                    message.react('🍖')
                                                                    message.react('🔥')
                                                                    if(reaction.emoji.name === '🔥' && user.id !== bot.user.id){
                                                                        console.log(user.tag + ' => Jungle => Part1 => Part1,1 => Temple Abandonné => Feu')
                                                                        message.channel.send()
                                                                            .then(message =>{
                                                                                
                                                                            })
                                                                        if(reaction.emoji.name === '' && user.id !== bot.user.id){

                                                                        }
                                                                    }
                                                                    if(reaction.emoji.name === '🍖' && user.id !== bot.user.id){
                                                                        console.log(user.tag + ' => Jungle => Part1 => Part1,1 => Temple Abandonné => Chasse')
                                                                        message.channel.send()
                                                                        if(reaction.emoji.name === '' && user.id !== bot.user.id){

                                                                        }
                                                                    }    
                                                                })
                                                        }
                                                        if(reaction.emoji.name === '🚶‍♂️' && user.id !== bot.user.id){
                                                            console.log(user.tag + ' => Jungle => Part1 => Part1,1 => Marche')
                                                            message.channel.send()
                                                        }
                                                    })
                                            }
                                            if(reaction.emoji.name === '🪓' && user.id !== bot.user.id){
                                                console.log(user.tag + ' => Jungle => Part1 => Part 1,1')
                                                message.channel.send(jungle_cabaneorfire_embed)
                                                    .then(message =>{
                                                        message.react('🔥')
                                                        message.react('🏠')
                                                        if(reaction.emoji.name === '🔥' && user.id !== bot.user.id){
                                                            console.log(user.tag + ' => Jungle => Part1 => Part1,2 => Campfire')
                                                            message.channel.send()
                                                        }
                                                        if(reaction.emoji.name === '🏠' && user.id !== bot.user.id){
                                                            console.log(user.tag + ' => Jungle => Part1 => Part1,2 => Cabane')
                                                            message.channel.send()
                                                        }
                                                    })
                                            }
                                        })
                                    })
                            }
                        })
                    })
            }            
        })