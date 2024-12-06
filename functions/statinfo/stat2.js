const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");

async function stat2(interaction) {
    console.log("stat2 has started")
    const Data = require("../../models/temp");
    Data.findOne({
        userID: interaction.user.id
    }, async (err, data) => {      
      const embed = new MessageEmbed();
      embed.setTitle("Stat Information");
      embed.addFields(
        {
          name: `**__Movement Allowance (MA):__**`,
          value: "This is an index of how fast your character can run (important in combat situations). The higher your Movement Allowance (MA), the more distance you can cover in a turn. \n\nRUN: To determine how far your character can run in a single combat round (@3.2 seconds) in meters, multiply your MA by 3. The character can run three times this distance in a full 10 second turn. Write this in the RUN section of your Hard copy Form.\n\nLEAP: To determine how far your character can leap (from a running start), divide your RUN by 4. Write this in the LEAP section of your Hard copy Form.",
          inline: false
        },
        {
          name: `**__Empathy (EMP):__**`,
          value: "This Stat represents how well you relate to other living things a measure of charisma and sympathetic emotions. In a world of alienated, future-shocked survivors, the ability to be \"human\" can no longer be taken for granted. Empathy (EM) is critical when leading, convincing, seducing or perceiving emotional undercurrents. Empathy is also a measure of how close he/she is to the line between feeling human being and cold blooded cyber-monster. \n\nHumanity : This is a measure of the toll cybernetics takes on your ability to relate to other living things. Multiply your EMP by 10 to determine how many humanity points you have. Write the result in the box on your Hard copy Form. Remember: for every 10 points of Humanity lost, you will automatically lose 1 point of EMP. This can have a serious effect on any Empathy- related Skills, as well as forcing you to the edge of cybernetic-induced psychosis.",
          inline: false
        },
        {
          name: `**__Body Type (BT):__**`,
          value: `Strength, Endurance and Constitution are all based on the character's Body Type. Body Type determines how much damage you can take in wounds, how much you can lift or carry, how far you can throw, how well you recover from shock, and how much additional damage you cause with physical attacks. Body Type is important to all character types, but to Solos, Rockerboys and Nomads most of all.  \n\n**__BODY TYPES & POINTS__**\n2 pts .............. .Very Weak\n3-4 pts .................... Weak\n5-7 pts ................ Average\n8-9 pts ................... Strong\n10 pts ........... Very Strong\nYou may carry up to 10x your Body Type in kg. You may also dead lift 40 times your Body Type in kg.`,
        },
        {
          name: `**__BT cont__**`,
          value: `**__Save Number:__**\nYour character's Save Number is a value equal to your Body Type. To make saves, you must roll a value on 1D10 equal to or lower than this number. There are two types of saves in Cyberpunk:\n\n**__Stun Saves:__**\nWhen you take damage in Cyberpunk, or have been exposed to knockout drugs, you will be required to make a Stun Save. If you fail a Stun Save, you will automatically be knocked out of combat and be unable to recover until you can make a successful Stun Save in a following combat turn. You may make one Save roll every turn until you succeed. \n\n**__Death Saves:__**\nWhen you have been Mortally Wounded, or when you have encountered certain types of poisons, you will need to make a Save against Death. On a failed roll, you're Body Bank fodder. Take a moment to find the Save box on your Hard copy Form and fill it in.`,
        },
        {
          name: `**__Body Type Modifier (BTM):__**`,
          value: `Not all people take damage the same way. For example, it takes a lot more damage to stop Arnold The Terminator than it does Arnold the Nerd. This is reflected by the Body Type Modifier, a special bonus used by your character to reduce the effects of damage. The Body type modifier is subtracted from any damage your character takes in combat. \n\n**__BODY TYPE MODIFIER TABLE__**\nVery Weak ........................... -0\nWeak ...................................... -1\nAverage ................................ -2\nStrong .................................... -3\nVery Strong ......................... -4\nSuperhuman^ ..................... -5\n^possible only with cybernetics\n\nFor example, say you took ten points of damage. If you were a Very Weak Body Type, you would take the full ten. But with a Very Strong Body Type, you'd only take (10-4=6) six points of damage.\n\nFind the Body Type Modifier (BTM) box on your Hard copy Form and fill it in. Remember; no matter how cybered up you get, make sure you're solid meat underneath.`,
        },
      );
      
      await interaction.followUp({ embeds: [embed] });
    })};
    console.log("stat2 has ended")
module.exports = {
    stat2
}