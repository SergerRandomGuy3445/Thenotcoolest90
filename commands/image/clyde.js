const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const cooldown = new Set();
const fetch = require('node-fetch')
module.exports = {
    name: 'clyde',
    description: 'clyde custom epic text',
  guildOnly: true,
    catergory: 'image',
    usage: `>clyde <text>`,
    cooldown: 5,
run: async (client, message, args) => {
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 10 seconds!`)
    .setColor(`RED`)
    .setFooter(`WAIT!`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(10000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
let text = args.join(" ");

if (!text) {
    return message.channel.send("**Enter Text**");
}

let m = await message.channel.send("**Please Wait...**");
try {
    let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
    let json = await res.json();
    let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
    message.channel.send(attachment);
    m.delete({ timeout: 5000 });
} catch (e) {
    m.edit(e.message);
}
}
}