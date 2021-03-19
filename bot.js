const { Client, MessageEmbed } = require("discord.js");
var { Util, RichEmbed } = require("discord.js"); 
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "m/";
const cooldown = new Set();
const cdtime = 7;
client.login("ODEzNTYyNjQyMzU4NzMwNzYz.YDRHQQ.lluXhoN6YG_vQyLgC4p-E_6k0UI");
client.on("ready", () => {
  console.log(`${client.user.tag}`);
});
  
 client.on("ready", () => {
setInterval(() => {
  client.user.setActivity(
  `${prefix}help`,
  );
}, 2000);
})
  
  
  
      client.on("message", message => {
  if (message.content === prefix + "help") {
    let Dashboard = `
__Security Commands__ 
> ${prefix}anti kick - [Number]
> ${prefix}anti ban - [Number]
> ${prefix}anti roleC - [Number]
> ${prefix}anti roleD - [Number]
> ${prefix}anti channelC - [Number]
> ${prefix}anti channelD - [Number]
> ${prefix}anti bot - on/off]
> ${prefix}setting
__Info Commands__ 
> user info , server info , 
> servers , role , channel info , my invites ,
> badeg , avatar , 
__Moderation Commands__ 
> lock , unlock , clear , ban , kick
> unban , mute , unmute , bans
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=764487416748310570&permissions=8&scope=bot`;
    var SUPPORT = `https://discord.gg/Zhwg47uFun`;
    var WEBSITE = `https://securitexbot.wixsite.com/security`;
    var EMBED = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}`)
      .setDescription(
        `${Dashboard}
  **[invite bot ](${addserver})** | **[ Server Suppurt](${SUPPORT})** | **[ website](${WEBSITE})**`
      )
      .setImage("https://cdn.discordapp.com/attachments/769678873197281300/819928547677569034/image0.gif");
    message.channel.send(EMBED);
    message.react("✅");
  }
});



  
  
  //////////
  
       client.on('message', message => {
     if (message.content  === prefix + "servers") {
     let embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .addField("__the all servers__" , client.guilds.cache.size)
  message.channel.send(embed);
    }
}); 
///////////////



     client.on('message',async message => {
  if(message.content.startsWith(prefix + "role info")) {
  let args = message.content.split(" ").slice(1).join(" ");
if (!args[0]) return message.channel.send("__Please Mention A Role!__")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("__Please Enter A Valid Role!__");
        const status = {
            false: "No",
            true: "Yes"
        }
        let roleembed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Hex**", role.hexColor)
            .addField("**Members**", role.members.size)
            .addField("**Position**", role.position)
            .addField("**Mentionable**", status[role.mentionable])
            .addField("**Time Create**",role.createdAt.toLocaleString(),true)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
})

/////////

    client.on('message',async message => {
  if(message.content.startsWith(prefix + "channel info")) { 
  let args = message.content.split(" ").slice(1)
let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");
        let channelembed = new Discord.MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**NSFW**", channel.nsfw, true)
            .addField("**Channel ID**", channel.id, true)
            .addField("**Channel Type**", channel.type)
            .addField("**Channel Topic**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", channel.createdAt)
           .setFooter('')
        .setColor("BLACK")
        message.channel.send(channelembed);
    }
})

/////////


     client.on('message',async  message => {
  if(message.content.startsWith(prefix + "my invites")) {
    let args = message.content.split(" ").slice(1)
let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            let invites = await message.guild.fetchInvites()
            let memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);
            if (memberInvites.size <= 0) {
                return message.channel.send(`**${member.displayName} this member have 0 invite ):!**`, (member === message.member ? null : member));
  {}          }
            let content = memberInvites.map(i => i.code).join("\n");
            let index = 0;
            memberInvites.forEach(invite => index += invite.uses);
            let embed = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setFooter('')
               
                .setDescription(`Information on Invites of ${member.displayName}`)
                .addField("**Number Invite**", index)
                .addField("Invite Code\n\n", content);
            message.channel.send(embed);
  }})



/////////


     client.on('message',async message => {
  if(message.content.startsWith(prefix + "role")) { 

let member_r = message.mentions.members.first() || message.member,
  user = member_r.user;
let embed = new Discord.MessageEmbed()
  .addField('this member have this Roles:', member_r.roles.cache.map(r => `${r}`).join(', '), true)

message.channel.send(embed)
}})


///////


    client.on('message',async (msg,target) => {
  if(msg.content.startsWith(prefix + "badge")) { 

   let args = msg.content.split(" ").slice(1)

const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
    DISCORD_PARTNER: 'Discord Partner',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
    HYPESQUAD_EVENTS: 'HypeSquad Events',
    HOUSE_BRAVERY: 'House of Bravery',
    HOUSE_BRILLIANCE: 'House of Brilliance',
    HOUSE_BALANCE: 'House of Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Bot Developer'
};
     const member = msg.mentions.members.last() || msg.guild.members.cache.get(target) || msg.member;
          const userFlags = member.user.flags.toArray();

    var embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle(`${member} Badges`)
            .setDescription(`❯ All Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`)
            msg.channel.send(embed)
   
}
}) 




///////




      
client.on('message',async message => {
  if(message.content.startsWith(prefix + "avatar")) {
 
    let args = message.content.split(" ").slice(1).join(" ");   
   let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size: 1024})
      const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("BLACK")
        message.channel.send(embed);
    
  }})


////////
  

     client.on("message", async (message,target)  => {
if(message.content.startsWith(prefix+"user info")) {


          
  
  
  if(message.author.bot) return;
if(!message.channel.guild) return;

 
let args = message.content.split(" ").slice(1);

const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;

    if (!member) {
      return message.channel.send(":x: Unable to find this person!")
    }
    

    
    let badges = await member.user.flags
    badges = await badges.toArray();

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new Discord.MessageEmbed()
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))

    
    let array = []
    if (member.user.presence.activities.length) {

      let data = member.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }

        embed.setDescription(array.join("\n"))

      }
    }

      
      embed.setColor(member.displayHexColor === "#000001" ? "#ffffff" : member.displayHexColor)

      
      embed.setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))

      
      if (member.nickname !== null) embed.addField("Nickname", member.nickname)
      embed.addField("__**Join Date**__", moment(member.user.joinedAt).format("LLLL"))
        .addField("__**Create Date**__", moment(member.user.createdAt).format("LLLL"))
        .addField("__**Other Information**__", `ID: \`${member.user.id}\`\nDiscriminator: ${member.user.discriminator}\nBot: ${member.user.bot}\nDeleted User: ${member.deleted}`)
        .addField("__**Badges**__", newbadges.join(", ").toLowerCase() || "None")
        .setFooter(member.user.presence.status)



      return message.channel.send(embed).catch(err => {
        return message.channel.send("Error : " + err)
      
      })}})

//////////


      client.on('message', message => {

 
      if(message.content === prefix + "lock") {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return
        message.delete()
                    
        if(!message.channel.guild) return 
 
 let embed = new Discord.MessageEmbed()
        
      
              .setFooter('')       
                .setColor('BLACK') 
                .setTitle('CHANNEL CLOSED')
        message.channel.send(embed)
         
        
        
    

             message.channel.updateOverwrite(message.guild.id, {

            SEND_MESSAGES: false
             })}
 
              })


client.on('message', message => {
      if(message.content === prefix + "unlock") { 
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return 
        message.delete()
                    
        if(!message.channel.guild) return message.reply('SORRY IM IN SERVER');
 let embed = new Discord.MessageEmbed()
                     .setFooter('')
                .setColor('BLACK') 
                .setTitle('CHANNEL NOW OPEN')
        message.channel.send(embed)
         
             message.channel.updateOverwrite(message.guild.id, {

            SEND_MESSAGES: true
             })}
 
              })


////////////




                
client.on("message", async message  => {
if(message.content.startsWith(prefix+"server info")) {

  if(message.author.bot) return;
if(!message.channel.guild) return;

let args = message.content.split(" ").slice(1);

const os = require('os')

        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('BLACK')
            .setTitle(`${message.guild.name} server Info`)
            .addFields(
                {
                    name: "__**Owner**__: ",
                    value: `${message.guild.owner}`,
                    inline: true
                },
                {
                    name: "__**All Members**__: ",
                    value: ` ${message.guild.memberCount} users`,
                    inline: true
                },
                {
                    name: "__**Members Online**__: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online`,
                    inline: true
                },
                {
                    name: "__**All Bots**__: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.bot).size} bots`,
                    inline: true
                },
                {
                    name: "__**Creation Date**__: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "__**Roles Number**__: ",
                    value: ` ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `__**Region**__: `,
                    value: region,
                    inline: true
                },
                {
                    name: `__**Verified**__: `,
                    value: message.guild.verified ? 'Server is verified' : `Not verified`,
                    inline: true
                },
                {
                    name: '__**Boosters**__: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? ` ${message.guild.premiumSubscriptionCount} Boosters` : ` no boosters Found`,
                    inline: true
                },
                {
                    name: "__**Emojis**__: ",
                    value: message.guild.emojis.cache.size >= 1 ? `All emojis ${message.guild.emojis.cache.size} !` : ' no emojis Found' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}

)          

/////////




      client.on("message", msg => {
if(msg.content.startsWith(prefix+"kick")) {
 let args = msg.content.split(" ").slice(1);
  
  if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("You don't have permission to kick members.");
        let toKick = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('Please mention someone to kick');
        if(!toKick) return msg.channel.send(`${args[0]} is not a member.`);
        if(!reason) return msg.channel.send('Specify a reason.');
        if(!toKick.kickable){
            return msg.channel.send(':x: I cannot kick someone that is mod/admin. :x:');
        }
 
        if(toKick.kickable){
            let x = new Discord.MessageEmbed()
            .setTitle('kick')
            .addField('Member kick', toKick)
            .addField('kicked by', msg.author)
            .addField('Reason', reason)
            .addField('Date', msg.createdAt)
            .setColor('BLACK');
 
            msg.channel.send(x);
            toKick.kick();
        }
    }
})


/////////



       client.on('message',message => {

if(message.content.startsWith(prefix+ 'ban')) {
let args = message.content.split(" ").slice(1)
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You don't have permission to ban members.")
   
let Ban = message.mentions.members.first();
let hokar = args.slice(1).join(" ");
if(!args[0]) return message.channel.send('Please mention someone to ban')
if(!Ban) return message.channel.send(`${args[0]} is not a member.`)
if(!hokar) return message.channel.send('Specify a reason.')

if(!Ban.bannable) {
return message.channel.send('I cannot ban someone that is mod/admin.')

}

if(Ban.bannable) {

const embed = new Discord.MessageEmbed()
.setTitle('Ban')
.setColor('RANDOM')
.addField('Member ban', Ban)
.addField('band by', message.author)
.addField('Reason', hokar)
message.channel.send(embed)

Ban.ban();
}}})


      client.on('message', async message=>{
  
  if(message.content.startsWith(prefix+'unban')){
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait')
    let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send('tkaya kasek mention bka bo unban krdn')
const reason = args[1] || "dont reason"
let unban = await client.users.fetch(args[0])

message.guild.members.unban(unban,reason)
const embed = new Discord.MessageEmbed()
    
    .setTitle('unban')  
    .addField('Memer unband',unban)  
    .addField('Unban by',message.author)
    .addField('Reason',reason)
message.channel.send(embed)

  }})


////////////



client.on("message", msg => {
if(msg.content.startsWith(prefix+"clear")) {
 let args = msg.content.split(" ").slice(1);
 if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}})



////////////


       
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // 
    kickThreshold: 7, // 
    banThreshold: 7, // badlli xow zhmarakan bgora
    maxInterval: 2000, //  
    warnMessage: '{@user}, tkaya spamm maka.', // 
    kickMessage: '**{user_tag}** kick kra labar zory spam krdn.', // 
    banMessage: '**{user_tag}** band kra labar zory spamm krdn.', // .
    maxDuplicatesWarning: 7, // 
    maxDuplicatesKick: 10, // 
    maxDuplicatesBan: 12, // 
    exemptPermissions: [ 'ADMINISTRATOR'], 
    ignoreBots: true, 
    verbose: true, 
    ignoredUsers: [], 
});



//////////



      client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`[Thank you for support](https://discord.gg/Zhwg47uFun)`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLACK");
    message.author.send(embed);
    message.react("✅");
  }
});



/////////



        client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let invite = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle("" + 
                "click here | thank you for invite me ⚡" + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      );
    message.author.send(invite);
    message.react("✨");
  }
});


/////////
    


     let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2,
      time: 30
    }
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.ownerID) 
    return message.channel.send(
        "**  Ownership can use this command. **"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**  Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**  Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**Changed To : ${config[message.guild.id].kickLimits} **`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**  Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**Changed To : ${config[message.guild.id].roleDelLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**  Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**Changed To : ${config[message.guild.id].roleCrLimits} **`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**  Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**Changed To : ${config[message.guild.id].chaDelLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**  Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**Changed To : ${config[message.guild.id].chaCrLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**  Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**Changed To : ${config[message.guild.id].time} **`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Tryed To \`Delete\` Many \`Role\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("ban member");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("member kick");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 2,
        chaDelLimit: 2,
        roleDelLimit: 2,
        kickLimits: 2,
        chaCrLimit: 2,
        roleCrLimits: 2
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("kick member");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});






     let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("OWNERSHIP"))
      return;
      
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`** AntiBot Is \`Enable\` **`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("OWNERSHIP")) return; 
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`** AntiBot Is \`Disable\` **`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "on"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
client.on("message", message => {
  if (message.content === prefix + "setting") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const black = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL()).setDescription(`AntiBan
Enabled: 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled: 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled: 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled: 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled: 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled: 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled: 
Maximum Time : ${config[message.guild.id].time}
`);

    message.channel.send(black);
  }
});



///////

    //=================================[ mute ]=================================//

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}mute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#808080",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//=================================[ unmute ]===============================//

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}unmute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`removed mute from ${user.username}!`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

/////////



      //=================================[ bans ]=================================//

client.on("message", message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    message.channel;
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`Server Ban List : ${bans.size} `))
      .catch(console.error);
  }
});



      
