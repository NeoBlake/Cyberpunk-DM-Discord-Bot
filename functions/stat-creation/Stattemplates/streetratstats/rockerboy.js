const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function rockerboy(interaction) {
    console.log("rockerboy has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const rd = getRandomValue(1, 10)
        const r1 = [7,6,6,5,6,8,7,7,3,8]
        const r2 = [3,7,7,7,7,6,7,7,5,8]
        const r3 = [4,5,7,7,6,6,7,7,5,8]
        const r4 = [4,5,7,7,6,8,7,6,3,8]
        const r5 = [3,7,7,7,6,8,6,5,4,7]
        const r6 = [5,6,7,5,7,8,5,7,3,7]
        const r7 = [5,6,6,7,7,8,7,6,3,6]
        const r8 = [5,7,7,5,6,6,6,6,4,8]
        const r9 = [3,5,5,6,7,8,7,5,5,7]
        const r0 = [4,5,6,5,8,8,7,6,4,7]
        console.log("rockerboy =", rd)
        if(rd == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r1[i]
                };
        }
        if(rd == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r2[i]
                };
        }
        if(rd == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r3[i]
                };
        }
        if(rd == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r4[i]
                };
        }
        if(rd == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r5[i]
                };
        }
        if(rd == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r6[i]
                };
        }      
        if(rd == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r7[i]
                };
        }    
        if(rd == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r8[i]
                };
        }
        if(rd == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r9[i]
                };
        }    
        if(rd == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = r0[i]
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
     console.log("rockerboy has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    rockerboy
}