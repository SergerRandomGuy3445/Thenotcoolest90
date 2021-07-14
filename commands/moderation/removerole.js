const { Client, Message, Util } = require('discord.js');

module.exports = {
    name: 'removerole',
    description: 'Remove to a member. Does not affect owner or higher Role. CAPS SENSITIVE.',
    category: 'moderation',
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES'))
        return message.channel.send("Insufficient permissions (Requires permission `Manage roles`)").then(msg => {
    msg.delete({ timeout: 30000 })
})
    const member = message.mentions.members.first()
    if (!member)
        return message.channel.send("You have not mentioned a user").then(msg => {
    msg.delete({ timeout: 30000 })
})
    const remove = args.slice(1).join(" ")
    if (!remove)
        return message.channel.send("You have not specified a role").then(msg => {
    msg.delete({ timeout: 30000 })
})
    const roleRemove = message.guild.roles.cache.find(role => role.name === remove)
    if (!roleRemove)
        return message.channel.send("This role does not exist. Make sure Bots Not BOTS. This Command Are caps sensitive!").then(msg => {
    msg.delete({ timeout: 30000 })
})
    if (!member.roles.cache.get(roleRemove.id))
        return message.channel.send(`This user does not have the ${remove} role`).then(msg => {
    msg.delete({ timeout: 30000 })
})
    member.roles.remove(roleRemove.id).then((member) => {
        message.channel.send(`${remove} removed from ${member.displayName}`)
    })
}
}