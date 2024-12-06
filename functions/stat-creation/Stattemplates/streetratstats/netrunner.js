const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function netrunner(interaction) {
    console.log("netrunner has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const nd = getRandomValue(1, 10)
        const n1 = [5,8,7,7,7,4,8,7,7,4]
        const n2 = [5,6,7,5,8,3,8,7,5,5]
        const n3 = [5,6,8,6,6,4,7,6,7,4]
        const n4 = [5,7,7,7,7,5,8,6,5,5]
        const n5 = [5,8,8,5,7,3,7,5,5,6]
        const n6 = [6,6,6,7,8,4,7,7,6,6]
        const n7 = [6,6,6,7,6,5,7,7,7,6]
        const n8 = [5,7,8,6,8,4,8,5,7,4]
        const n9 = [7,6,7,7,6,3,6,5,6,5]
        const n0 = [7,8,6,6,6,4,7,7,5,6]
        console.log("netrunner =", nd)
        if(nd == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n1[i]
                };
        }
        if(nd == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n2[i]
            };
        }
        if(nd == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n3[i]
                };
        }
        if(nd == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n4[i]
                };
        }
        if(nd == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n5[i]
                };
        }
        if(nd == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n6[i]
                };
        }      
        if(nd == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n7[i]
                };
        }    
        if(nd == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n8[i]
                };
        }
        if(nd == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n9[i]
                };
        }    
        if(nd == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = n0[i]
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
     console.log("netrunner has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    netrunner
}