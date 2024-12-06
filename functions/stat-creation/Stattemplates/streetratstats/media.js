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
        console.log("media =", md)
        if(md == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m1[i]
                };
        }
        if(md == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m2[i]
                };
        }
        if(md == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m3[i]
                };
        }
        if(md == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m4[i]
                };
        }
        if(md == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m5[i]
                };
        }
        if(md == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m6[i]
                };
        }      
        if(md == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m7[i]
                };
        }    
        if(md == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m8[i]
                };
        }
        if(md == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m9[i]
                };
        }    
        if(md == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = m0[i]
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
     console.log("media has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    media
}