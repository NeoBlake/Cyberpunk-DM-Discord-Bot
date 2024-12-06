const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
module.exports = {
   name: "update",
   description: "temp",
   type: "CHAT_INPUT",
   developersOnly: false,
   run: async (client, interaction, args) => {
    const { save } = require("../../functions/save");
    const { charaupdater } = require("../../functions/charaupdater")
    charaupdater(interaction)
    const embed = new MessageEmbed()
        embed.setTitle(`Updated`);
        embed.setDescription(`Chara has been updated`)
        await interaction.followUp( { embeds: [embed] } );
  }}