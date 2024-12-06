async function streetrat(interaction) {
    console.log("streetrat has started")
    const Data = require("../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        
        const { save } = require("../save");
    if(data) {
      const { stattemplates } = require("./Stattemplates/stattemplates")
          stattemplates(interaction)
       data.save();
     }else{
        console.log("no data found")
        const embed = new MessageEmbed()
        embed.setTitle(`Error`);
        embed.setDescription(`No player data was found`)
        await interaction.followUp( { embeds: [embed] } );
        return
     };
     console.log("streetrat has ended")
    })};
module.exports = {
    streetrat
}