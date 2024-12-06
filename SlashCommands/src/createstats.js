const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
module.exports = {
   name: "createstats",
   description: "Create a character stats",
   type: "CHAT_INPUT",
   developersOnly: false,
   run: async (client, interaction, args) => {
    const Data = require("../../models/temp");
    Data.findOne({
      userID: interaction.user.id
    }, async (err, data) => {
      const stats = data.statSelect;
      const { save } = require("../../functions/save");
      if(!data) {
        const embed = new MessageEmbed()
        embed.setTitle(`Error`);
        embed.setDescription(`No player data was found`)
        await interaction.followUp( { embeds: [embed] } );
        console.log("No character data found")
      }else{
        const { save } = require("../../functions/save");
        if(data.charapoints == 0){
        if(stats == 1) {
            //console.log("inside")
            const Data = require("../../models/temp");
            Data.findOne({
                userID: interaction.user.id
              }, async (err, data) => {
                const { save } = require("../../functions/save");
                if(data) {
                  const { streetrat } = require("../../functions/stat-creation/streetrat");
                  streetrat(interaction);
                }else{
                  save(interaction);
                }
              });
        }
        if(stats == 2) {
          const Data = require("../../models/temp");
          Data.findOne({
              userID: interaction.user.id
            }, async (err, data) => {
              const { save } = require("../../functions/save");
              if(data) {
                const { edgerunner } = require("../../functions/stat-creation/edgerunner");
                edgerunner(interaction);
              }else{
                save(interaction);
              }
            });
        }
        if(stats == 3) {
          const Data = require("../../models/temp");
          Data.findOne({
              userID: interaction.user.id
            }, async (err, data) => {
              const { save } = require("../../functions/save");
              if(data) {
                const { complete } = require("../../functions/stat-creation/complete");
                complete(interaction);
              }else{
                save(interaction);
              }
            });
        }
      }else{
        const embed = new MessageEmbed()
        embed.setTitle(`Error`);
        embed.setDescription(`player stats were found\nuse once per character`)
        await interaction.followUp( { embeds: [embed] } );
        console.log("character stats found")
      }
      };
    });
   },
};

