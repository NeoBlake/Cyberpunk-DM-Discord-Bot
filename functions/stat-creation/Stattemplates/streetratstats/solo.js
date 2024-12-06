const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function solo(interaction) {
    console.log("solo has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const sd = getRandomValue(1, 10)
        const s1 = [6,7,7,3,8,6,5,5,6,5]
        const s2 = [7,8,6,3,6,6,7,5,6,6]
        const s3 = [5,8,7,4,7,7,6,7,8,5]
        const s4 = [5,8,6,4,6,7,6,5,7,6]
        const s5 = [6,6,7,5,7,6,7,6,8,4]
        const s6 = [7,7,6,5,7,6,6,7,7,5]
        const s7 = [7,7,6,5,6,7,7,6,6,6]
        const s8 = [7,8,7,5,6,6,5,6,8,4]
        const s9 = [7,7,6,4,6,6,6,5,6,5]
        const s0 = [6,6,8,5,6,6,5,6,6,5]
        console.log("solo =", sd)
        if(sd == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s1[i]
                };
        }
        if(sd == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s2[i]
                };
        }
        if(sd == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s3[i]
                };
        }
        if(sd == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s4[i]
                };
        }
        if(sd == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s5[i]
                };
        }
        if(sd == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s6[i]
                };
        }      
        if(sd == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s7[i]
                };
        }    
        if(sd == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s8[i]
                };
        }
        if(sd == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s9[i]
                };
        }    
        if(sd == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = s0[i]
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
     console.log("solo has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    solo
}