const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
module.exports = {
   name: "createcharacter",
   description: "Create a character",
   type: "CHAT_INPUT",
   developersOnly: false,
   options: [
    {
        name: "name",
        description: "please enter a name",
        type: "STRING",
        required: true
    },
    {
        name: "role",
        description: "Options (Solo, Rockerboy, Netrunner, Media, Nomad, Fixer, lawman, exec, Tech, or Medtech)",
        type: "STRING",
        required: true
    },
    {
      name: "choose",
      description: "streetrat, edgerunner, complete",
      type: "STRING",
      required: true
    },
   ],
   run: async (client, interaction, args) => {
    const tempName = interaction.options.getString("name");
    const rtempRole = interaction.options.getString("role");
    const rtempchoose = interaction.options.getString("choose");
    const tempchoose = rtempchoose.toLowerCase();
    const tempRole = rtempRole.toLowerCase();
    const Data = require("../../models/temp");
    Data.findOne({
      userID: interaction.user.id
    }, async (err, data) => {
      const { save } = require("../../functions/save");
      if(data) {
        const embed = new MessageEmbed()
        embed.setTitle(`Error`);
        embed.setDescription(`Player data was found`)
        await interaction.followUp( { embeds: [embed] } );
        console.log("Found character data")
        return
      }else{
        const { save } = require("../../functions/save");
        const validRoles = ["solo", "rockerboy", "netrunner", "media", "nomad", "fixer", "lawman", "exec", "tech", "medtech"];
        const validChoose = ["streetrat", "edgerunner", "complete"];
        if(!validRoles.includes(tempRole)){
          const embed = new MessageEmbed()
          embed.setTitle(`Error`);
          embed.setDescription(`Please only use roles from the options. \n**__Solo, Rocker, Netrunner, Media, Nomad,\n Fixer, Cop, Corp, Techie, or Medtechie__**`)
          await interaction.followUp( { embeds: [embed] } );return
        }else{
          if(!validChoose.includes(tempchoose)){
            const embed = new MessageEmbed()
            embed.setTitle(`Error`);
            embed.setDescription(`Please only use choices from the options. \n**__streetrat, edgerunner, complete__**`)
            await interaction.followUp( { embeds: [embed] } );return
          }else{
            if(tempchoose==="streetrat"){const tempStat = 1; save(interaction, tempName, tempRole, tempStat);const embed = new MessageEmbed()
              embed.setTitle(`Character Created!`);
              embed.setDescription(`${tempName} was created.\nAnd they are a ${tempRole} \n\n**__!!Now run /createstats!!__**`)
              await interaction.followUp( { embeds: [embed] } );return}if(tempchoose==="edgerunner"){const tempStat = 2; save(interaction, tempName, tempRole, tempStat);const embed = new MessageEmbed()
                embed.setTitle(`Character Created!`);
                embed.setDescription(`${tempName} was created.\nAnd they are a ${tempRole} \n\n**__!!Now run /createstats!!__**`)
                await interaction.followUp( { embeds: [embed] } );return}if(tempchoose==="complete"){const tempStat = 3; save(interaction, tempName, tempRole, tempStat);const embed = new MessageEmbed()
                  embed.setTitle(`Character Created!`);
                  embed.setDescription(`${tempName} was created.\nAnd they are a ${tempRole} \n\n**__!!Now run /createstats!!__**`)
                  await interaction.followUp( { embeds: [embed] } );return}else{const tempStat = 1; save(interaction, tempName, tempRole, tempStat);const embed = new MessageEmbed()
                    embed.setTitle(`Character Created!`);
                    embed.setDescription(`${tempName} was created.\nAnd they are a ${tempRole} \n\n**__!!Now run /createstats!!__**`)
                    await interaction.followUp( { embeds: [embed] } );return}
            console.log("name saved")
          }
        }
      };
      
    });
   },
};

