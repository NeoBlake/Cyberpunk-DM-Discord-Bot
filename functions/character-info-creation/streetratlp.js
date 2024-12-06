const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function streetratlp(interaction) {
    console.log("streetratlp has started")
    const Data = require("../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        if(data.statSelect === 3){
            const embed = new MessageEmbed()
                embed.setTitle(`Error`);
                embed.setDescription(`Not setup.\nPlease run again.`)
                await interaction.followUp( { embeds: [embed] } );
                data.statSelect = data.statSelect - 1
                data.save()
            return
        }else{
            const cultural = getRandomValue(1, 10)
            const personality = getRandomValue(1, 10)
            const clothes = getRandomValue(1, 10)
            const hairstyle = getRandomValue(1, 10)
            const ayanw = getRandomValue(1, 10)
            const wdyvm = getRandomValue(1, 10)
            const hdyfamp = getRandomValue(1, 10)
            const mvpiyl = getRandomValue(1, 10)
            const mvpyo = getRandomValue(1, 10)
            const ob = getRandomValue(1, 10)
            const childhoodenv = getRandomValue(1, 10)
            const familycrisis = getRandomValue(1, 10)
            // const friends = getRandomValue(1, 10)

            const lifepath = [cultural,personality,clothes,hairstyle,ayanw,wdyvm,hdyfamp,mvpiyl,mvpyo,ob,childhoodenv,familycrisis];
            console.log(lifepath)
            data.lifepath = lifepath
            data.save()
            const embed = new MessageEmbed()
                embed.setTitle(`Life Path Made`);
                embed.setDescription(`Give it a minute\nto up date.`)
                await interaction.followUp( { embeds: [embed] } );
            return
        }

        console.log("streetratlp has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    streetratlp
}