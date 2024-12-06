client.on('message', (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(`${prefix}poll`)) {
    // Extract the poll options from the message
    const options = message.content.slice(`${prefix}poll`.length).trim().split(',');

    if (options.length < 2) {
      message.channel.send('Please provide at least two options for the poll.');
      return;
    }

    // Send the poll message with reactions
    message.channel.send('React to vote on the poll:').then((pollMessage) => {
      options.forEach((option, index) => {
        pollMessage.react(getEmoji(index)); // Helper function to get emojis 1️⃣, 2️⃣, 3️⃣, ...
      });
    });
  }
});

function getEmoji(index) {
  // Assuming that you want to use numbers as emojis
  const numberEmoji = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

  if (index >= 0 && index < numberEmoji.length) {
    return numberEmoji[index];
  } else {
    return '❌'; // Use an ❌ emoji if there are more than 10 options
  }
}

// Handle reactions
client.on('messageReactionAdd', (reaction, user) => {
  // Check if the reaction is on a poll message
  if (!reaction.message.content.startsWith('React to vote on the poll:')) return;

  const emojiIndex = getEmojiIndex(reaction.emoji.name);
  if (emojiIndex !== -1) {
    const option = reaction.message.content.split('\n')[emojiIndex + 1]; // Get the corresponding option text
    const voter = reaction.message.guild.members.cache.get(user.id);

    // Send a message indicating the user's vote
    voter.send(`You voted for option: ${option}`);
  }
});

function getEmojiIndex(emoji) {
  const numberEmoji = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

  return numberEmoji.indexOf(emoji);
}







client.on('message', async (message) => {
  if (message.author.bot) return;

  if (message.content === `${prefix}ask`) {
    message.channel.send('What is your favorite color?');

    const filter = (response) => response.author.id === message.author.id;
    const options = { max: 1, time: 30000, errors: ['time'] }; // Adjust timeout as needed

    try {
      const collected = await message.channel.awaitMessages(filter, options);
      const response = collected.first();

      if (response) {
        message.channel.send(`Your favorite color is: ${response.content}`);
      } else {
        message.channel.send('You did not respond in time.');
      }
    } catch (error) {
      message.channel.send('An error occurred.');
      console.error(error);
    }
  }
});