const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");

async function chostat(interaction) {
    console.log("chostat has started")
    const Data = require("../../models/temp");
    Data.findOne({
        userID: interaction.user.id
    }, async (err, data) => {      
        const { save } = require("../save");
            const embed = new MessageEmbed()
            embed.setTitle(`Not going to be setup`);
            await interaction.followUp( { embeds: [embed] } );
        console.log("chostat has ended")
    })};
module.exports = {
    chostat
}