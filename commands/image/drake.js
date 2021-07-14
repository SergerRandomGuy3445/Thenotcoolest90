const fetch = require('node-fetch');
const { Message, MessageAttachment } = require("discord.js");
const Discord = require("discord.js");
const cooldown = new Set();
module.exports = {
    name: 'drake',
    description: 'drake the meme',
  guildOnly: true,
    catergory: 'image',
    usage: `+drake <message> <another message>`,
    cooldown: 5,
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
        const userd = args[0]
        const user22 = args[1]
        const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/drake/?text1=${userd}&text2=${user22}`);
            let Image = await res.buffer();
            const cmm = new MessageAttachment(Image);
            message.channel.send(cmm);
}
}
