require('dotenv').config();

module.exports = async client => {
    console.log(`${client.user.tag} is ready!\nConnected to ${client.guilds.cache.size} server(s):\n`, client.guilds.cache.map(g => `- ${g.name}`).join("\n"));

    const server = await client.guilds.fetch(process.env.GUILD_ID);
    if (!server) return console.log(`No server found with ID: ${process.env.GUILD_ID}`);

    /* try {
        const channels = await server.channels.fetch();
        console.log(`Found ${channels.size} channels on server ${server.name}`);
        channels.forEach(channel => console.log(`Channel name: ${channel.name}, type: ${channel.type}, ID: ${channel.id}`));
    } catch (error) {
        console.error(error);
    } */

    /* try {
        const roles = await server.roles.fetch();
        console.log(`Found ${roles.size} roles on server ${server.name}`);
        roles.forEach(role => console.log(`Role name: ${role.name}, ID: ${role.id}`));
    } catch (error) {
        console.error(error);
    } */
};