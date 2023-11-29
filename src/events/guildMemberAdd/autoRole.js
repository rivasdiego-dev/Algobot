require('dotenv').config();
/**
 * Handles the auto role assignment for a new guild member.
 * 
 * @param {Object} client - The Discord client object.
 * @param {Object} member - The guild member object.
 */
module.exports = async (client, member) => {
    try {
        let guild = member.guild;
        if (guild.id !== procces.env.GUILD_ID || !guild) return;

        let role = guild.roles.cache.find(role => role.id === process.env.AUTO_ROLE_ID);
        if (!role) return;

        await member.roles.add(role);

    } catch (error) {

    }
};