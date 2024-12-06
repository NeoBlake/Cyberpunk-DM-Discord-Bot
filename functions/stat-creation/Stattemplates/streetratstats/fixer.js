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
        const fd = getRandomValue(1, 10)
        const f1 = [8,5,7,4,6,5,8,5,5,8]
        const f2 = [8,5,5,5,6,7,8,7,5,7]
        const f3 = [6,6,6,4,5,6,8,6,3,8]
        const f4 = [7,7,5,5,7,6,7,7,5,8]
        const f5 = [8,6,6,3,6,5,8,7,5,6]
        const f6 = [8,7,5,5,6,7,7,5,3,6]
        const f7 = [8,6,6,5,6,5,6,7,5,8]
        const f8 = [6,6,7,4,7,6,7,7,4,7]
        const f9 = [8,7,7,5,5,5,7,6,5,7]
        const f0 = [6,5,6,5,5,6,8,6,4,7]
        console.log("fixer =", fd)
        if(fd == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f1[i]
                };
        }
        if(fd == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f2[i]
                };
        }
        if(fd == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f3[i]
                };
        }
        if(fd == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f4[i]
                };
        }
        if(fd == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f5[i]
                };
        }
        if(fd == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f6[i]
                };
        }      
        if(fd == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f7[i]
                };
        }    
        if(fd == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f8[i]
                };
        }
        if(fd == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f9[i]
                };
        }    
        if(fd == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = f0[i]
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
     console.log("fixer has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    fixer
}