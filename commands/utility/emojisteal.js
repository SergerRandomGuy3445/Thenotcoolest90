const { Client, Message, Util } = require('discord.js');

module.exports = {
    name: 'esteal',
    category: 'utility',
    aliases: ['emojisteal', 'steal'],
    run: async (client, message, args) => {
        if(message.member.hasPermission("MANAGE_GUILD")) {
        if (!args.length)
            return message.reply(
                '<a:X_:864424473130434570> | Please specify an emoji'
            );

        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if (parsedEmoji.id) {
                const extension = parsedEmoji.animated ? '.gif' : '.png';
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id +
                    extension}`;
                message.guild.emojis
                    .create(url, parsedEmoji.name)
                    .then(emoji =>
                        message.reply(
                            `<:okMAN:864424697591496704> | Added \`${emoji.url}\``
                        )
                    );
            }
        }
    } else {
        message.reply('you dont have permission lol')
    }
}
}; 