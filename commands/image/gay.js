const img = require("image-generation-for-discord");
const Discord = require("discord.js")
const DIG = require("discord-image-generation");
module.exports = {
  name: 'gay',
  category: "image",

  run: async(client, message, args) => {

 let user = message.mentions.users.first() || message.author;
      
   if(user.id ===  "729561594865909811") return message.reply("<:hehe:681813258570563594> He is not but maybe you?");

      let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
        // Make the image
        let img = await new DIG.Gay().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
    }

}