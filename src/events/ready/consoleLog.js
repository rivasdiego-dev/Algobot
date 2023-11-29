require('dotenv').config();

module.exports = async client => {
    console.log(`${client.user.tag} is ready!\nConnected to ${client.guilds.cache.size} server(s):\n`, client.guilds.cache.map(g => `- ${g.name}`).join("\n"));

    const server = await client.guilds.fetch(process.env.GUILD_ID);
    if (!server) return console.log(`No server found with ID: ${process.env.GUILD_ID}`);
    
};