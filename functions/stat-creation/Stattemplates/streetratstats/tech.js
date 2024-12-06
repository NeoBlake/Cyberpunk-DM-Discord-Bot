const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function tech(interaction) {
    console.log("tech has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const td = getRandomValue(1, 10)
        const t1 = [6,7,7,8,4,4,5,5,7,6]
        const t2 = [7,6,6,7,5,3,7,7,5,5]
        const t3 = [8,6,5,7,5,4,7,7,5,7]
        const t4 = [7,8,7,8,4,4,6,5,6,7]
        const t5 = [6,6,7,6,4,3,7,7,6,6]
        const t6 = [8,7,5,6,3,3,7,6,6,7]
        const t7 = [8,6,7,8,4,4,7,6,7,6]
        const t8 = [8,8,7,8,5,4,6,5,6,6]
        const t9 = [6,6,7,8,3,3,5,7,7,7]
        const t0 = [8,8,5,6,4,4,6,5,6,6]
        console.log("tech =", td)
        if(td == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t1[i]
                };
        }
        if(td == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t2[i]
                };
        }
        if(td == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t3[i]
                };
        }
        if(td == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t4[i]
                };
        }
        if(td == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t5[i]
                };
        }
        if(td == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t6[i]
                };
        }      
        if(td == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t7[i]
                };
        }    
        if(td == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t8[i]
                };
        }
        if(td == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t9[i]
                };
        }    
        if(td == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = t0[i]
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
     console.log("tech has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    tech
}