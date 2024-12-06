const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
module.exports = {
   name: "statsinfo",
   description: "Stat information",
   type: "CHAT_INPUT",
   developersOnly: false,
   options: [
      {
          name: "part",
          description: "please enter the part of stat 1 or 2",
          type: "STRING",
          required: true
      },
     ],
   run: async (client, interaction, args) => {
      const statpart = interaction.options.getString("part");
      if(statpart == "1") {
            const { stat1 } = require("../../functions/statinfo/stat1");
                  stat1(interaction);
            return
      }if(statpart == "2") {
            const { stat2 } = require("../../functions/statinfo/stat2");
                  stat2(interaction);
            return
      }else {
            const embed = new MessageEmbed()
            embed.setTitle(`Error`);
            embed.setDescription(`Please enter 1 or 2`)
            await interaction.followUp( { embeds: [embed] } );
        console.log("error out statinfo")
      }
  }}