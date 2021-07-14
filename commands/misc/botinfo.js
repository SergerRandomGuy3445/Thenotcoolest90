const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const cooldown = new Set();
const fetch = require('node-fetch')
module.exports = {
    name: 'botinfo',
    description: 'ok',
  guildOnly: true,
    catergory: 'image',
run: async (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('FrogBot Infomation')
.setTitle('Bot Information that give the info of this bot')
.setDescription('(Discord Support Server)[https://discord.gg/ctRnePw5qV] (Invite My Bot)[https://top.gg/bot/847048040330428436]')
.addFields(
{ name: 'Servers', value: `${client.guild.cache.get}` },
{ name: '\u200B', value: '\u200B' },
{ name: 'Members', value: `${client.member.cache.get}`, inline: true },
{ name: 'Contributors', value: 'Call and people in Mongo Support Server!', inline: true },
)
.setTimestamp()
.setFooter(`Requested by ${member.author.username}`);
message.channel.send(embed);
}
}
