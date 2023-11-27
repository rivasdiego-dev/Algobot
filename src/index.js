import dotenv from "dotenv";
dotenv.config();

import { Client, IntentsBitField } from "discord.js";
import { commandsDefinitions } from "./lib/commands.js";

const apiToken = process.env.API_TOKEN;
const usedCommands = new Map();

const bot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

bot.login(apiToken);

bot.on("ready", (b) => {
  console.log(` ${b.user.tag} is ready!\nConnected to ${b.guilds.cache.size} server(s):\n`, b.guilds.cache.map((g) => ("- " + g.name)).join("\n"));
});

bot.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  const userId = interaction.user.id;

  console.log({ commandName, userId });

  if (usedCommands.has(`${userId}-${commandName}`)) {
    await interaction.reply(`You've already used the ${commandName} command!`);
  } else {
    await interaction.reply(commandsDefinitions[commandName](interaction.options));
    usedCommands.set(`${userId}-${commandName}`, true);
  }
});

bot.on("messageCreate", (message) => {
  // Verificar si el mensaje es en "Welcome"
  if (message.channel.id === process.env.WELCOME_CHANNEL_ID) {
    setTimeout(() => {
      // Intentar eliminar el mensaje (puede fallar si el mensaje ya se eliminó)
      message.delete().catch((error) => console.error(`Error al eliminar el mensaje: ${error}`));
    }, (1 * 60000)); // Minutos en milisegundos
  }
});

/* bot.on("guildMemberAdd", async (member) => {
  const defaultRole = member.guild.roles.cache.find(role => role.name === "Member");
  if (defaultRole) {
    member.roles.add(defaultRole);
  }

  const channel = member.guild.channels.cache.find(channel => channel.name === "general");
  if (channel) {
    member.voice.setChannel(channel);
  }
});

bot.on("ready", async () => {
  const server = await bot.guilds.fetch(serverID);
  if (server) {
    server.channels.fetch()
      .then(channels => {
        console.log(`Found ${channels.size} channels on server ${server.name}`);
        channels.forEach(channel => {
          console.log(`Channel name: ${channel.name}, type: ${channel.type}, ID: ${channel.id}`);
        });
      })
      .catch(console.error);
  } else {
    console.log(`No server found with ID: ${serverID}`);
  }
});
 */