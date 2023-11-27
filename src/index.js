require("dotenv").config();

import { Client, IntentsBitField } from "discord.js";

const apiToken = process.env.API_TOKEN;

const bot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

bot.login(apiToken)
  .then(() => {
    console.log("Bot is running");
  })
  .catch((error) => {
    console.error("Failed to login:", error);
  });
