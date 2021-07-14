const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'unban',
    description: 'Ban a user from the server by using mentioning them!',
  guildOnly: true,
    catergory: 'moderation',
    usage: `+unban <USER_ID>`,
    cooldown: 5,
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBER')) return msg.reply("You dont have permission!")
let  = message.content.split(" ").slice(1);
const id = args[0];
message.guild.members.unban(id);
return message.channel.send({
    embed: {
        color: 0x3cff00,
        description: `**User has been Unbanned!**`
    }
})
        }
    }
