const discord = require("discord.js")

module.exports = {
  name: "purge",
  aliases: ["clear", "nuke", "bulkdelete"],
   category: "moderation",
   description: "delete messages",
   usage: "!purge <number>",
   run: (client, message, args) => {
         let arg = message.content.split(" ");
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      let clear = args[0];
      if (!clear)
      return message.channel.send({
        embed: {
            color: 0xff1100,
            description: '**Incorrect use of command. Must State A number before purging for example +purge 34**'
        }
    })
      if (isNaN(clear))
      return message.channel.send({
        embed: {
            color: 0xff1100,
            description: '**Put A Valid Number Not Letter**'
        }
    })
      if (clear > 100)
      return message.channel.send({
        embed: {
            color: 0xff1100,
            description: '**I Cant Clear More Than 100 message**'
        }
    })
      if (clear < 1)
      return message.channel.send({
        embed: {
            color: 0xff1100,
            description: '**You Cannot Delete 1 Message!**'
        }
    })

      message.channel.bulkDelete(clear);
      return message.channel.send({
        embed: {
            color: 0x3cff00,
            description: `**Sucessfully Delete ${clear} message**`
        }
    })
        .then(message => message.delete({ timeout: 10000 }));
    } else {
      message.reply("You Dont Have Permission to Purge! invalid Permission. REQUIRE Manage Message!");
    }
   }
  }