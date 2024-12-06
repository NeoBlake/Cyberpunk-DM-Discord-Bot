const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
module.exports = {
   name: "createcharacter",
   description: "temp",
   type: "CHAT_INPUT",
   developersOnly: false,
   options: [
    {
        name: "name",
        description: "please enter a name",
        type: "STRING",
        required: true
    },
    {
      name: "choose",
      description: "Random stats or choose what you want where",
      type: "STRING",
      required: true
  },
   ],
   run: async (client, interaction, args) => {
    const tempName = interaction.options.getString("name");
    const Data = require("../../models/temp");
    Data.findOne({
      userID: interaction.user.id
    }, async (err, data) => {
      const { save } = require("../../functions/save");
      if(data) {
        const embed = new MessageEmbed()
        embed.setTitle("Profile already made");
        //console.log("Found data")
      }else{
        save(interaction, tempName);
        const stats = interaction.options.getString("choose");
        //console.log("choose")
        if(stats == "random") {
            //console.log("inside")
            const Data = require("../../models/temp");
            Data.findOne({
                userID: interaction.user.id
              }, async (err, data) => {
                const { save } = require("../../functions/save");
                if(data) {
                    save(interaction);
                    //console.log("Attributes found")
                }else{
                    //console.log("Attributes not found")
                    //names of the stats
                    const attributeNames = ['INT', 'REF', 'COOL', 'TECH', 'LUCK', 'ATT', 'MA', 'EMP', 'BODY'];
                    const attributes = {};
                    for (const attributeName of attributeNames) {
                        attributes[attributeName] = getRandomValue(3, 10);
                    }
                    const tempINT = attributes.INT;
                    console.log(tempINT);
                    console.log(attributes.INT);
                    //data.INT = data.INT + attributes.INT;
                    /*
                    data.REF = data.REF + attributes.REF;
                    data.COOL = data.COOL + attributes.COOL;
                    data.TECH = data.TECH + attributes.TECH;
                    data.LUCK = data.LUCK + attributes.LUCK;
                    data.ATT = data.ATT + attributes.ATT;
                    data.MA = data.MA + attributes.MA;
                    data.EMP = data.EMP + attributes.EMP;
                    data.BODY = data.BODY + attributes.BODY;
                    */
                    data.save();
                    return;
                    // Helper function to generate a random value within a range
                    function getRandomValue(min, max) {
                      return Math.floor(Math.random() * (max - min + 1) + min);
                    };
                }
              });
            
          
          //const { ranstat } = require("../../functions/ranstat");
          //ranstat(interaction);
          console.log("outside")
          
          //const attributes = ranstat()
          //console.log(attributes)
          //data.INT = data.INT + attributes.INT
        }
          
        
        
        const embed = new MessageEmbed()
        embed.setTitle(`Character Created!`);
        //embed.setDescription(`${tempName}\nAttributes ${data.INT}, ${data.REF}, ${data.COOL}, ${data.TECH}, ${data.ATT}, ${data.MA}, ${data.EMP}, ${data.BODY}`);
        interaction.followUp( { embeds: [embed] } );
      };
    });
   },
};

