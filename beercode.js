const discord = require("discord.js");
const fs = require("fs");
//===============================================================================\\
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login("");
//===============================================================================\\
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

//===============================================================================\\
client.on("ready", async () => {
  client.user.setActivity(`Jhelp|Prefix {J}|To Verify|Server,${client.guilds.cache.size}`, {
    type: "PLAYING"
  });
});
//===============================================================================\\

client.on('message', message => {
  if (message.content.startsWith("bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
        .setTitle('``Info The Bot`` ')
        .addField('``My Ping``', `${Date.now() - message.createdTimestamp}` + 'MS', true)
        .addField('``servers``', [client.guilds.size], true)
        .addField('``channels``', ` ${client.channels.size} `, true)
        .addField('``Users``', ` ${client.users.size} `, true)
        .addField('``My Name``', ` ${client.user.tag} `, true)
        .addField('``My ID``', ` ${client.user.id} `, true)
        .addField('``My Prefix``', ` J `, true)
    })
  }
});

//===============================================================================\\
client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("885 988731679551548");
  let embed = new MessageEmbed().setColor("#FF0000")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( ✅ Nice Server)client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("885 988731679551548");
  let embed = new MessageEmbed().setColor("#FF0000")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( ✅ Nice Server)
  .addField(" **Server Name**", ${guild.name})
  .addField(" **Server Owner**", ${guild.owner})
  .addField(" **Server Id**", ${guild.id})
  .addField(" **Member Count**", ${guild.memberCount})
  .setFooter(${client.user.tag});
  channel.send(embed);
});

  .addField(" **Server Name**", ${guild.name})
  .addField(" **Server Owner**", ${guild.owner})
  .addField(" **Server Id**", ${guild.id})
  .addField(" **Member Count**", ${guild.memberCount})
  .setFooter(${client.user.tag});
  channel.send(embed);
});
////////////////////////////////////////////

//================================================================================\\
 
client.on("message", prof => {
  if (prof.content.startsWith("server")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("**Info Server**")
      .addField(" ⚠️| **Server Name:**", `${prof.guild.name}`)
      .addField(" 👑| **Owner Server:**", `${prof.guild.owner}`)
      .addField(" 🔰| **Server ID:**", `${prof.guild.id}`)
      .addField(" ✅| **Created:**", `${prof.guild.createdAt.toLocaleString()}`)
      .addField(" 🚦| **Members:**", `${prof.guild.memberCount}`)
      .addField(" 🔳| **Channels:**", `${prof.guild.channels.cache.size}`)
      .addField(" 🌐| **Region**:", `${prof.guild.region}`)
      .addField(" **Roles:**", ` ${prof.guild.roles.cache.size}`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

//================================================================================\\

client.on('message' , message => {
  if (message.content === "Jinvite") {

        if(!message.channel.guild) return message.reply('**this command only for server**');

     const embed = new Discord.MessageEmbed()

 .setColor("RANDOM")

 .setThumbnail(client.user.avatarURL("https://cdn.discordapp.com/icons/838113441008058388/a_a227ea131a1fc6b0d6d58925b6c3e2e6.gif?size=1024"))     
 .setDescription("Invite Bot" + `
 
[Link Invite](https://discord.com/oauth2/authorize?client_id=518848646016401434&permissions=414464728128&scope=bot)
`);

  message.channel.send({embed});

   }

});


//================================================================================\\

client.on('message' , message => {
  if (message.content === "Jsupport") {

        if(!message.channel.guild) return message.reply('**this command only for server**');

     const embed = new Discord.MessageEmbed()

 .setColor("RANDOM")

 .setThumbnail(client.user.avatarURL("https://cdn.discordapp.com/icons/838113441008058388/a_a227ea131a1fc6b0d6d58925b6c3e2e6.gif?size=1024"))     
 .setDescription("Support Server" + `
 
[Link Server](https://discord.gg/a9QvFY7te7)
`);

  message.channel.send({embed});

   }

});


//================================================================================\\



//================================================================================\\



client.on("message", message => {
  if (message.content === "Jhelp") {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("WHITE")
      .setAuthor("The Prefix { J }").setDescription(`

⚙️ ┇ **Info Commands**
> invite - uptime

:dollar: ┇**Economy Commands**
> daily(d) - cash(c) - work(w)
> send - steal - shop(h)

🎰 ┇**Game Comamnds**
> coinflip(cf) - slots(s)
> fish(f)

🔗 ┇**Link**
[Support](https://discord.gg/a9QvFY7te7) - [Invite Bot](https://discord.com/oauth2/authorize?client_id=518848646016401434&permissions=414464728128&scope=bot) -  [Vote](coming soon)
`);
    message.channel.send(embed);
  }
});

//================================================================================\\



//===============================================================================\\
client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`Hi Im <@518848646016401434> My prefix is { J }`);
  }
});
//===============================================================================\\
client.on('ready', async() => {
        client.channels.cache.get('898681102351335468').send("Hello Im Online <a:logserver:891321228537782313>")
        client.channels.cache.get('894710155994873886').join()
        console.log("Hello Im Online")
});
//===============================================================================\\

//===============================================================================\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Destek/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Installing support command...`);
  files.forEach(f => {
   

    let props = require(`./Destek/${f}`);
    log(`Support Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Destek/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Ekonomi/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Economy command Loading ...`);
  files.forEach(f => {
    

    let props = require(`./Ekonomi/${f}`);
    log(`Economy Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Ekonomi/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//===============================================================================\\


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Oyunlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Game command Loading ...`);
  files.forEach(f => {
    let props = require(`./Oyunlar/${f}`);
    log(`Game Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//===============================================================================\\
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Oyunlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("guildCreate" , server => {

if(server.memberCount < 100){

server.leave()

console.log("Leave Server -100 member")

}

});
//====================================================//

client.login(process.env.TOKEN_BOT);