const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'Ban a user from the server by using mentioning them!',
  guildOnly: true,
    aliases: ['ban', 'banish'],
    catergory: 'moderation',
    usage: `+ban <USER_MENTION>`,
    cooldown: 5,
    run: async (bot, message, args) => {

            if(message.member.hasPermission("BAN_MEMBERS")) {
             const user = message.mentions.users.first();
             
             if (user) {
             
             const member = message.guild.member(user);
            
             if (member) {
            
             member
             .ban({
             reason: `Banned by ${message.author.username}`,
             })
             .then(() => {
             // We let the message author know we were able to ban the person
             return message.channel.send({
                embed: {
                    color: 0x6af719, //6af719
                    description: `Successfully ban ${user.tag}`
                }
            })
             })
             .catch(err => {
            
                return message.channel.send({
                    embed: {
                        color: 0xf22929, //6af719
                        description: `I was Unable to ban the user!`
                    }
                })
             
             console.error(err);
             });
             } else {
             
                return message.channel.send({
                    embed: {
                        color: 0xdff51b, //f22929
                        description: `The User isnt in this Guild`
                    }
                })
             }
             } else {
             
                return message.channel.send({
                    embed: {
                        color: 0xc90000,
                        description: `You Didn't mention the User to BAN!`
                    }
                })
             }
             } else {
                 message.channel.send('You dont have permission to ban!')
             }
            }
        }

