const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const canvacord = require('canvacord');
module.exports = {
    name: 'comment',
    description: 'YT COMMENT :)',
  guildOnly: true,
    catergory: 'image',
    aliases: ['ytcomment', 'youtubecomment,'],
    usage: `>reply @user | @anotherUser | message | message`,
    cooldown: 5,
    run: async (client, message, args) => {
let yee = false
message.channel.startTyping()
    let avatar = message.author.displayAvatarURL({dynamic : false, format : 'png'});
    let image = await canvacord.Canvas.youtube({
      username : message.author.username,
      content : args.join(' '),
      avatar: avatar
    }).catch((err) => { 
      yee = true
      
      message.channel.stopTyping()
      return message.channel.send(err.toString())
    });
    let msg = args.join("");
    
    if(!yee) {
      let attachment = new Discord.MessageAttachment(image, "comment.png");
      message.channel.send({embed : {description : "commenting"}}).then((msg) => {
        setTimeout(function() {
          msg.delete().then((msg) => {
            message.channel.send(attachment)
            
          })
        }, 5000)
      });
      message.channel.stopTyping()
    }
  }
}