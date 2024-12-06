const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function fixer(interaction) {
    console.log("fixer has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const randomIndex = Math.floor(Math.random() * attributeNames.length);

        const INTnumbers = [8,8,6,7,8,8,8,6,8,6];
        const REFnumbers = [5,5,6,7,6,7,6,6,7,5];
        const DEXnumbers = [7,5,6,5,6,5,6,7,7,6];
        const TECHnumbers = [4,5,4,5,3,5,5,4,5,5];
        const COOLnumbers = [6,6,5,7,6,6,6,7,5,5];
        const WILLnumbers = [5,7,6,6,5,7,5,6,5,6];
        const LUCKnumbers = [8,8,8,7,8,7,6,7,7,8];
        const MOVEnumbers = [5,7,6,7,7,5,7,7,6,6];
        const BODYnumbers = [5,5,3,5,5,3,5,4,5,4];
        const EMPnumbers = [8,7,8,8,6,6,8,7,7,7];
        
        attributes[attributeNames[0]] = INTnumbers[randomIndex]
        attributes[attributeNames[1]] = REFnumbers[randomIndex]
        attributes[attributeNames[2]] = DEXnumbers[randomIndex]
        attributes[attributeNames[3]] = TECHnumbers[randomIndex]
        attributes[attributeNames[4]] = COOLnumbers[randomIndex]
        attributes[attributeNames[5]] = WILLnumbers[randomIndex]
        attributes[attributeNames[6]] = LUCKnumbers[randomIndex]
        attributes[attributeNames[7]] = MOVEnumbers[randomIndex]
        attributes[attributeNames[8]] = BODYnumbers[randomIndex]
        attributes[attributeNames[9]] = EMPnumbers[randomIndex]
        console.log(attributes)
        data.INT = data.INT + attributes.INT;
        data.REF = data.REF + attributes.REF;
        data.DEX = data.DEX + attributes.DEX;
        data.COOL = data.COOL + attributes.COOL;
        data.TECH = data.TECH + attributes.TECH;
        data.LUCK = data.LUCK + attributes.LUCK;
        data.WILL = data.WILL + attributes.WILL;
        data.MOVE = data.MOVE + attributes.MOVE;
        data.EMP = data.EMP + attributes.EMP;
        data.BODY = data.BODY + attributes.BODY;
        const charapoints = attributes.INT + attributes.REF + attributes.DEX + attributes.COOL + attributes.TECH + attributes.LUCK + attributes.WILL + attributes.MOVE + attributes.EMP + attributes.BODY
        data.charapoints = data.charapoints + charapoints;
        data.save()
        const embed = new MessageEmbed()
        embed.setTitle(`Character Stats Created!`);
        await interaction.followUp( { embeds: [embed] } );
        return
     console.log("fixer has ended")
    })};
module.exports = {
    fixer
}