async function ranstat(interaction) {
    const Data = require("../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {
        
        const { save } = require("../../functions/save");
  const attributeNames = ['INT', 'REF', 'COOL', 'TECH', 'LUCK', 'ATT', 'MA', 'EMP', 'BODY'];
  const attributes = {};

  for (const attributeName of attributeNames) {
      attributes[attributeName] = getRandomValue(3, 10);
  }
  const tempINT = attributes.INT
  console.log(tempINT)
  console.log(attributes.INT)

  data.INT = data.INT + attributes.INT;
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

  return attributes;

  // Helper function to generate a random value within a range
  function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
});
}
module.exports = {
    ranstat
}