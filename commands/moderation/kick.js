const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'Kick a user from the server by using mentioning them!',
  guildOnly: true,
    aliases: ['yeet'],
    catergory: 'moderation',
    usage: `+kick <USER_MENTION>`,
    cooldown: 5,
    run: async (bot, message, args) => {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
            if (!member)  return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `Mention The User To Kicked!`
                }
            })
            else {
            member.kick().then(mem => {
                return message.channel.send({
                    embed: {
                        color: 0x4D5E94,
                        description: `${user.tag} Has been Kicked!`
                    }
                })
            })
            }
            } else {
            message.reply("You don't have the permission to do that...")
            }

            }
        }
       