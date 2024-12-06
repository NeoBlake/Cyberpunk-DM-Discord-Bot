const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
module.exports = {
   name: "temp",
   description: "temp",
   type: "CHAT_INPUT",
   developersOnly: true,
   run: async (client, interaction, args) => {

    const { save } = require("../../functions/save");
      //if(data) {
      //data.COOL = data.COOL + 69;
      //   data.save();
      // }else{
      //   save(interaction);
      // };
    // const embed = new MessageEmbed();
    // embed.setTitle("Moon is a very nice lad");
    // interaction.followUp({ embeds: [embed] });
    // save(interaction);
    
    
  //   ranstat()
  //   console.log("outside")
  //   async function ranstat() {
  //     console.log("inside")
  //     const Data = require("../../models/temp");
  //     Data.findOne({
  //         userID: interaction.user.id
  //       }, async (err, data) => {
          
  //         const { save } = require("../../functions/save");
  //     if(data) {
  //       const attributeNames = ['INT', 'REF', 'COOL', 'TECH', 'LUCK', 'ATT', 'MA', 'EMP', 'BODY'];
  //         const attributes = {};
  
  //         for (const attributeName of attributeNames) {
  //             attributes[attributeName] = getRandomValue(3, 10);
  //         }

  //         // console.log(attributeNames)
  //         console.log(attributes.INT)
  //         //console.log(attributeName)
  //         data.INT = data.INT + attributes.INT;
  //         data.REF = data.REF + attributes.REF;
  //         data.COOL = data.COOL + attributes.COOL;
  //         data.TECH = data.TECH + attributes.TECH;
  //         data.LUCK = data.LUCK + attributes.LUCK;
  //         data.ATT = data.ATT + attributes.ATT;
  //         data.MA = data.MA + attributes.MA;
  //         data.EMP = data.EMP + attributes.EMP;
  //         data.BODY = data.BODY + attributes.BODY;

  //         function getRandomValue(min, max) {
  //           return Math.floor(Math.random() * (max - min + 1) + min);
  //           }


  //     //data.COOL = data.COOL + 69;
  //        data.save();
  //      }else{
  //        save(interaction);
  //      };
       
          
  //      /*
  //         generateAttributes()
  //                 function generateAttributes() {
  //         const attributeNames = ['INT', 'REF', 'COOL', 'TECH', 'LUCK', 'ATT', 'MA', 'EMP', 'BODY'];
  //         const attributes = {};
  
  //         for (const attributeName of attributeNames) {
  //             attributes[attributeName] = getRandomValue(3, 10);
  //         }

  //         // console.log(attributeNames)
  //         console.log(attributes.INT)
  //         //console.log(attributeName)
  //         data.INT = data.INT + attributes.INT;

  //         }
  
  //         // Helper function to generate a random value within a range
  //         function getRandomValue(min, max) {
  //         return Math.floor(Math.random() * (max - min + 1) + min);
  //         }
  //         */
              
  //         },
  //       )
  //  }
  const { streetratlp } = require("../../functions/character-info-creation/streetratlp")
  streetratlp(interaction)

  }}
