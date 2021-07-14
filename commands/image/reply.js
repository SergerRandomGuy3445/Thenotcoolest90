const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const canvacord = require('canvacord');
module.exports = {
    name: 'reply',
    description: 'Search YT videos or Channels bu using >yt <name>',
  guildOnly: true,
    catergory: 'image',
    aliases: ['rply'],
    usage: `>reply @user | @anotherUser | message | message`,
    cooldown: 5,
    run: async (client, message, args) => {
        const replyArgs = message.content.split(" ").slice(1).join(" ").split("\n").join("").split(" | ");
        const member1 = message.mentions.members.first(5)[0] || message.guild.members.cache.get(replyArgs[0]);
          if(!member1) return message.channel.send("Please provide the first member!. Format = `+reply @USER1 | @USER2 | I am epic | Facts`")
        const member2 = message.mentions.members.first(5)[1] || message.guild.members.cache.get(replyArgs[1]);
          if(!member2) return message.channel.send("Please provide the second member!")
          const msg1 = replyArgs[2];
          if(!msg1) return message.channel.send("Please provide the main message!")
          const msg2 = replyArgs[3]
          if(!msg2) return message.channel.send("Please provide the reply message!")
  const img = member1.user.displayAvatarURL({ format: 'png' })
  const img2 = member2.user.displayAvatarURL({ format: 'png' })
  let canvasReply = await canvacord.Canvas.reply({
       avatar1: img,
       avatar2: img2,
       user1: member1.user.username,
       user2: member2.user.username,
       hex1: member1.displayHexColor,
       hex2: member2.displayHexColor,
       mainText: msg1,
       replyText: msg2
  }) 
  const replyimg = new Discord.MessageAttachment(canvasReply, 'replyimage.png')
  return message.channel.send(replyimg)
  }
}  