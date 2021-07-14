const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'warn',
    description: 'warn a user from the server by using mentioning them!',
  guildOnly: true,
    aliases: ['warn', 'punish'],
    catergory: 'moderation',
    usage: `+warn <USER_MENTION>`,
    cooldown: 5,
    run: async (bot, message, args) => {
if (message.member.hasPermission("KICK_MEMBERS")) {
    const reason = message.content.slice("".length).trim().split(/ +/);
    const member = message.mentions.members.first() 
   reason.shift().toLowerCase().split(" ")[1]
   let warned = message.mentions.members.first();
   
    if (!warned)
    message.channel.send(
    "Please mention someone whom you want to warn using **>warn [member], [reason]**!"
    );
   if(!reason[1]) return message.channel.send(':x: Please insert a reason also :x:')
    else {
   
    let embed = new Discord.MessageEmbed()
    .setTitle("Moderation")
    .setDescription(` ${warned} **was warned by** **${message.author}.** (**Reason:** ${reason.slice(1).join(" ")})`)
    
    .setColor("BLACK")
    .setFooter(`Moderator: ${message.author.tag}`)
    .setTimestamp()
    
    message.channel.send(embed)
    }
          }
   }
}
