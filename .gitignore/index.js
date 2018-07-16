const Discord = require('discord.js');
var bot = new Discord.Client();
bot.login(process.env.TOKEN);
var prefix = ("!")

const ServerStats = {
    guildID: '434850583900454921',
    memberCountID: '468499238783942656',
    botCountID: '468499296832978945'
};





bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🌺accueil🌺").send(`Hey ${member}, Bienvenue chez **Exential - Fortnite communautaire** ! \n \nPour avoir ton grade, rend toi dans le channel ` + bot.channels.get("467739830416048129"));
    if (member.guild.id !== ServerStats.guildID) return;
    bot.channels.get(ServerStats.memberCountID).setName(`Membres : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(ServerStats.botCountID).setName(`Bot : ${member.guild.members.filter(m => m.user.bot).size}`);
});

bot.on("guildMemberRemove", member => {
    if (member.guild.id !== ServerStats.guildID) return;
    bot.channels.get(ServerStats.memberCountID).setName(`Membres : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(ServerStats.botCountID).setName(`Bot : ${member.guild.members.filter(m => m.user.bot).size}`);

});

bot.on('message', message => {
    if (message.content === prefix + "salut"){
        random1()
        if (salut ==0){
            message.channel.send("Yooooooo");
            console.log(salut);
        }
        if (salut ==1){
            message.channel.send("Weshhh");
            console.log(salut);
        }
     
        if (salut ==2){
            message.channel.send("Bonsoir à tous les amiiiis pour ceux qui m’connaissent pas vos grands-mères les Bot qui mangent des saucisses !");
            console.log(salut);
    
        }
    }

    if (message.content === prefix + "scar"){
        random2()
        if (scar ==0){
            message.channel.send("Il te reste 2 coffres avant de trouver une scar");
            console.log(salut);
        }
        if (scar ==1){
            message.channel.send("Il te reste 3 coffres avant de trouver une scar");
            console.log(scar);
        }
     
        if (scar ==2){
            message.channel.send("Tu trouveras une scar dans ton prochain coffre");
            console.log(scar);
        }
    }

    if (message.content === prefix + "random"){
        random3()
        if (randume ==0){
            message.channel.send("La légende raconte que si tu spawn à Junk Junction tu feras un top1.");
            console.log(randume);
        }
        if (randume ==1){
            message.channel.send("La légende raconte que si tu spawn à Haunted Hills tu feras un top1.");
            console.log(randume);
        }
     
        if (randume ==2){
            message.channel.send("La légende raconte que si tu spawn à Snobby Shores tu feras un top1.");
            console.log(randume);
        }

        if (randume ==3){
            message.channel.send("La légende raconte que si tu spawn à Pleasant Park tu feras un top1.");
            console.log(randume);
        }

        if (randume ==4){
            message.channel.send("La légende raconte que si tu spawn à Tilted Towers tu feras un top1.");
            console.log(randume);
        }

        if (randume ==5){
            message.channel.send("La légende raconte que si tu spawn à Greasy Grove tu feras un top1.");
            console.log(randume);
        }

        if (randume ==6){
            message.channel.send("La légende raconte que si tu spawn à Shifty Shafts tu feras un top1.");
            console.log(randume);
        }

        if (randume ==7){
            message.channel.send("La légende raconte que si tu spawn à Flush Factory tu feras un top1.");
            console.log(randume);
        }

        if (randume ==8){
            message.channel.send("La légende raconte que si tu spawn à Lucky Landing tu feras un top1.");
            console.log(randume);
        }

        if (randume ==9){
            message.channel.send("La légende raconte que si tu spawn à Fatal Fields tu feras un top1.");
            console.log(randume);
        }

        if (randume ==10){
            message.channel.send("La légende raconte que si tu spawn à Dusty Divot tu feras un top1.");
            console.log(randume);
        }

        if (randume ==11){
            message.channel.send("La légende raconte que si tu spawn à Lazy Links tu feras un top1.");
            console.log(randume);
        }

        if (randume ==12){
            message.channel.send("La légende raconte que si tu spawn à Tomato Town tu feras un top1.");
            console.log(randume);
        }

        if (randume ==13){
            message.channel.send("La légende raconte que si tu spawn à Risky Reels tu feras un top1.");
            console.log(randume);
        }

        if (randume ==14){
            message.channel.send("La légende raconte que si tu spawn à Wailling Woods tu feras un top1.");
            console.log(randume);
        }

        if (randume ==15){
            message.channel.send("La légende raconte que si tu spawn à Lonely Lodge tu feras un top1.");
            console.log(randume);
        }

        if (randume ==16){
            message.channel.send("La légende raconte que si tu spawn à Retail Row tu feras un top1.");
            console.log(randume);
        }

        if (randume ==17){
            message.channel.send("La légende raconte que si tu spawn à Paradise Palms tu feras un top1.");
            console.log(randume);
        }

        if (randume ==18){
            message.channel.send("La légende raconte que si tu spawn à Salty Springs tu feras un top1.");
            console.log(randume);
        }

        if (randume ==19){
            message.channel.send("La légende raconte que si tu spawn à Loot Lake tu feras un top1.");
            console.log(randume);
        }

        if (randume ==20){
            message.channel.send("La légende raconte que si tu spawn au Stade tu feras un top1.");
            console.log(randume);
        }

        if (randume ==21){
            message.channel.send("La légende raconte que si tu spawn à Western City tu feras un top1.");
            console.log(randume);
        }

        if (randume ==22){
            message.channel.send("La légende raconte que si tu spawn au Terrain de Cross tu feras un top1.");
            console.log(randume);
        }

        if (randume ==23){
            message.channel.send("La légende raconte que si tu spawn au Conteneur tu feras un top1.");
            console.log(randume);
        }

        if (randume ==24){
            message.channel.send("La légende raconte que si tu spawn au Motel tu feras un top1.");
            console.log(randume);
        }

        if (randume ==25){
            message.channel.send("La légende raconte que si tu spawn à Viking Mountain tu feras un top1.");
            console.log(randume);
        }
    }
    
if (message.content.startsWith(prefix + "sondage")) {
    if (message.member.hasPermission("MANAGE_MESSAGES")){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField(thingToEcho, "Répondre avec :heavy_check_mark: ou :x:")
            .setColor("0xB40404")
            .setTimestamp()
        message.guild.channels.find("name", "💥sondages💥").sendEmbed(embed)
        .then(function (message) {
            message.react("✔")
            message.react("❌")
        }).catch(function(){
        });
    }else{
        return message.reply("Tu n'as pas la permission de créer un sondage.")
    }
}

if(message.content.startsWith(prefix + "clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");

    let args = message.content.split(" ").slice(1);

    if(!args[0]) return message.channel.send("Tu doit préciser un nombre de messages à supprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
        
    })
}

});

function random1(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    salut = Math.floor(Math.random() * (max - min +1)+ min);
}

function random2(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    scar = Math.floor(Math.random() * (max - min +1)+ min);
}


function random3(min, max){
    min = Math.ceil(0);
    max = Math.floor(25);
    randume = Math.floor(Math.random() * (max - min +1)+ min);
}
