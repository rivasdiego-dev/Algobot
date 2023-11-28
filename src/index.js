require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});


eventHandler(client);


client.login(process.env.API_TOKEN);

/* 
  bot.on("interactionCreate", async (interaction) => {
 
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

 bot.on("guildMemberAdd", async (member) => {
  const defaultRole = member.guild.roles.cache.find(role => role.name === "Member");
  if (defaultRole) {
    member.roles.add(defaultRole);
  }

  const channel = member.guild.channels.cache.find(channel => channel.name === "general");
  if (channel) {
    member.voice.setChannel(channel);
  }
});

 */