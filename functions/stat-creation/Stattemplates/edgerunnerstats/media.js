const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function media(interaction) {
    console.log("media has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const md = getRandomValue(1, 10)
        const m1 = [6,6,5,5,8,7,5,7,5,7]
        const m2 = [8,7,7,3,6,6,6,5,6,8]
        const m3 = [6,7,7,5,6,8,5,5,5,7]
        const m4 = [6,5,7,5,6,7,5,5,6,6]
        const m5 = [6,6,7,4,8,7,6,7,5,8]
        const m6 = [7,5,5,4,8,7,6,7,5,8]
        const m7 = [8,5,6,3,7,6,6,5,6,7]
        const m8 = [6,5,6,5,6,8,6,6,7,8]
        const m9 = [7,7,5,4,6,7,6,5,6,7]
        const m0 = [7,6,6,3,7,6,7,6,7,6]
        const randomIndex = Math.floor(Math.random() * attributeNames.length);

        const INTnumbers = [6,8,6,6,6,7,8,6,7,7];
        const REFnumbers = [6,7,7,5,6,5,5,5,7,6];
        const DEXnumbers = [5,7,7,7,7,5,6,6,5,6];
        const TECHnumbers = [5,3,5,5,4,4,3,5,4,3];
        const COOLnumbers = [8,6,6,6,8,8,7,6,6,7];
        const WILLnumbers = [7,6,8,7,7,7,6,8,7,6];
        const LUCKnumbers = [5,6,5,5,6,6,6,6,6,7];
        const MOVEnumbers = [7,5,5,5,7,7,5,6,5,6];
        const BODYnumbers = [5,6,5,6,5,5,6,7,6,7];
        const EMPnumbers = [7,8,7,6,8,8,7,8,7,6];
        
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
     console.log("media has ended")
    })};
module.exports = {
    media
}