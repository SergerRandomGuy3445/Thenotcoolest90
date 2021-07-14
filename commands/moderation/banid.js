const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'banid',
    description: 'Ban a user using id',
  guildOnly: true,
    catergory: 'moderation',
    usage: `+banid <USER_ID>`,
    cooldown: 5,
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBER')) return msg.reply("You dont have permission!")
let  = message.content.split(" ").slice(1);
const id = args[0];
message.guild.members.ban(id);
return message.channel.send({
    embed: {
        color: 0x3cff00,
        description: `**User has been banned by using id!**`
    }
})
        }
    }