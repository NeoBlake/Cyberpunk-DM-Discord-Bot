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
        description: "examples (Solo, Rocker, Netrunner, Media, Nomad, Fixer, Cop, Corp, Techie, or Medtechie)",
        type: "STRING",
        required: true
    }
   ],
   run: async (client, interaction, args) => {
    const tempName = interaction.options.getString("name");
    const tempRole = interaction.options.getString("role");
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
        save(interaction, tempName, tempRole,);
        console.log("name saved")
        const embed = new MessageEmbed()
        embed.setTitle(`Character Created!`);
        embed.setDescription(`${tempName} was created.\nAnd they are a ${tempRole} \n\n**__!!Now run /createstats!!__**`)
        await interaction.followUp( { embeds: [embed] } );
      };
    });
   },
};

