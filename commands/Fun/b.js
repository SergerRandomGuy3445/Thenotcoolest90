const fetch = require('node-fetch');
const { Message, MessageAttachment } = require("discord.js");
const Discord = require("discord.js");
const cooldown = new Set();
module.exports = {
    name: 'sudo',
    description: 'idk whats this',
  guildOnly: true,
    catergory: 'fun',
    usage: `+sudo <message>`,
    cooldown: 5,
    run: async (client, message, args) => {
        if (cooldown.has(message.author.id)) {
            let cooldownemb = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
            .setDescription(`You need to wait 15 seconds!`)
            .setColor(`RED`)
            .setFooter(`WAIT!`)
            return message.channel.send(cooldownemb).then(message => {
             message.delete(15000) 
            })
            
            }
            cooldown.add(message.author.id);
        
            setTimeout(() => {
                cooldown.delete(message.author.id);
            }, 15000);
let = message.content.split(" ").slice(1)

if (!args[1]) return message.reply('Please provide a message to send')
  const member = message.mentions.members.first()
if (!member) return message.reply('Please tag a user')
message.channel.createWebhook(member.user.username, {
avatar: member.user.displayAvatarURL({dynamic: true})
}).then(webhook => {
webhook.send(args.slice(1).join(' '))
setTimeout(() => {
   webhook.delete()        
}, 3000)
})
}
}