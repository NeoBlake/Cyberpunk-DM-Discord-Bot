const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function compstats(interaction) {
    console.log("compstats has started")
    const Data = require("../../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        const { save } = require("../../../save");
        const attributeNames = ['INT', 'REF', 'DEX', 'TECH', 'COOL', 'WILL', 'LUCK', 'MOVE', 'BODY', 'EMP'];
        const attributes = {};
        
          
        // console.log(attributes)
        // data.INT = data.INT + attributes.INT;
        // data.REF = data.REF + attributes.REF;
        // data.DEX = data.DEX + attributes.DEX;
        // data.COOL = data.COOL + attributes.COOL;
        // data.TECH = data.TECH + attributes.TECH;
        // data.LUCK = data.LUCK + attributes.LUCK;
        // data.WILL = data.WILL + attributes.WILL;
        // data.MOVE = data.MOVE + attributes.MOVE;
        // data.EMP = data.EMP + attributes.EMP;
        // data.BODY = data.BODY + attributes.BODY;
        // const charapoints = attributes.INT + attributes.REF + attributes.DEX + attributes.COOL + attributes.TECH + attributes.LUCK + attributes.WILL + attributes.MOVE + attributes.EMP + attributes.BODY
        // data.charapoints = data.charapoints + charapoints;
        // data.save()
        return
     console.log("compstats has ended")
    })};
module.exports = {
    compstats
}