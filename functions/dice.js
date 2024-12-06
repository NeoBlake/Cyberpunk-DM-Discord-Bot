const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Roll a dice.")
    .addStringOption((option) =>
      option
        .setName("dice")
        .setDescription("Please enter what kind of die. Example: D6, D10, D12, D20")
        .setRequired(true)
    ),

  async run({ client, interaction }) {
    // Check if the user provided a character name
    const dice = interaction.options.getString("dice")
    if (!dice) {
      await interaction.reply("Please provide a type of die.");
      return;
    }

    const diceRegex = /^D(\d+)$/i;
    const match = dice.match(diceRegex);

    if (!match) {
      await interaction.reply("Invalid dice format. Please use the format D4, D6, D10, D12, D20, etc.");
      return;
    }

    const sides = parseInt(match[1]);
    const result = Math.floor(Math.random() * sides) + 1;

    const embed = new EmbedBuilder()
      .setTitle("Die Rolled!")
      .setDescription(`You rolled a D${sides} and got: **${result}**`)
      .setColor("#ff0000");

    await interaction.reply({ embeds: [embed] });
  },
};
