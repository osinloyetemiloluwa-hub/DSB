const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const client = new Client();

// This part prevents Render from sleeping
app.get('/', (req, res) => {
  res.send('Bot is online and running!');
});

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});

// This part handles the Discord connection
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  // Only respond to your own messages to avoid detection/loops
  if (message.author.id !== client.user.id) return;

  if (message.content === '!ping') {
    await message.channel.send('pong');
  }
});

client.login(process.env.DISCORD_TOKEN);