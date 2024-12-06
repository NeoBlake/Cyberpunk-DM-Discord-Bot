const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function exec(interaction) {
    console.log("exec has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        const ed = getRandomValue(1, 10)
        const e1 = [8,5,5,3,8,6,6,5,5,7]
        const e2 = [8,6,6,4,7,6,7,7,5,7]
        const e3 = [8,7,6,3,8,6,7,6,4,5]
        const e4 = [8,5,7,5,6,5,6,5,5,7]
        const e5 = [7,7,6,5,8,5,7,7,5,6]
        const e6 = [5,7,7,3,6,7,6,5,5,7]
        const e7 = [6,6,7,5,8,7,6,7,4,6]
        const e8 = [6,7,7,3,7,5,7,5,5,7]
        const e9 = [7,6,7,5,7,5,7,6,5,5]
        const e0 = [7,7,5,5,8,6,6,7,4,7]
        console.log("exec =", ed)
        if(ed == 1){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e1[i]
                };
        }
        if(ed == 2){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e2[i]
                };
        }
        if(ed == 3){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e3[i]
                };
        }
        if(ed == 4){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e4[i]
                };
        }
        if(ed == 5){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e5[i]
                };
        }
        if(ed == 6){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e6[i]
                };
        }      
        if(ed == 7){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e7[i]
                };
        }    
        if(ed == 8){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e8[i]
                };
        }
        if(ed == 9){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e9[i]
                };
        }    
        if(ed == 10){
            for (let i = 0; i < attributeNames.length; i++) {
                attributes[attributeNames[i]] = e0[i]
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
     console.log("exec has ended")
    })};
    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
module.exports = {
    exec
}