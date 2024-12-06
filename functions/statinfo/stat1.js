const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");

async function stat1(interaction) {
    console.log("stat1 has started")
    const Data = require("../../models/temp");
    Data.findOne({
        userID: interaction.user.id
    }, async (err, data) => {      
        const embed = new MessageEmbed();
            embed.setTitle("Stat Information");
            embed.addFields(
                {
                    name: `**__Intelligence (INT):__**`,
                    value: "This is a measure of your problem solving ability; figuring out problems, noticing things, remembering information. Almost every character type will need a high Intelligence, with Netrunners and Corporates requiring the highest of all.",
                    inline: false
                },
                {
                    name: `**__Reflexes (REF):__**`,
                    value: "This is a combined index, covering not only your basic dexterity, but also howyour level of physical coordination will affect feats of driving, piloting, fighting and athletics. Characters who intend to engage in a great deal of combat (such as Solos, Nomads or Rockerboys) should always invest in the highest possible Reflex.",
                    inline: false
                },
                {
                    name: `**__Cool (CL):__**`,
                    value: "This index measures how well the character stands up to stress, fear, pressure, physical pain and/or torture. In determining your willingness to fight on despite wounds or your fighting ability under fire, Coo/(CL) is essential. It is also the measure of how \"together\" your character is and how tough he appears to others. Rockerboys and Fixers should always have a high Cool, with Solos and Nomads having the highest of all.",
                    inline: false
                },
                {
                    name: `**__Technical Ability (TECH):__**`,
                    value: "This is an index of how well you relate to hardware and other technically oriented things. In Cyberpunk, the ability to use and repair technology is of paramount importance-TECH will be the Stat used when fixing, repairing and attempting to use unfamiliar tech. While all characters should have a decent Tech Stat, potential Techies should always opt for the highest possible score in this area.",
                    inline: false
                },
                {
                    name: `**__Luck (LK):__**`,
                    value: "This is the intangible \"something\" that throws the balance of events into your favor. Your luck represents how many points you may use each game to influence the outcome of a critical event. To use Luck, you may add any or all of the points of luck a character has to a critical die roll (declaring your intention to use Luck before the roll is made) until all of your Luck stat is used up. Luck is always restored at the end of each game session.",
                    inline: false
                },
                {
                    name: `**__Attractiveness (ATT):__**`,
                    value: "This is how good-looking you are. In Cyberpunk, it's not enough to be good-you have to look good while you're doing it (Attitude is Everything). Attractiveness is especially important to Medias and Rockerboys, as being good-looking is part of their jobs.",
                    inline: false
                    },
            );
    
        await interaction.followUp({ embeds: [embed] });
    })};
    console.log("stat1 has ended")
module.exports = {
    stat1
}