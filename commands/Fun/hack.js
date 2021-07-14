const { Client, Message, Util } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name: 'hack',
    category: 'fun',
    description: 'dont hack pls :(',
    run: async (client, message, args) => {
    const user = message.mentions.users.first();
      if(!user) return message.reply("YOU CANT JUST HACK YOURSELF LOL")
      message.channel.send("**[25%]** Finding IP ADDRESS..").then(m => {
      setTimeout(() => {
      m.edit("**[50%]** IP FOUND! Looking for email and password..").then(m2 => {
      setTimeout(() => {
      m2.edit(`**[75%]** DONE! email: ${user.username}@igogle.com | password: XjdhgikshGdk`).then(m3 => {
      setTimeout(() => {
      m3.edit("**[100%]** Deleting System32..").then(m4 => {
      setTimeout(() => {
      m4.edit(`**Done hacking** ${user}! all info was sent to The Goverment :sunglasses:.`)
      }, 5500);
      });
      }, 2800);
      });
      }, 4500);
      });
      }, 5000);
      });
     
	},
};