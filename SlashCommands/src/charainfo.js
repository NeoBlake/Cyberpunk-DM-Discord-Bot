const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");

module.exports = {
   name: "charainfo",
   description: "Check character info",
   type: "CHAT_INPUT",
   developersOnly: false,
   run: async (client, interaction, args) => {
    console.log("Charainfo has started")
    const { save } = require("../../functions/save");
            const Data = require("../../models/temp");
            Data.findOne({
            userID: interaction.user.id
            }, async (err, data) => {
                console.log("charainfo checked")
                const { save } = require("../../functions/save");
                if(!data) {
                    const embed = new MessageEmbed()
                    embed.setTitle("Please create a character");
                    console.log("No character data")
                    await interaction.followUp( { embeds: [embed] } );
                }else{
                    const tempRun = data.MOVE * 3
                    const leap = tempRun / 4
                    const templift = data.BODY
                    const tempdeadlift = templift * 40
                    const tempcarry = templift * 10
                    const deadlift = Math.round(tempdeadlift * 2.20462)
                    const carry = Math.round(tempcarry * 2.20462)
                    let tempLeap = Math.floor(leap);
                    const embed = new MessageEmbed()
                    embed.setTitle("Character info");
                    embed.setDescription(`**__HANDLE__** ${data.userName}\n**__ROLE__** ${data.userRole}\n**__CHARACTER POINTS__** [\`${data.charapoints}\`]\n**__STATS__**\nINT [\`${data.INT}\`]  REF [\`${data.REF}\`] DEX [\`${data.DEX}\`] TECH [\`${data.TECH}\`]\n COOL [\`${data.COOL}\`] WILL [\`${data.WILL}\`] LUCK [\`${data.LUCK}\`] MOVE [\`${data.MOVE}\`]\n BODY [\`${data.BODY}\`] EMP [\`${data.EMP}\`] RUN [\`${tempRun}\`] LEAP [\`${tempLeap}\`] \nLIFT(Deadlift [\`${deadlift} lbs\`] Carry[\`${carry} lbs\`]) \n**__SAVE__** [\`${data.BODY}\`]\n**__BTM__** [\`-${data.BTM}\`]`);
                    console.log("Display character data")
                    await interaction.followUp( { embeds: [embed] } );
                }
            })
            console.log("Charainfo has ended")
    }
}
