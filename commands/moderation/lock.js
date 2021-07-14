const { Client, Message, Util } = require('discord.js');

module.exports = {
    name: 'lock',
    description: 'Lock the channel for those who dont have any ADMINISTRATOR ROLE. only mod or admin can use this command',
    category: 'moderation',
    aliases: ['channelock', 'chnnlock', 'channelck', 'lockdown'],
    run: async (client, message, args) => {
if (!client.lockit) client.lockit = [];
if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

message.channel.createOverwrite(message.guild.id, {
    SEND_MESSAGES: false
  })
    message.channel.send(`**${message.author.username}** just locked the channel down.`);
}
}