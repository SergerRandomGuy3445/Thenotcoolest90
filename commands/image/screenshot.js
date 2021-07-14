const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const url = require("url");
const cooldown = new Set();
module.exports = {
    name: 'screensot',
    description: 'Search screenshot of Website. This May take up 5-10 seconds to load :D',
  guildOnly: true,
    catergory: 'image',
    aliases: ['screen', 'scrn','scrnshot'],
    usage: `>screenshot <websiteurl>`,
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

        const user = message.author.tag
         const urls = args[0];
         if (!urls)
           return message.channel
             .send(`\`\`\`\n${user},Provide a link plz\n\`\`\``)
             
         if (urls.length < 8)
           return message
             .reply(
               "<> https is too short to reach - 8 limit"
             )
             .then(m => m.delete({ timeout: 9000 }).catch(e => {}));
     
         const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
         try {
           const { body } = await fetch(
             `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
           );
     
           return message.channel.send(
             
             {
               files: [{ attachment: body, name: "Screenshot.png" }]
             }
           );
         } catch (err) {
           if (err.status === 404)
             return message.channel
               .send("Could not find any results. Invalid URL?")
               .then(m => m.delete({ timeout: 14000 }).catch(e => {}));
           return message
             .reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`)
             
         };
     }
    }