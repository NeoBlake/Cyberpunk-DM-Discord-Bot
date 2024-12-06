const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
module.exports = {
   name: "roll",
   description: "Rolls a dice",
   type: "CHAT_INPUT",
   developersOnly: false,
   options: [
    {
        name: "die",
        description: "Please enter what kind of die. Example: D4, D6, D8, D10, D12, D20 ",
        type: "STRING",
        required: true
    },
   ],
   run: async (client, interaction, args) => {
    const { save } = require("../../functions/save");
    const dice = interaction.options.getString("die")        
        if (!dice) {
            await interaction.reply("Please provide a type of die.");
            return;
        }
        const diceRegex = /^D(\d+)$/i;
        const match = dice.match(diceRegex);
        if (!match) {
            const embed = new MessageEmbed()
                embed.setTitle(`Error`);
                embed.setDescription(`Invalid dice format.\nPlease use the format D4, D6, D10, D12, D20, etc.`)
                await interaction.followUp( { embeds: [embed] } );
            return;
        }
        const sides = parseInt(match[1]);
        const result = Math.floor(Math.random() * sides) + 1;
        const embed = new MessageEmbed()
        embed.setTitle("Die Rolled!")
        embed.setDescription(`You rolled a D${sides} and got: **${result}**`)
        await interaction.followUp( { embeds: [embed] } );
  }}