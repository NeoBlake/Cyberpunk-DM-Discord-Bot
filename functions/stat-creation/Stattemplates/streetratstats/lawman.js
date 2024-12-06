const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function lawman(interaction) {
    console.log("lawman has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const ld = getRandomValue(1, 10)
        const l1 = [5,6,7,5,7,8,5,6,5,6]
        const l2 = [6,6,6,5,6,8,5,7,5,5]
        const l3 = [5,7,7,7,6,7,5,5,7,6]
        const l4 = [6,6,7,6,6,8,5,7,7,6]
        const l5 = [6,6,7,6,7,7,6,5,5,6]
        const l6 = [7,6,5,5,7,8,5,6,7,4]
        const l7 = [7,8,7,5,6,8,7,6,5,4]
        const l8 = [5,6,6,5,6,8,5,7,6,4]
        const l9 = [7,7,5,5,7,7,6,5,5,6]
        const l0 = [6,6,5,6,8,7,5,7,6,6]
        console.log("lawman =", ld)
        if(ld == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l1[i]
                };
        }
        if(ld == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l2[i]
                };
        }
        if(ld == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l3[i]
                };
        }
        if(ld == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l4[i]
                };
        }
        if(ld == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l5[i]
                };
        }
        if(ld == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l6[i]
                };
        }      
        if(ld == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l7[i]
                };
        }    
        if(ld == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l8[i]
                };
        }
        if(ld == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l9[i]
                };
        }    
        if(ld == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = l0[i]
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
     console.log("lawman has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    lawman
}