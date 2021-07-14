const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send({
            embed: {
                color: 0x3cff00,
                description: `Member Not Found!`
            }
        })
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send({
                    embed: {
                        color: 0x3cff00,
                        description: `Muted is not found. Attempting to Create Mute Role!`
                    }
                })

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                ({
                    embed: {
                        color: 0x3cff00,
                        description: `Mute Role Has been succesfully created!`
                    }
                })
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send({
            embed: {
                color: 0x3cff00,
                description: `${Member.displayName} has already been Muted!`
            }
        })
        await Member.roles.add(role2)
        return message.channel.send({
            embed: {
                color: 0x3cff00,
                description: `${Member.displayName} is now muted`
            }
        })
    }
}