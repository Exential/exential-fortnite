const Discord = require('discord.js');

exports.run = (bot, message, args, tools) => {

    var help_embed = new Discord.RichEmbed()
        .setColor("#D9F200")
        .addField("Commandes du bot !", "-/help : Affiche les commande")
        .addField("test voila quoi krush", "C'est un bg")
        .setFooter("C'est tout")
    message.channel.sendEmbed(help_embed);
    console.log("test");

}
