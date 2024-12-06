async function charaupdater(interaction) {
    console.log("charaupdater has started")
    const Data = require("../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {      
        const { save } = require("./save");
        
        const tempbtm = data.BODY;
        if(tempbtm <= 2) {
            data.BTM = data.BTM + 0
          }
          if(tempbtm <= 4 && tempbtm >= 3) {
            data.BTM = data.BTM + 1
            if(data.BTM >= 1){
                if(data.BTM === 2){
                    data.BTM = data.BTM - 1
                }
            }
          }
          if(tempbtm <= 7 && tempbtm >= 5) {
            data.BTM = data.BTM + 2
            if(data.BTM >= 2){
                if(data.BTM === 3){
                    data.BTM = data.BTM - 1
                }
                if(data.BTM === 4){
                    data.BTM = data.BTM - 2
                }
            }
          }
          if(tempbtm <= 9 && tempbtm >= 8) {
            data.BTM = data.BTM + 3
            if(data.BTM >= 3){
                if(data.BTM === 4){
                    data.BTM = data.BTM - 1
                }
                if(data.BTM === 5){
                    data.BTM = data.BTM - 2
                }
                if(data.BTM === 6){
                    data.BTM = data.BTM - 3
                }
            }
          }
          if(tempbtm == 10) {
            data.BTM = data.BTM + 4
            if(data.BTM >= 4){
                if(data.BTM === 5){
                    data.BTM = data.BTM - 1
                }
                if(data.BTM === 6){
                    data.BTM = data.BTM - 2
                }
                if(data.BTM === 7){
                    data.BTM = data.BTM - 3
                }
                if(data.BTM === 8){
                    data.BTM = data.BTM - 4
                }
            }
          }
          else{
            data.BTM = data.BTM + 0
          };
        
          data.save();
     console.log("charaupdater has ended")
    })};
module.exports = {
    charaupdater
}