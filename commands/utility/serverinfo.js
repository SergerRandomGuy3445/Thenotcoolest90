const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
    name: 'serverinfo',
    description: 'Let You know what is the server info!',
    aliases: ['server', 'server-info'],
  guildOnly: true,
    catergory: 'utility',
    usage: `>serverinfo`,
    cooldown: 5,
    run: async (client, message, args) => {
const embed = new MessageEmbed()
.setTimestamp()
.setTitle("**Server Information**")
.setColor('BLACK')
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.addField(` Name of server:`, message.guild.name, true)
.addField(` ID of server`, message.guild.id, true)
.addField(` Owner of this server is`, message.guild.owner, true)  
.addField(` Region of this server is`, message.guild.region, true)
.addField(` No. of Members`, message.guild.members.cache.size, true)
.addField(` No. of Bots:`, message.guild.members.cache.filter(member => member.user.bot).size, true)
.addField(` Emojis:`, message.guild.emojis.cache.size, true)
.addField(` Animated Emoji\'s:`,message.guild.emojis.cache.filter(emoji => emoji.animated).size,true )
.addField(` Total Text Channels:`, message.guild.channels.cache.filter(channel => channel.type === 'text').size, true)
.addField(` Total Voice Channels:`, message.guild.channels.cache.filter(channel => channel.type === 'voice').size, true)
.addField(` Total Amount of Roles:`, message.guild.roles.cache.size, true)
.addField(` ServerBoost:`, message.guild.premiumSubscriptionCount, true)
.addField(` Verification Level:`, message.guild.verificationLevel, true)
.setAuthor(`${message.guild.name}`)
message.channel.send(embed);
}
}