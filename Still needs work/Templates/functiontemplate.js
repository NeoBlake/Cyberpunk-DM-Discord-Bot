async function temp(interaction) {
    console.log("temp has started")
    const Data = require("../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {      
        const { save } = require("./save");
    
     console.log("temp has ended")
    })};
module.exports = {
    temp
}