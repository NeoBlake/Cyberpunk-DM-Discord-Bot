
async function save(interaction, tempName, tempRole, tempStat, INT, REF, DEX, COOL, TECH, LUCK, ATT, MOVE, EMP, BODY) {
    const Data = require("../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
       const newData = new Data({
        userID: interaction.user.id,
        userName: tempName,
        userRole: tempRole,
        INT: 0,
        REF: 0,
        DEX: 0,
        COOL: 0,
        TECH: 0,
        LUCK: 0,
        WILL: 0,
        MOVE: 0,
        EMP: 0,
        BODY: 0,
        charapoints: 0,
        BTM: 0,
        statSelect: tempStat,
        lifepath: []
      });
      newData.save();
      });
};



module.exports = {
    save
}

// INT REF COOL TECH LUCK ATT MA EMP BODY