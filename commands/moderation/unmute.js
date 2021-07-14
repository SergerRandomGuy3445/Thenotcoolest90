const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send({
            embed: {
                color: 0x3cff00,
                description: `Member Not Found! Please specify a member.`
            }
        })

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)
        return message.channel.send({
            embed: {
                color: 0x3cff00,
                description: `${Member.displayName} is now unmuted`
            }
        })
        //message.channel.send(`${Member.displayName} is now unmuted`)
    }
    }