const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function medtech(interaction) {
    console.log("medtech has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const mtd = getRandomValue(1, 10)
        const mt1 = [7,5,6,7,5,3,8,5,5,7]
        const mt2 = [6,7,7,7,4,4,6,7,7,7]
        const mt3 = [6,5,5,8,5,3,8,5,7,8]
        const mt4 = [8,7,6,8,3,5,6,6,5,7]
        const mt5 = [6,7,5,7,5,5,8,7,6,8]
        const mt6 = [8,5,5,8,5,5,6,6,5,6]
        const mt7 = [8,6,5,8,5,4,8,5,7,7]
        const mt8 = [6,5,7,7,3,5,8,5,5,8]
        const mt9 = [6,6,7,7,5,4,6,6,5,6]
        const mt0 = [8,7,6,6,3,4,8,7,6,7]
        console.log("medtech =", mtd)
        if(mtd == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt1[i]
                };
        }
        if(mtd == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt2[i]
                };
        }
        if(mtd == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt3[i]
                };
        }
        if(mtd == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt4[i]
                };
        }
        if(mtd == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt5[i]
                };
        }
        if(mtd == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt6[i]
                };
        }      
        if(mtd == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt7[i]
                };
        }    
        if(mtd == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt8[i]
                };
        }
        if(mtd == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt9[i]
                };
        }    
        if(mtd == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = mt0[i]
                };
        }  
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
     console.log("medtech has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    medtech
}