const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const canvacord = require("canvacord");
const cooldown = new Set();
module.exports = {
    name: 'illegal',
    description: 'HMM????',
  guildOnly: true,
    catergory: 'image',
    aliases: ['trumpillegal'],
    usage: `>illegal <message>`,
    run: async (client, message, args) => {
        if (cooldown.has(message.author.id)) {
            let cooldownemb = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
            .setDescription(`You need to wait 10 seconds!`)
            .setColor(`RED`)
            .setFooter(`WAIT!`)
            return message.channel.send(cooldownemb).then(message => {
             message.delete(10000) 
            })
            
            }
            cooldown.add(message.author.id);
        
            setTimeout(() => {
                cooldown.delete(message.author.id);
            }, 10000);
            
        
            if (message.channel.type === "dm") return;
            let meow = message.content.split(" ").slice(1);
            let args1 = meow.join(' ');
            let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
            if (!args1) {
                return message.reply('You need to provide some text for making it illegal');
            }
            if (meow.length > 1) {
                return message.reply('Only one thing can be made illegal at a time');
            }
            const emb = new Discord.MessageEmbed();
            emb.setAuthor("Trump has now made " + meow + " illegal!", "http://blog.adsy.me/wp-content/uploads/2016/11/angry-side-face-trump-transparent.png");
            emb.setImage(illegal);
            message.channel.send({
                embed: emb
            })
}
}